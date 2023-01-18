export abstract class DatesRepository {
  abstract stringTimeToDate(time: string): Date;
  abstract isBefore(date1: Date, date2: Date): boolean;
  abstract isAfter(date1: Date, date2: Date): boolean;
}
