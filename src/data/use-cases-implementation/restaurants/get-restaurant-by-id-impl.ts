import { Injectable } from '@nestjs/common';
import { GetRestaurantByIdRepository } from 'src/data/protocols/db/restaurants/db-get-restaurant-by-id';
import { Restaurant } from 'src/domain/models/restaurant';
import { GetRestaurantById } from 'src/domain/use-cases/restaurants';

@Injectable()
export class GetRestaurantByIdImplementation implements GetRestaurantById {
  constructor(
    private readonly getRestaurantByIdRepository: GetRestaurantByIdRepository,
  ) {}

  async getById(id: string): Promise<Restaurant> {
    try {
      return await this.getRestaurantByIdRepository.getById(id);
    } catch (error) {
      throw error;
    }
  }
}
