import { Module } from '@nestjs/common';
import { PrismaModule } from '../../config/prisma.module';
import { WorkingSchedulesPrismaRepository } from './working-schedules-prisma-repository';
import {
  GetWorkingScheduleRepository,
  CreateWorkingScheduleRepository,
  GetDayWorkingSchedulesRepository,
  DeleteWorkingScheduleRepository,
  UpdateWorkingScheduleRepository,
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
    {
      provide: DeleteWorkingScheduleRepository,
      useClass: WorkingSchedulesPrismaRepository,
    },
    {
      provide: UpdateWorkingScheduleRepository,
      useClass: WorkingSchedulesPrismaRepository,
    },
  ],
  exports: [
    GetWorkingScheduleRepository,
    CreateWorkingScheduleRepository,
    GetDayWorkingSchedulesRepository,
    DeleteWorkingScheduleRepository,
    UpdateWorkingScheduleRepository,
  ],
})
export class WorkingScheduleRepositoriesModule {}
