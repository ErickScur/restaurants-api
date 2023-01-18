import { WorkingSchedule } from 'src/domain/models/working-schedule';
import { CreateWorkingScheduleModel } from 'src/domain/use-cases/working-schedules';

export abstract class CreateWorkingScheduleRepository {
  abstract create(
    restaurantId: string,
    workingSchedule: CreateWorkingScheduleModel,
  ): Promise<WorkingSchedule>;
}
