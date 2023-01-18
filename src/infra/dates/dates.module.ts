import { Module } from '@nestjs/common';
import { DatesRepository } from 'src/data/protocols/dates/dates-repository';
import { DayjsAdapter } from './dayjs-adapter';

@Module({
  providers: [
    {
      provide: DatesRepository,
      useClass: DayjsAdapter,
    },
  ],
  exports: [DatesRepository],
})
export class DatesModule {}
