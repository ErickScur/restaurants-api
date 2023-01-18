import { Module } from '@nestjs/common';
import { DatesModule } from 'src/infra/dates/dates.module';
import { WorkingScheduleRepositoriesModule } from 'src/infra/db/prisma/repositories/working-schedules/working-schedules-repositories.module';
import {
  GetFormattedWorkingScheduleImplementation,
  CreateWorkingScheduleImplementation,
} from './';
import {
  GetFormattedWorkingSchedule,
  CreateWorkingSchedule,
} from 'src/domain/use-cases/working-schedules';

@Module({
  imports: [WorkingScheduleRepositoriesModule, DatesModule],
  providers: [
    {
      provide: GetFormattedWorkingSchedule,
      useClass: GetFormattedWorkingScheduleImplementation,
    },
    {
      provide: CreateWorkingSchedule,
      useClass: CreateWorkingScheduleImplementation,
    },
  ],
  exports: [GetFormattedWorkingSchedule, CreateWorkingSchedule],
})
export class WorkingSchedulesUseCasesModule {}
