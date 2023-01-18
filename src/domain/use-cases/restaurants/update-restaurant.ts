import { Restaurant } from 'src/domain/models/restaurant';

export interface UpdateRestaurantModel {
  name?: string;
  cnpj?: string;
  type?: string;
}

export abstract class UpdateRestaurant {
  abstract update(
    id: string,
    restaurant: UpdateRestaurantModel,
  ): Promise<Restaurant>;
}
