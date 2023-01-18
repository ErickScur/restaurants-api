import { WorkingSchedule } from 'src/domain/models/working-schedule';

export abstract class GetWorkingScheduleByIdRepository {
  abstract getById(id: string): Promise<WorkingSchedule>;
}
