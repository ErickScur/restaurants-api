import { Injectable } from '@nestjs/common';
import { WorkingSchedule } from 'src/domain/models/working-schedule';
import { PrismaService } from '../../config/prisma.service';
import {
  GetWorkingScheduleRepository,
  CreateWorkingScheduleRepository,
  GetDayWorkingSchedulesRepository,
  DeleteWorkingScheduleRepository,
  UpdateWorkingScheduleRepository,
  GetWorkingScheduleByIdRepository,
} from 'src/data/protocols/db/working-schedules';
import {
  CreateWorkingScheduleModel,
  UpdateWorkingScheduleModel,
} from 'src/domain/use-cases/working-schedules';

@Injectable()
export class WorkingSchedulesPrismaRepository
  implements
    GetWorkingScheduleRepository,
    CreateWorkingScheduleRepository,
    GetDayWorkingSchedulesRepository,
    DeleteWorkingScheduleRepository,
    UpdateWorkingScheduleRepository,
    GetWorkingScheduleByIdRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async getWorkingSchedule(restaurantId: string): Promise<WorkingSchedule[]> {
    try {
      return await this.prisma.workingDay.findMany({
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

  async getById(id: string): Promise<WorkingSchedule> {
    try {
      return await this.prisma.workingDay.findUnique({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }

  async getDayWorkingSchedules(
    restaurantId: string,
    day: string,
  ): Promise<WorkingSchedule[]> {
    try {
      return await this.prisma.workingDay.findMany({
        where: {
          restaurantId,
          day: {
            mode: 'insensitive',
            equals: day,
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async create(
    restaurantId: string,
    workingSchedule: CreateWorkingScheduleModel,
  ): Promise<WorkingSchedule> {
    try {
      return await this.prisma.workingDay.create({
        data: {
          ...workingSchedule,
          restaurantId,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.prisma.workingDay.delete({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: string,
    workingSchedule: UpdateWorkingScheduleModel,
  ): Promise<WorkingSchedule> {
    try {
      return await this.prisma.workingDay.update({
        where: { id },
        data: workingSchedule,
      });
    } catch (error) {
      throw error;
    }
  }
}
