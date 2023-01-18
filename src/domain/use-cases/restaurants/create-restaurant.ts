import { Restaurant } from 'src/domain/models/restaurant';

export interface CreateRestaurantModel {
  name: string;
  cnpj: string;
  type: string;
}

export abstract class CreateRestaurant {
  abstract create(restaurant: CreateRestaurantModel): Promise<Restaurant>;
}
