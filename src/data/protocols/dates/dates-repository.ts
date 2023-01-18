export abstract class DatesRepository {
  abstract stringTimeToDate(time: string): Date;
  abstract isBefore(date1: string, date2: string): boolean;
  abstract isAfter(date1: string, date2: string): boolean;
  abstract getDay(date: Date): number;
  abstract dateToStringTime(date: Date): string;
}
