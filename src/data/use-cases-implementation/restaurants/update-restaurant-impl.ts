import { Injectable } from '@nestjs/common';
import { UpdateRestaurantRepository } from 'src/data/protocols/db/restaurants';
import { Restaurant } from 'src/domain/models/restaurant';
import {
  UpdateRestaurant,
  UpdateRestaurantModel,
} from 'src/domain/use-cases/restaurants';

@Injectable()
export class UpdateRestaurantImplementation implements UpdateRestaurant {
  constructor(
    private readonly updateRestaurantRepository: UpdateRestaurantRepository,
  ) {}

  async update(
    id: string,
    restaurant: UpdateRestaurantModel,
  ): Promise<Restaurant> {
    try {
      return await this.updateRestaurantRepository.update(id, restaurant);
    } catch (error) {
      throw error;
    }
  }
}
