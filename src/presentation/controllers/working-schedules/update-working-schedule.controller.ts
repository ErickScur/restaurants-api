import { Controller, Body, Param, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateWorkingSchedule } from 'src/domain/use-cases/working-schedules';
import {
  HttpBadRequestError,
  HttpNotFoundError,
} from 'src/presentation/swagger';
import { UpdateWorkingScheduleVM } from 'src/presentation/view-models/working-schedules';
import { WorkingScheduleVM } from 'src/presentation/view-models/working-schedules/working-schedule-vm';

@ApiTags('Working Schedules')
@Controller('restaurants')
export class UpdateWorkingScheduleController {
  constructor(private readonly updateWorkingSchedule: UpdateWorkingSchedule) {}

  @ApiOperation({ summary: 'Update Working Schedule' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: WorkingScheduleVM,
  })
  @ApiResponse(HttpBadRequestError)
  @ApiResponse(HttpNotFoundError)
  @Patch('working-schedules/:id')
  async handle(
    @Param('id') id: string,
    @Body() viewModel: UpdateWorkingScheduleVM,
  ) {
    return await this.updateWorkingSchedule.update(id, viewModel);
  }
}
