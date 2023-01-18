import { Injectable, NotFoundException } from '@nestjs/common';
import {
  DeleteWorkingScheduleRepository,
  GetWorkingScheduleByIdRepository,
} from 'src/data/protocols/db/working-schedules';
import { DeleteWorkingSchedule } from 'src/domain/use-cases/working-schedules';

@Injectable()
export class DeleteWorkingScheduleImplementation
  implements DeleteWorkingSchedule
{
  constructor(
    private readonly deleteRepository: DeleteWorkingScheduleRepository,
    private readonly getByIdRepository: GetWorkingScheduleByIdRepository,
  ) {}

  async delete(id: string): Promise<void> {
    try {
      const workingSchedule = await this.getByIdRepository.getById(id);
      if (!workingSchedule)
        throw new NotFoundException('Working Schedule was not found!');

      await this.deleteRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
