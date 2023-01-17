import { Controller } from '@nestjs/common';
import { Restaurant } from 'src/domain/models/restaurant';
import { CreateRestaurant } from 'src/domain/use-cases/restaurants/create-restaurant';
import { CreateRestaurantVM } from 'src/presentation/view-models/restaurants/create/create-restaurant-vm';

@Controller('restaurants')
export class CreateRestaurantController {
  constructor(private readonly createRestaurant: CreateRestaurant) {}

  async handle(viewModel: CreateRestaurantVM): Promise<Restaurant> {
    return await this.createRestaurant.create(viewModel);
  }
}
