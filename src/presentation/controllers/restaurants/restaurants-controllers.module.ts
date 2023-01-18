import { Module } from '@nestjs/common';
import { RestaurantsUseCasesModule } from 'src/data/use-cases-implementation/restaurants/restaurants-use-cases.module';
import { CreateRestaurantController, GetAllRestaurantsController } from './';

@Module({
  imports: [RestaurantsUseCasesModule],
  controllers: [CreateRestaurantController, GetAllRestaurantsController],
})
export class RestaurantControllersModule {}
