import { Module } from '@nestjs/common';
import { RestaurantsUseCasesModule } from 'src/data/use-cases-implementation/restaurants/restaurants-use-cases.module';
import { CreateRestaurantController } from './create/create-restaurant.controller';

@Module({
  imports: [RestaurantsUseCasesModule],
  controllers: [CreateRestaurantController],
})
export class RestaurantControllersModule {}
