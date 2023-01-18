import { Injectable } from '@nestjs/common';
import { GetAllRestaurantsRepository } from 'src/data/protocols/db/restaurants/db-get-all-restaurants';
import { Restaurant } from 'src/domain/models/restaurant';
import { GetAllRestaurants } from 'src/domain/use-cases/restaurants/get-all-restaurants';

@Injectable()
export class GetAllRestaurantsImplementation implements GetAllRestaurants {
  constructor(
    private readonly getAllRestaurantsRepository: GetAllRestaurantsRepository,
  ) {}

  async getAll(): Promise<Restaurant[]> {
    try {
      return await this.getAllRestaurantsRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
