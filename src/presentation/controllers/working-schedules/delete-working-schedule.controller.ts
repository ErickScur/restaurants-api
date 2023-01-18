import { Controller, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DeleteWorkingSchedule } from 'src/domain/use-cases/working-schedules';
import { HttpNotFoundError } from 'src/presentation/swagger';

@ApiTags('Working Schedules')
@Controller('restaurants')
export class DeleteWorkingScheduleController {
  constructor(private readonly deleteWorkingSchedule: DeleteWorkingSchedule) {}

  @ApiOperation({ summary: 'Delete Working Schedule' })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiResponse(HttpNotFoundError)
  @Delete('working-schedules/:id')
  async handle(@Param('id') id: string) {
    return await this.deleteWorkingSchedule.delete(id);
  }
}
