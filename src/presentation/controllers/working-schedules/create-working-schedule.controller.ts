import { Controller, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateWorkingSchedule } from 'src/domain/use-cases/working-schedules';
import { HttpBadRequestError } from 'src/presentation/swagger';
import { CreateWorkingScheduleVM } from 'src/presentation/view-models/working-schedules';

@ApiTags('Working Schedules')
@Controller('restaurants')
export class CreateWorkingScheduleController {
  constructor(private readonly createWorkingSchedule: CreateWorkingSchedule) {}

  @ApiOperation({ summary: 'Create Working Schedule' })
  @ApiResponse({
    status: 201,
    description: 'Created',
  })
  @ApiResponse(HttpBadRequestError)
  @Post(':restaurantId/working-schedules')
  async handle(
    @Param('restaurantId') restaurantId: string,
    @Body() viewModel: CreateWorkingScheduleVM,
  ) {
    return await this.createWorkingSchedule.create(restaurantId, viewModel);
  }
}
