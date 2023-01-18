import { Module } from '@nestjs/common';
import { PrismaModule } from '../../config/prisma.module';
import { WorkingSchedulesPrismaRepository } from './working-schedules-prisma-repository';
import {
  GetWorkingScheduleRepository,
  CreateWorkingScheduleRepository,
  GetDayWorkingSchedulesRepository,
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
      provide: GetDayWorkingSchedulesRepository,
      useClass: WorkingSchedulesPrismaRepository,
    },
  ],
  exports: [
    GetWorkingScheduleRepository,
    CreateWorkingScheduleRepository,
    GetDayWorkingSchedulesRepository,
  ],
})
export class WorkingScheduleRepositoriesModule {}
