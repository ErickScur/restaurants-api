import { Restaurant } from 'src/domain/models/restaurant';

export abstract class GetRestaurantById {
  abstract getById(id: string): Promise<Restaurant>;
}
