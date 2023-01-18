import { WorkingSchedule } from 'src/domain/models/working-schedule';

export interface UpdateWorkingScheduleModel {
  day?: string;
  startHour?: string;
  endHour?: string;
  isOpened?: boolean;
}

export abstract class UpdateWorkingSchedule {
  abstract update(
    id: string,
    workingSchedule: UpdateWorkingScheduleModel,
  ): Promise<WorkingSchedule>;
}
