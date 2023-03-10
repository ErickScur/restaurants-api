import { Module } from '@nestjs/common';
import { RestaurantsPrismaRepository } from './restaurants-prisma-repository';
import { PrismaModule } from '../../config/prisma.module';
import {
  CreateRestaurantRepository,
  GetAllRestaurantsRepository,
  GetRestaurantByIdRepository,
  DeleteRestaurantRepository,
  UpdateRestaurantRepository,
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
    {
      provide: GetRestaurantByIdRepository,
      useClass: RestaurantsPrismaRepository,
    },
    {
      provide: DeleteRestaurantRepository,
      useClass: RestaurantsPrismaRepository,
    },
    {
      provide: UpdateRestaurantRepository,
      useClass: RestaurantsPrismaRepository,
    },
  ],
  exports: [
    CreateRestaurantRepository,
    GetAllRestaurantsRepository,
    GetRestaurantByIdRepository,
    DeleteRestaurantRepository,
    UpdateRestaurantRepository,
  ],
})
export class RestaurantsRepositoriesModule {}
