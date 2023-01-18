import { Injectable, NotFoundException } from '@nestjs/common';
import { DatesRepository } from 'src/data/protocols/dates/dates-repository';
import { GetRestaurantByIdRepository } from 'src/data/protocols/db/restaurants';
import { GetDayWorkingSchedulesRepository } from 'src/data/protocols/db/working-schedules';
import { CheckIsOpened } from 'src/domain/use-cases/working-schedules';

@Injectable()
export class CheckIsOpenedImplementation implements CheckIsOpened {
  constructor(
    private readonly datesRepository: DatesRepository,
    private readonly getRestaurantById: GetRestaurantByIdRepository,
    private readonly getDayWorkingSchedules: GetDayWorkingSchedulesRepository,
  ) {}

  async check(restaurantId: string, date: Date): Promise<boolean> {
    try {
      const restaurant = await this.getRestaurantById.getById(restaurantId);
      if (!restaurant) throw new NotFoundException('Restaurant was not found!');

      const dayNum = this.datesRepository.getDay(date);
      const day = this.getPortugueseDay(dayNum);

      const hour = this.datesRepository.dateToStringTime(date);

      const existingSchedules =
        await this.getDayWorkingSchedules.getDayWorkingSchedules(
          restaurantId,
          day,
        );

      let isOpened = false;
      for (const schedule of existingSchedules) {
        if (schedule.isOpened) {
          if (
            this.datesRepository.isAfter(hour, schedule.startHour) &&
            this.datesRepository.isBefore(hour, schedule.endHour)
          ) {
            isOpened = true;
          }
        }
      }

      return isOpened;
    } catch (error) {
      throw error;
    }
  }

  private getPortugueseDay(day: number): string {
    const days = [
      'domingo',
      'segunda',
      'terça',
      'quarta',
      'quinta',
      'sexta',
      'sábado',
    ];
    return days[day];
  }
}
