import { Module } from '@nestjs/common';
import { GetFormattedWorkingSchedule } from 'src/domain/use-cases/working-schedules/get-formatted-working-schedule';
import { WorkingScheduleRepositoriesModule } from 'src/infra/db/prisma/repositories/working-schedules/working-schedules-repositories.module';
import { GetFormattedWorkingScheduleImplementation } from './get-formatted-working-schedule-impl';

@Module({
  imports: [WorkingScheduleRepositoriesModule],
  providers: [
    {
      provide: GetFormattedWorkingSchedule,
      useClass: GetFormattedWorkingScheduleImplementation,
    },
  ],
  exports: [GetFormattedWorkingSchedule],
})
export class WorkingSchedulesUseCasesModule {}
