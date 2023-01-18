import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetRestaurantById } from 'src/domain/use-cases/restaurants';
import { RestaurantResponseViewModel } from 'src/presentation/view-models/restaurants/restaurant-vm';

@ApiTags('Restaurants')
@Controller('restaurants')
export class GetRestaurantByIdController {
  constructor(private readonly getRestaurantById: GetRestaurantById) {}

  @ApiOperation({ summary: 'Get Restaurant By Id' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: RestaurantResponseViewModel,
  })
  @Get()
  async handle(): Promise<RestaurantResponseViewModel> {
    const restaurant = await this.getRestaurantById.getById();

    return RestaurantResponseViewModel.toViewModel(restaurant);
  }
}
