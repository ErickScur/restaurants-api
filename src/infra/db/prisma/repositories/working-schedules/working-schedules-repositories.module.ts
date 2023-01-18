import { Module } from '@nestjs/common';
import { GetWorkingScheduleRepository } from 'src/data/protocols/db/working-schedules/';
import { PrismaModule } from '../../config/prisma.module';
import { WorkingSchedulesPrismaRepository } from './working-schedules-prisma-repository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: GetWorkingScheduleRepository,
      useClass: WorkingSchedulesPrismaRepository,
    },
  ],
  exports: [GetWorkingScheduleRepository],
})
export class WorkingScheduleRepositoriesModule {}
