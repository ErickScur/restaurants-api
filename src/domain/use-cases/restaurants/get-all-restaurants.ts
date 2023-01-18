import { Restaurant } from 'src/domain/models/restaurant';

export abstract class GetAllRestaurants {
  abstract getAll(): Promise<Restaurant[]>;
}
