import { Module } from '@nestjs/common';
import { RestaurantsRepositoriesModule } from 'src/infra/db/prisma/repositories/restaurants/restaurants-repositories.module';
import {
  CreateRestaurant,
  GetAllRestaurants,
} from 'src/domain/use-cases/restaurants';
import {
  CreateRestaurantImplementation,
  GetAllRestaurantsImplementation,
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
  ],
  exports: [CreateRestaurant],
})
export class RestaurantsUseCasesModule {}
