import { WorkingSchedule } from 'src/domain/models/working-schedule';

export abstract class GetWorkingScheduleRepository {
  abstract getWorkingSchedule(restaurantId: string): Promise<WorkingSchedule[]>;
}
