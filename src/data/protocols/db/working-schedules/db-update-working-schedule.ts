import { WorkingSchedule } from 'src/domain/models/working-schedule';
import { UpdateWorkingScheduleModel } from 'src/domain/use-cases/working-schedules';

export abstract class UpdateWorkingScheduleRepository {
  abstract update(
    id: string,
    workingSchedule: UpdateWorkingScheduleModel,
  ): Promise<WorkingSchedule>;
}
