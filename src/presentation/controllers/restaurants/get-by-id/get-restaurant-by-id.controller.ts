import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetRestaurantById } from 'src/domain/use-cases/restaurants';
import { GetFormattedWorkingSchedule } from 'src/domain/use-cases/working-schedules/get-formatted-working-schedule';
import { GetRestaurantByIdViewModel } from 'src/presentation/view-models/restaurants/getById/get-restaurant-by-id-vm';

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
  @ApiParam({ name: 'id', type: String })
  @Get(':id')
  async handle(@Param('id') id: string): Promise<GetRestaurantByIdViewModel> {
    const restaurant = await this.getRestaurantById.getById(id);
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
