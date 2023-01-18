import { Controller, Delete, NotFoundException, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  DeleteRestaurant,
  GetRestaurantById,
} from 'src/domain/use-cases/restaurants';
import { HttpNotFoundError } from 'src/presentation/swagger';

@ApiTags('Restaurants')
@Controller('restaurants')
export class DeleteRestaurantController {
  constructor(
    private readonly getRestaurantById: GetRestaurantById,
    private readonly deleteRestaurant: DeleteRestaurant,
  ) {}

  @ApiOperation({ summary: 'Delete Restaurant' })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiResponse(HttpNotFoundError)
  @ApiParam({ name: 'id', type: String })
  @Delete(':id')
  async handle(@Param('id') id: string): Promise<void> {
    const restaurant = await this.getRestaurantById.getById(id);
    if (!restaurant) throw new NotFoundException('Restaurant was not found!');

    await this.deleteRestaurant.delete(id);
  }
}
