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
      if (!isOpened) {
        return await this.createWorkingSchedule.create(
          restaurantId,
          workingSchedule,
        );
      }

      const existingSchedules =
        await this.getDayWorkingSchedules.getDayWorkingSchedules(
          restaurantId,
          day,
        );

      if (existingSchedules) {
        for (const schedule of existingSchedules) {
          const attemptStartHour =
            this.datesRepository.stringTimeToDate(startHour);
          const attemptEndHour = this.datesRepository.stringTimeToDate(endHour);

          const existingStartHour = this.datesRepository.stringTimeToDate(
            schedule.startHour,
          );
          const existingEndHour = this.datesRepository.stringTimeToDate(
            schedule.endHour,
          );

          if (
            this.datesRepository.isAfter(attemptStartHour, existingStartHour) &&
            this.datesRepository.isBefore(attemptEndHour, existingEndHour)
          ) {
            throw new BadRequestException('Time range is already in use');
          }
        }
      }

      return await this.createWorkingSchedule.create(
        restaurantId,
        workingSchedule,
      );
    } catch (error) {
      throw error;
    }
  }
}
