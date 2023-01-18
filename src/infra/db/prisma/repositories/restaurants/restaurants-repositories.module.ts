import { Module } from '@nestjs/common';
import { RestaurantsPrismaRepository } from './restaurants-prisma-repository';
import { PrismaModule } from '../../config/prisma.module';
import {
  CreateRestaurantRepository,
  GetAllRestaurantsRepository,
} from 'src/data/protocols/db/restaurants';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: CreateRestaurantRepository,
      useClass: RestaurantsPrismaRepository,
    },
    {
      provide: GetAllRestaurantsRepository,
      useClass: RestaurantsPrismaRepository,
    },
  ],
  exports: [CreateRestaurantRepository, GetAllRestaurantsRepository],
})
export class RestaurantsRepositoriesModule {}
