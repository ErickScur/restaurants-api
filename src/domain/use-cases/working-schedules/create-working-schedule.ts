import { WorkingSchedule } from 'src/domain/models/working-schedule';

export interface CreateWorkingScheduleModel {
  day: string;
  startHour?: string;
  endHour?: string;
  isOpened: boolean;
}

export abstract class CreateWorkingSchedule {
  abstract create(
    restaurantId: string,
    workingSchedule: CreateWorkingScheduleModel,
  ): Promise<WorkingSchedule>;
}
