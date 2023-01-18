import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetRestaurantWorkingSchedules } from 'src/domain/use-cases/working-schedules';
import { HttpNotFoundError } from 'src/presentation/swagger';
import { WorkingScheduleVM } from 'src/presentation/view-models/working-schedules/working-schedule-vm';

@ApiTags('Working Schedules')
@Controller('restaurants')
export class GetRestaurantWorkingScheduleController {
  constructor(
    private readonly getRestaurantWorkingSchedule: GetRestaurantWorkingSchedules,
  ) {}

  @ApiOperation({ summary: 'Get Restaurant Working Schedule' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: WorkingScheduleVM,
    isArray: true,
  })
  @ApiResponse(HttpNotFoundError)
  @Get(':restaurantId/working-schedules')
  async handle(@Param('restaurantId') restaurantId: string) {
    return await this.getRestaurantWorkingSchedule.getWorkingSchedules(
      restaurantId,
    );
  }
}
