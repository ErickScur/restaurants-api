import { Injectable } from '@nestjs/common';
import { GetWorkingScheduleRepository } from 'src/data/protocols/db/working-schedules/db-get-working-schedule';
import { WorkingSchedule } from 'src/domain/models/working-schedule';
import { PrismaService } from '../../config/prisma.service';

@Injectable()
export class WorkingSchedulesPrismaRepository
  implements GetWorkingScheduleRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async getWorkingSchedule(restaurantId: string): Promise<WorkingSchedule[]> {
    try {
      return await this.prisma.workingSchedule.findMany({
        where: { restaurantId },
        select: {
          day: true,
          endHour: true,
          id: true,
          isOpened: true,
          startHour: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
