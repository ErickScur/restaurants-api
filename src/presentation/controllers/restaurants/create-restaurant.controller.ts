import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRestaurant } from 'src/domain/use-cases/restaurants/create-restaurant';
import { HttpBadRequestError } from 'src/presentation/swagger';
import {
  RestaurantResponseViewModel,
  CreateRestaurantVM,
} from 'src/presentation/view-models/restaurants';

@ApiTags('Restaurants')
@Controller('restaurants')
export class CreateRestaurantController {
  constructor(private readonly createRestaurant: CreateRestaurant) {}

  @ApiOperation({ summary: 'Create Restaurant' })
  @ApiResponse({
    status: 201,
    description: 'Created',
    type: RestaurantResponseViewModel,
  })
  @ApiResponse(HttpBadRequestError)
  @Post()
  async handle(
    @Body() viewModel: CreateRestaurantVM,
  ): Promise<RestaurantResponseViewModel> {
    const restaurant = await this.createRestaurant.create(viewModel);
    return RestaurantResponseViewModel.toViewModel(restaurant);
  }
}
