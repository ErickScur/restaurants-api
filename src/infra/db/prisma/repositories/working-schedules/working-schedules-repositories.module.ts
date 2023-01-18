import { Module } from '@nestjs/common';
import { PrismaModule } from '../../config/prisma.module';
import { WorkingSchedulesPrismaRepository } from './working-schedules-prisma-repository';
import {
  GetWorkingScheduleRepository,
  CreateWorkingScheduleRepository,
  GetDayWorkingSchedules,
} from 'src/data/protocols/db/working-schedules';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: GetWorkingScheduleRepository,
      useClass: WorkingSchedulesPrismaRepository,
    },
    {
      provide: CreateWorkingScheduleRepository,
      useClass: WorkingSchedulesPrismaRepository,
    },
    {
      provide: GetDayWorkingSchedules,
      useClass: WorkingSchedulesPrismaRepository,
    },
  ],
  exports: [
    GetWorkingScheduleRepository,
    CreateWorkingScheduleRepository,
    GetDayWorkingSchedules,
  ],
})
export class WorkingScheduleRepositoriesModule {}
