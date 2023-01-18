import { Module } from '@nestjs/common';
import { RestaurantsUseCasesModule } from 'src/data/use-cases-implementation/restaurants/restaurants-use-cases.module';
import { WorkingSchedulesUseCasesModule } from 'src/data/use-cases-implementation/working-schedules/working-schedules-use-cases.module';
import {
  CreateRestaurantController,
  GetAllRestaurantsController,
  GetRestaurantByIdController,
  DeleteRestaurantController,
  UpdateRestaurantController,
} from './';

@Module({
  imports: [RestaurantsUseCasesModule, WorkingSchedulesUseCasesModule],
  controllers: [
    CreateRestaurantController,
    GetAllRestaurantsController,
    GetRestaurantByIdController,
    UpdateRestaurantController,
    DeleteRestaurantController,
  ],
})
export class RestaurantControllersModule {}
