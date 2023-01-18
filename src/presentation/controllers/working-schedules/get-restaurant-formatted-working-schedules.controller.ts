import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetFormattedWorkingSchedule } from 'src/domain/use-cases/working-schedules';
import { GetRestaurantWorkingScheduleVM } from 'src/presentation/view-models/working-schedules/get-restaurant-working-schedule-vm';

@ApiTags('Working Schedules')
@Controller('restaurants')
export class GetRestaurantFormattedWorkingScheduleController {
  constructor(
    private readonly getRestaurantWorkingSchedule: GetFormattedWorkingSchedule,
  ) {}

  @ApiOperation({ summary: 'Get Restaurant Formatted Working Schedule' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: GetRestaurantWorkingScheduleVM,
    isArray: true,
  })
  @Get(':restaurantId/working-schedules/formatted')
  async handle(@Param('restaurantId') restaurantId: string) {
    return await this.getRestaurantWorkingSchedule.getWorkingSchedule(
      restaurantId,
    );
  }
}
