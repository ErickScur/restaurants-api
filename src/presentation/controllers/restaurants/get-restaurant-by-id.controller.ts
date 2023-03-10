import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetRestaurantById } from 'src/domain/use-cases/restaurants';
import { GetFormattedWorkingSchedule } from 'src/domain/use-cases/working-schedules/get-formatted-working-schedule';
import { HttpNotFoundError } from 'src/presentation/swagger';
import { GetRestaurantByIdViewModel } from 'src/presentation/view-models/restaurants/get-restaurant-by-id-vm';

@ApiTags('Restaurants')
@Controller('restaurants')
export class GetRestaurantByIdController {
  constructor(
    private readonly getRestaurantById: GetRestaurantById,
    private readonly getWorkingSchedule: GetFormattedWorkingSchedule,
  ) {}

  @ApiOperation({ summary: 'Get Restaurant By Id' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: GetRestaurantByIdViewModel,
  })
  @ApiResponse(HttpNotFoundError)
  @ApiParam({ name: 'id', type: String })
  @Get(':id')
  async handle(@Param('id') id: string): Promise<GetRestaurantByIdViewModel> {
    const restaurant = await this.getRestaurantById.getById(id);
    if (!restaurant) throw new NotFoundException('Restaurant was not found!');

    const workingSchedule = await this.getWorkingSchedule.getWorkingSchedule(
      id,
    );

    return {
      id: restaurant.id,
      cnpj: restaurant.cnpj,
      name: restaurant.name,
      type: restaurant.type,
      workingSchedule,
    };
  }
}
