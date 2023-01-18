import { Module } from '@nestjs/common';
import { RestaurantsRepositoriesModule } from 'src/infra/db/prisma/repositories/restaurants/restaurants-repositories.module';
import {
  CreateRestaurant,
  GetAllRestaurants,
  GetRestaurantById,
} from 'src/domain/use-cases/restaurants';
import {
  CreateRestaurantImplementation,
  GetAllRestaurantsImplementation,
  GetRestaurantByIdImplementation,
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
  ],
  exports: [CreateRestaurant, GetAllRestaurants, GetRestaurantById],
})
export class RestaurantsUseCasesModule {}
