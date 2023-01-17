import { Injectable } from '@nestjs/common';
import { CreateRestaurantRepository } from 'src/data/protocols/db/restaurants/db-create-restaurant';
import { Restaurant } from 'src/domain/models/restaurant';
import {
  CreateRestaurant,
  CreateRestaurantModel,
} from 'src/domain/use-cases/restaurants/create-restaurant';

@Injectable()
export class CreateRestaurantImplementation implements CreateRestaurant {
  constructor(
    private readonly createRestaurantRepository: CreateRestaurantRepository,
  ) {}

  async create(restaurant: CreateRestaurantModel): Promise<Restaurant> {
    try {
      return await this.createRestaurantRepository.create(restaurant);
    } catch (error) {
      throw error;
    }
  }
}
