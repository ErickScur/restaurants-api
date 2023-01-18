import { Module } from '@nestjs/common';
import { DatesModule } from 'src/infra/dates/dates.module';
import { WorkingScheduleRepositoriesModule } from 'src/infra/db/prisma/repositories/working-schedules/working-schedules-repositories.module';
import {
  GetFormattedWorkingScheduleImplementation,
  CreateWorkingScheduleImplementation,
  GetRestaurantWorkingSchedulesImplementation,
  UpdateWorkingScheduleImplementation,
} from './';
import {
  GetFormattedWorkingSchedule,
  CreateWorkingSchedule,
  GetRestaurantWorkingSchedules,
  UpdateWorkingSchedule,
} from 'src/domain/use-cases/working-schedules';
import { RestaurantsRepositoriesModule } from 'src/infra/db/prisma/repositories/restaurants/restaurants-repositories.module';

@Module({
  imports: [
    WorkingScheduleRepositoriesModule,
    RestaurantsRepositoriesModule,
    DatesModule,
  ],
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
    {
      provide: UpdateWorkingSchedule,
      useClass: UpdateWorkingScheduleImplementation,
    },
  ],
  exports: [
    GetFormattedWorkingSchedule,
    CreateWorkingSchedule,
    GetRestaurantWorkingSchedules,
    UpdateWorkingSchedule,
  ],
})
export class WorkingSchedulesUseCasesModule {}
