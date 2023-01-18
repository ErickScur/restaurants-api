import { Module } from '@nestjs/common';
import { RestaurantControllersModule } from './presentation/controllers/restaurants/restaurants-controllers.module';

@Module({
  imports: [RestaurantControllersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
