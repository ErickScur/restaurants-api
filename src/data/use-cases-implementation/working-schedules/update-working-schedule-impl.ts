import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatesRepository } from 'src/data/protocols/dates/dates-repository';
import {
  UpdateWorkingScheduleRepository,
  GetDayWorkingSchedulesRepository,
  GetWorkingScheduleByIdRepository,
} from 'src/data/protocols/db/working-schedules';
import { WorkingSchedule } from 'src/domain/models/working-schedule';
import {
  UpdateWorkingSchedule,
  UpdateWorkingScheduleModel,
} from 'src/domain/use-cases/working-schedules';

@Injectable()
export class UpdateWorkingScheduleImplementation
  implements UpdateWorkingSchedule
{
  constructor(
    private readonly getDayWorkingSchedules: GetDayWorkingSchedulesRepository,
    private readonly updateWorkingSchedule: UpdateWorkingScheduleRepository,
    private readonly getWorkingScheduleByIdRepository: GetWorkingScheduleByIdRepository,
    private readonly datesRepository: DatesRepository,
  ) {}

  async update(
    id: string,
    workingSchedule: UpdateWorkingScheduleModel,
  ): Promise<WorkingSchedule> {
    try {
      const { day, isOpened, endHour, startHour } = workingSchedule;

      const { restaurantId } =
        await this.getWorkingScheduleByIdRepository.getById(id);
      if (!restaurantId)
        throw new NotFoundException('Working Schedule was not found!');

      if (day) {
        const isDayValid = this.validateDay(day);
        if (!isDayValid) {
          throw new BadRequestException(`Invalid day: ${day}`);
        }
      }

      if (isOpened === false) {
        return await this.saveToDb(id, {
          day: workingSchedule.day,
          endHour: null,
          startHour: null,
          isOpened: false,
        });
      } else {
        if (!workingSchedule.endHour && !workingSchedule.startHour) {
          return;
        }
      }

      if (workingSchedule.endHour && !workingSchedule.startHour) {
        throw new BadRequestException('Please provide start hour');
      }

      if (workingSchedule.startHour && !workingSchedule.endHour) {
        throw new BadRequestException('Please provide end hour');
      }

      const existingSchedules =
        await this.getDayWorkingSchedules.getDayWorkingSchedules(
          restaurantId,
          day,
        );

      if (existingSchedules) {
        for (const schedule of existingSchedules) {
          if (schedule.isOpened && schedule.endHour && schedule.startHour) {
            if (
              this.datesRepository.isAfter(startHour, schedule.startHour) &&
              this.datesRepository.isBefore(endHour, schedule.endHour) &&
              schedule.id !== id
            ) {
              throw new BadRequestException('Time range is already in use');
            }

            if (
              this.datesRepository.isAfter(startHour, schedule.startHour) &&
              this.datesRepository.isAfter(endHour, schedule.endHour) &&
              this.datesRepository.isBefore(startHour, schedule.endHour) &&
              schedule.id !== id
            ) {
              throw new BadRequestException('Time range is already in use');
            }

            if (
              this.datesRepository.isBefore(startHour, schedule.startHour) &&
              this.datesRepository.isBefore(endHour, schedule.endHour) &&
              this.datesRepository.isAfter(endHour, schedule.startHour) &&
              schedule.id !== id
            ) {
              throw new BadRequestException('Time range is already in use');
            }
          }
        }
      }

      return await this.saveToDb(id, workingSchedule);
    } catch (error) {
      throw error;
    }
  }

  private async saveToDb(
    id: string,
    workingSchedule: UpdateWorkingScheduleModel,
  ): Promise<WorkingSchedule> {
    try {
      return await this.updateWorkingSchedule.update(id, {
        ...workingSchedule,
        day: workingSchedule.day
          ? this.capitalize(workingSchedule.day)
          : undefined,
      });
    } catch (error) {
      throw error;
    }
  }

  private validateDay(day: string): boolean {
    const days = [
      'domingo',
      'segunda',
      'terça',
      'quarta',
      'quinta',
      'sexta',
      'sábado',
    ];
    if (days.find((d) => d.toLowerCase() == day.toLowerCase())) return true;
    return false;
  }

  private capitalize(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
