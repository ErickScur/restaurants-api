import { Module } from '@nestjs/common';
import { RestaurantControllersModule } from './presentation/controllers/restaurants/restaurants-controllers.module';
import { WorkingSchedulesControllersModule } from './presentation/controllers/working-schedules/working-schedules-controllers.module';

@Module({
  imports: [RestaurantControllersModule, WorkingSchedulesControllersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
