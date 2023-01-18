import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';
import { DatesRepository } from 'src/data/protocols/dates/dates-repository';

@Injectable()
export class DayjsAdapter implements DatesRepository {
  stringTimeToDate(time: string): Date {
    dayjs.extend(utc);
    dayjs.extend(timezone);

    const date = dayjs()
      .set('hours', parseInt(time.split(':')[0]))
      .set('minutes', parseInt(time.split(':')[1]))
      .tz('America/Sao_Paulo')
      .toDate();

    return date;
  }

  isBefore(date1: string, date2: string): boolean {
    dayjs.extend(utc);
    dayjs.extend(timezone);

    const date1ToDate = dayjs()
      .set('hours', parseInt(date1.split(':')[0]))
      .set('minutes', parseInt(date1.split(':')[1]))
      .tz('America/Sao_Paulo');
    const date2ToDate = dayjs()
      .set('hours', parseInt(date2.split(':')[0]))
      .set('minutes', parseInt(date2.split(':')[1]))
      .tz('America/Sao_Paulo');

    return date1ToDate.isBefore(date2ToDate) || date1ToDate.isSame(date2ToDate);
  }

  isAfter(date1: string, date2: string): boolean {
    dayjs.extend(utc);
    dayjs.extend(timezone);

    const date1ToDate = dayjs()
      .set('hours', parseInt(date1.split(':')[0]))
      .set('minutes', parseInt(date1.split(':')[1]))
      .tz('America/Sao_Paulo');
    const date2ToDate = dayjs()
      .set('hours', parseInt(date2.split(':')[0]))
      .set('minutes', parseInt(date2.split(':')[1]))
      .tz('America/Sao_Paulo');

    return date1ToDate.isAfter(date2ToDate) || date1ToDate.isSame(date2ToDate);
  }

  getDay(date: Date): number {
    return dayjs(date).day();
  }

  dateToStringTime(date: Date): string {
    const hours = dayjs(date).hour();
    const minutes = dayjs(date).minute();

    return `${hours}:${minutes}`;
  }
}
