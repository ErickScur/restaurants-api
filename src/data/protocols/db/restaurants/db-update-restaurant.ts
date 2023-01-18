import { Restaurant } from 'src/domain/models/restaurant';
import { UpdateRestaurantModel } from 'src/domain/use-cases/restaurants';

export abstract class UpdateRestaurantRepository {
  abstract update(
    id: string,
    restaurant: UpdateRestaurantModel,
  ): Promise<Restaurant>;
}
