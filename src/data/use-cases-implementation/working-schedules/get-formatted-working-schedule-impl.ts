import { Injectable } from '@nestjs/common';
import { GetWorkingScheduleRepository } from 'src/data/protocols/db/working-schedules/db-get-working-schedule';
import { WorkingSchedule } from 'src/domain/models/working-schedule';
import { GetFormattedWorkingSchedule } from 'src/domain/use-cases/working-schedules/get-formatted-working-schedule';

@Injectable()
export class GetFormattedWorkingScheduleImplementation
  implements GetFormattedWorkingSchedule
{
  constructor(
    private readonly getWorkingScheduleRepository: GetWorkingScheduleRepository,
  ) {}

  async getWorkingSchedule(restaurantId: string): Promise<string[]> {
    try {
      const workingSchedule =
        await this.getWorkingScheduleRepository.getWorkingSchedule(
          restaurantId,
        );

      if (!workingSchedule.length) return [];

      const formatted = this.formatSchedule(workingSchedule);
      const grouped = this.groupDays(formatted);

      return grouped;
    } catch (error) {
      throw error;
    }
  }

  private replaceAll(str: string, find: string, replace: string): string {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  private formatSchedule(schedule: WorkingSchedule[]): string[] {
    schedule.sort((a, b) => {
      const days = [
        'domingo',
        'segunda',
        'terça',
        'quarta',
        'quinta',
        'sexta',
        'sábado',
      ];
      return (
        days.indexOf(a.day.toLowerCase()) - days.indexOf(b.day.toLowerCase())
      );
    });

    const groupedSchedule = schedule.reduce((acc, curr) => {
      if (!acc[curr.day]) {
        acc[curr.day] = {
          isOpened: curr.isOpened,
          startHour: curr.startHour ? [curr.startHour] : [],
          endHour: curr.endHour ? [curr.endHour] : [],
        };
      } else {
        if (curr.startHour) {
          acc[curr.day].startHour.push(curr.startHour);
        }
        if (curr.endHour) {
          acc[curr.day].endHour.push(curr.endHour);
        }
      }
      return acc;
    }, {});

    const scheduleStrings = Object.entries(groupedSchedule) as [
      string,
      WorkingSchedule,
    ][];

    return scheduleStrings.map(([day, group]) => {
      let str = day;
      if (!group.isOpened) {
        str += ': Fechado o dia todo';
      } else {
        for (let i = 0; i < group.startHour.length; i++) {
          str += i === 0 ? ': Aberto entre ' : ' e entre ';
          str += group.startHour[i] + ' e ' + group.endHour[i];
        }
      }
      return str;
    });
  }

  private groupDays(schedule: string[]): string[] {
    const result = [];
    for (let i = 0; i < schedule.length; i++) {
      const day = schedule[i];
      const [dayName, ...workingSchedule] = day.split(':');
      let lastEqualDay = dayName;
      let count = 0;

      for (let j = i + 1; j < schedule.length; j++) {
        const [nextDayName, ...nextDaySchedule] = schedule[j].split(':');
        if (nextDaySchedule.join() == workingSchedule.join()) {
          lastEqualDay = nextDayName;
          count++;
          i = j;
        } else {
          break;
        }
      }

      if (count > 0) {
        result.push(
          `${dayName} à ${lastEqualDay}:${this.replaceAll(
            workingSchedule.join(),
            ',',
            ':',
          )}`,
        );
      } else {
        result.push(
          `${dayName}:${this.replaceAll(workingSchedule.join(), ',', ':')}`,
        );
      }
    }

    return result;
  }
}
