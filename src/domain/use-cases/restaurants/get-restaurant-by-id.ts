import { Restaurant } from 'src/domain/models/restaurant';

export abstract class GetRestaurantById {
  abstract getById(): Promise<Restaurant>;
}
