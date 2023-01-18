import { Module } from '@nestjs/common';
import { RestaurantsPrismaRepository } from './restaurants-prisma-repository';
import { CreateRestaurantRepository } from 'src/data/protocols/db/restaurants/db-create-restaurant';
import { PrismaModule } from '../../config/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: CreateRestaurantRepository,
      useClass: RestaurantsPrismaRepository,
    },
  ],
  exports: [CreateRestaurantRepository],
})
export class RestaurantsRepositoriesModule {}
