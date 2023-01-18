import { Module } from '@nestjs/common';
import { DatesModule } from 'src/infra/dates/dates.module';
import { WorkingScheduleRepositoriesModule } from 'src/infra/db/prisma/repositories/working-schedules/working-schedules-repositories.module';
import {
  GetFormattedWorkingScheduleImplementation,
  CreateWorkingScheduleImplementation,
  GetRestaurantWorkingSchedulesImplementation,
} from './';
import {
  GetFormattedWorkingSchedule,
  CreateWorkingSchedule,
  GetRestaurantWorkingSchedules,
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
    {
      provide: GetRestaurantWorkingSchedules,
      useClass: GetRestaurantWorkingSchedulesImplementation,
    },
  ],
  exports: [
    GetFormattedWorkingSchedule,
    CreateWorkingSchedule,
    GetRestaurantWorkingSchedules,
  ],
})
export class WorkingSchedulesUseCasesModule {}
