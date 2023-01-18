import { Module } from '@nestjs/common';
import { RestaurantsUseCasesModule } from 'src/data/use-cases-implementation/restaurants/restaurants-use-cases.module';
import {
  CreateRestaurantController,
  GetAllRestaurantsController,
  GetRestaurantByIdController,
} from './';

@Module({
  imports: [RestaurantsUseCasesModule],
  controllers: [
    CreateRestaurantController,
    GetAllRestaurantsController,
    GetRestaurantByIdController,
  ],
})
export class RestaurantControllersModule {}
