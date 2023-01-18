import { Restaurant } from 'src/domain/models/restaurant';
import { CreateRestaurantModel } from 'src/domain/use-cases/restaurants/create-restaurant';

export abstract class CreateRestaurantRepository {
  abstract create(restaurant: CreateRestaurantModel): Promise<Restaurant>;
}
