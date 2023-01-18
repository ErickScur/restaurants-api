import { BadRequestException, Injectable } from '@nestjs/common';
import { DatesRepository } from 'src/data/protocols/dates/dates-repository';
import {
  CreateWorkingScheduleRepository,
  GetDayWorkingSchedulesRepository,
} from 'src/data/protocols/db/working-schedules';
import { WorkingSchedule } from 'src/domain/models/working-schedule';
import {
  CreateWorkingSchedule,
  CreateWorkingScheduleModel,
} from 'src/domain/use-cases/working-schedules';

@Injectable()
export class CreateWorkingScheduleImplementation
  implements CreateWorkingSchedule
{
  constructor(
    private readonly getDayWorkingSchedules: GetDayWorkingSchedulesRepository,
    private readonly createWorkingSchedule: CreateWorkingScheduleRepository,
    private readonly datesRepository: DatesRepository,
  ) {}

  async create(
    restaurantId: string,
    workingSchedule: CreateWorkingScheduleModel,
  ): Promise<WorkingSchedule> {
    try {
      const { day, isOpened, endHour, startHour } = workingSchedule;

      const isDayValid = this.validateDay(day);
      if (!isDayValid) {
        throw new BadRequestException(`Invalid day: ${day}`);
      }

      if (!isOpened) {
        return await this.saveToDb(restaurantId, workingSchedule);
      }

      const existingSchedules =
        await this.getDayWorkingSchedules.getDayWorkingSchedules(
          restaurantId,
          day,
        );

      if (existingSchedules) {
        for (const schedule of existingSchedules) {
          if (
            this.datesRepository.isAfter(startHour, schedule.startHour) &&
            this.datesRepository.isBefore(endHour, schedule.endHour)
          ) {
            throw new BadRequestException('Time range is already in use');
          }

          if (
            this.datesRepository.isAfter(startHour, schedule.startHour) &&
            this.datesRepository.isAfter(endHour, schedule.endHour) &&
            this.datesRepository.isBefore(startHour, schedule.endHour)
          ) {
            throw new BadRequestException('Time range is already in use');
          }

          if (
            this.datesRepository.isBefore(startHour, schedule.startHour) &&
            this.datesRepository.isBefore(endHour, schedule.endHour) &&
            this.datesRepository.isAfter(endHour, schedule.startHour)
          ) {
            throw new BadRequestException('Time range is already in use');
          }
        }
      }

      return await this.saveToDb(restaurantId, workingSchedule);
    } catch (error) {
      throw error;
    }
  }

  private async saveToDb(
    restaurantId: string,
    workingSchedule: CreateWorkingScheduleModel,
  ): Promise<WorkingSchedule> {
    try {
      return await this.createWorkingSchedule.create(restaurantId, {
        ...workingSchedule,
        day: this.capitalize(workingSchedule.day),
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
