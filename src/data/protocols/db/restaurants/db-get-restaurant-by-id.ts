import { Restaurant } from 'src/domain/models/restaurant';

export abstract class GetRestaurantByIdRepository {
  abstract getById(id: string): Promise<Restaurant>;
}
