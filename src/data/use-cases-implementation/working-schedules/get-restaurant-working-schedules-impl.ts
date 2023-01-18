import { Injectable } from '@nestjs/common';
import { GetWorkingScheduleRepository } from 'src/data/protocols/db/working-schedules';
import { WorkingSchedule } from 'src/domain/models/working-schedule';
import { GetRestaurantWorkingSchedules } from 'src/domain/use-cases/working-schedules';

@Injectable()
export class GetRestaurantWorkingSchedulesImplementation
  implements GetRestaurantWorkingSchedules
{
  constructor(
    private readonly getWorkingScheduleRepository: GetWorkingScheduleRepository,
  ) {}

  async getWorkingSchedules(restaurantId: string): Promise<WorkingSchedule[]> {
    try {
      const schedule =
        await this.getWorkingScheduleRepository.getWorkingSchedule(
          restaurantId,
        );

      return schedule.sort((a, b) => {
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
    } catch (error) {
      throw error;
    }
  }
}
