import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { DatesRepository } from 'src/data/protocols/dates/dates-repository';

@Injectable()
export class DayjsAdapter implements DatesRepository {
  stringTimeToDate(time: string): Date {
    return dayjs()
      .set('hours', parseInt(time.split(':')[0]))
      .set('minutes', parseInt(time.split(':')[1]))
      .toDate();
  }

  isBefore(date1: Date, date2: Date): boolean {
    const date = dayjs(date1);
    return date.isBefore(date2) || date.isSame(date2);
  }

  isAfter(date1: Date, date2: Date): boolean {
    const date = dayjs(date1);
    return date.isAfter(date2) || date.isSame(date2);
  }
}
