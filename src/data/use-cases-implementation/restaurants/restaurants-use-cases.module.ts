import { Module } from '@nestjs/common';
import { CreateRestaurant } from 'src/domain/use-cases/restaurants/create-restaurant';
import { RestaurantsRepositoriesModule } from 'src/infra/db/prisma/repositories/restaurants/restaurants-repositories.module';
import { CreateRestaurantImplementation } from './create-restaurant-impl';

@Module({
  imports: [RestaurantsRepositoriesModule],
  providers: [
    {
      provide: CreateRestaurant,
      useClass: CreateRestaurantImplementation,
    },
  ],
  exports: [CreateRestaurant],
})
export class RestaurantsUseCasesModule {}
