import { ApiProperty } from '@nestjs/swagger';

export class WorkingScheduleVM {
  @ApiProperty({ example: 'Segunda' })
  day: string;

  @ApiProperty({ example: '08:00' })
  startHour: string;

  @ApiProperty({ example: '12:00' })
  endHour: string;

  @ApiProperty({ example: true })
  isOpened: boolean;
}
