import { Module } from '@nestjs/common';
import { WorkingSchedulesUseCasesModule } from 'src/data/use-cases-implementation/working-schedules/working-schedules-use-cases.module';
import {
  CreateWorkingScheduleController,
  GetRestaurantWorkingScheduleController,
  UpdateWorkingScheduleController,
  GetRestaurantFormattedWorkingScheduleController,
  DeleteWorkingScheduleController,
  CheckRestaurantIsOpened,
} from './';

@Module({
  imports: [WorkingSchedulesUseCasesModule],
  controllers: [
    CreateWorkingScheduleController,
    GetRestaurantWorkingScheduleController,
    UpdateWorkingScheduleController,
    GetRestaurantFormattedWorkingScheduleController,
    DeleteWorkingScheduleController,
    CheckRestaurantIsOpened,
  ],
})
export class WorkingSchedulesControllersModule {}
