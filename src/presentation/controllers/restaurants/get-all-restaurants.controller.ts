import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetAllRestaurants } from 'src/domain/use-cases/restaurants/get-all-restaurants';
import { RestaurantResponseViewModel } from 'src/presentation/view-models/restaurants/restaurant-vm';

@ApiTags('Restaurants')
@Controller('restaurants')
export class GetAllRestaurantsController {
  constructor(private readonly getAllRestaurants: GetAllRestaurants) {}

  @ApiOperation({ summary: 'Get All Restaurants' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: RestaurantResponseViewModel,
    isArray: true,
  })
  @Get()
  async handle(): Promise<RestaurantResponseViewModel[]> {
    const restaurants = await this.getAllRestaurants.getAll();

    const payload: RestaurantResponseViewModel[] = [];
    for (const r of restaurants) {
      payload.push(RestaurantResponseViewModel.toViewModel(r));
    }

    return payload;
  }
}
