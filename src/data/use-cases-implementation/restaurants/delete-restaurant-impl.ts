import { Injectable } from '@nestjs/common';
import { DeleteRestaurantRepository } from 'src/data/protocols/db/restaurants';
import { DeleteRestaurant } from 'src/domain/use-cases/restaurants';

@Injectable()
export class DeleteRestaurantImplementation implements DeleteRestaurant {
  constructor(
    private readonly deleteRestaurantRepository: DeleteRestaurantRepository,
  ) {}

  async delete(id: string): Promise<void> {
    return await this.deleteRestaurantRepository.delete(id);
  }
}
