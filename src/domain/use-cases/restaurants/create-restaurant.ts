import { Injectable } from '@nestjs/common';
import { Restaurant } from 'src/domain/models/restaurant';

export interface CreateRestaurantModel {
  name: string;
  cnpj: string;
  type: string;
}

@Injectable()
export abstract class CreateRestaurant {
  abstract create(restaurant: CreateRestaurantModel): Promise<Restaurant>;
}
