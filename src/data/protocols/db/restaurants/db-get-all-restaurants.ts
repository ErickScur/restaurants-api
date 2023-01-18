import { Restaurant } from 'src/domain/models/restaurant';

export abstract class GetAllRestaurantsRepository {
  abstract getAll(): Promise<Restaurant[]>;
}
