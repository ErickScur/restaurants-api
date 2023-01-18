import { Module } from '@nestjs/common';
import { WorkingSchedulesUseCasesModule } from 'src/data/use-cases-implementation/working-schedules/working-schedules-use-cases.module';
import { CreateWorkingScheduleController } from './';

@Module({
  imports: [WorkingSchedulesUseCasesModule],
  controllers: [CreateWorkingScheduleController],
})
export class WorkingSchedulesControllersModule {}
