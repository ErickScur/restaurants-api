import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetFormattedWorkingSchedule } from 'src/domain/use-cases/working-schedules';
import { HttpBadRequestError } from 'src/presentation/swagger';
import { GetRestaurantWorkingScheduleVM } from 'src/presentation/view-models/working-schedules/get-restaurant-working-schedule-vm';

@ApiTags('Working Schedules')
@Controller('restaurants')
export class GetRestaurantWorkingScheduleController {
  constructor(
    private readonly getRestaurantWorkingSchedule: GetFormattedWorkingSchedule,
  ) {}

  @ApiOperation({ summary: 'Get Restaurant Working Schedule' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: GetRestaurantWorkingScheduleVM,
    isArray: true,
  })
  @ApiResponse(HttpBadRequestError)
  @Get(':restaurantId/working-schedules')
  async handle(@Param('restaurantId') restaurantId: string) {
    return await this.getRestaurantWorkingSchedule.getWorkingSchedule(
      restaurantId,
    );
  }
}
