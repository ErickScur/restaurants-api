import { Module } from '@nestjs/common';
import { RestaurantsRepositoriesModule } from 'src/infra/db/prisma/repositories/restaurants/restaurants-repositories.module';
import {
  CreateRestaurant,
  DeleteRestaurant,
  GetAllRestaurants,
  GetRestaurantById,
  UpdateRestaurant,
} from 'src/domain/use-cases/restaurants';
import {
  CreateRestaurantImplementation,
  GetAllRestaurantsImplementation,
  GetRestaurantByIdImplementation,
  DeleteRestaurantImplementation,
  UpdateRestaurantImplementation,
} from './';

@Module({
  imports: [RestaurantsRepositoriesModule],
  providers: [
    {
      provide: CreateRestaurant,
      useClass: CreateRestaurantImplementation,
    },
    {
      provide: GetAllRestaurants,
      useClass: GetAllRestaurantsImplementation,
    },
    {
      provide: GetAllRestaurants,
      useClass: GetAllRestaurantsImplementation,
    },
    {
      provide: GetRestaurantById,
      useClass: GetRestaurantByIdImplementation,
    },
    {
      provide: DeleteRestaurant,
      useClass: DeleteRestaurantImplementation,
    },
    {
      provide: UpdateRestaurant,
      useClass: UpdateRestaurantImplementation,
    },
  ],
  exports: [
    CreateRestaurant,
    GetAllRestaurants,
    GetRestaurantById,
    DeleteRestaurant,
    UpdateRestaurant,
  ],
})
export class RestaurantsUseCasesModule {}
