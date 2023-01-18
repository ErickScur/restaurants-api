import { WorkingSchedule } from 'src/domain/models/working-schedule';

export abstract class GetRestaurantWorkingSchedules {
  abstract getWorkingSchedules(
    restaurantId: string,
  ): Promise<WorkingSchedule[]>;
}
