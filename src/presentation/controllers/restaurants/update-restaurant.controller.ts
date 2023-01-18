import {
  Body,
  Controller,
  NotFoundException,
  Param,
  Patch,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  GetRestaurantById,
  UpdateRestaurant,
} from 'src/domain/use-cases/restaurants';
import { HttpNotFoundError } from 'src/presentation/swagger';
import { UpdateRestaurantVM } from 'src/presentation/view-models/restaurants';
import { RestaurantResponseViewModel } from 'src/presentation/view-models/restaurants/restaurant-vm';

@ApiTags('Restaurants')
@Controller('restaurants')
export class UpdateRestaurantController {
  constructor(
    private readonly getRestaurantById: GetRestaurantById,
    private readonly updateRestaurant: UpdateRestaurant,
  ) {}

  @ApiOperation({ summary: 'Update Restaurant' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: RestaurantResponseViewModel,
  })
  @ApiResponse(HttpNotFoundError)
  @ApiParam({ name: 'id', type: String })
  @Patch(':id')
  async handle(
    @Param('id') id: string,
    @Body() viewModel: UpdateRestaurantVM,
  ): Promise<RestaurantResponseViewModel> {
    const restaurant = await this.getRestaurantById.getById(id);
    if (!restaurant) throw new NotFoundException('Restaurant was not found!');

    const updated = await this.updateRestaurant.update(id, viewModel);

    return RestaurantResponseViewModel.toViewModel(updated);
  }
}
