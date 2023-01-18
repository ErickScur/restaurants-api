import { WorkingSchedule } from 'src/domain/models/working-schedule';

export abstract class GetDayWorkingSchedulesRepository {
  abstract getDayWorkingSchedules(
    restaurantId: string,
    day: string,
  ): Promise<WorkingSchedule[]>;
}
