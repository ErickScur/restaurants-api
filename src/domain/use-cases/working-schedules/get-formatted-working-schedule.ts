export abstract class GetFormattedWorkingSchedule {
  abstract getWorkingSchedule(restaurantId: string): Promise<string[]>;
}
