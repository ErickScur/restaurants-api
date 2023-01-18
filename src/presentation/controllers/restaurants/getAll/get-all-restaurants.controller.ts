import { Controller } from '@nestjs/common';
import { GetAllRestaurants } from 'src/domain/use-cases/restaurants/get-all-restaurants';
import { RestaurantResponseViewModel } from 'src/presentation/view-models/restaurants/restaurant-vm';

@Controller('restaurants')
export class GetAllRestaurantsController {
  constructor(private readonly getAllRestaurants: GetAllRestaurants) {}

  async handle(): Promise<RestaurantResponseViewModel[]> {
    const restaurants = await this.getAllRestaurants.getAll();

    const payload: RestaurantResponseViewModel[] = [];
    for (const r of restaurants) {
      payload.push(RestaurantResponseViewModel.toViewModel(r));
    }

    return payload;
  }
}
