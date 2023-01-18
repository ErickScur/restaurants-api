import { ApiProperty } from '@nestjs/swagger';

export class GetRestaurantWorkingScheduleVM {
  @ApiProperty({
    type: String,
    isArray: true,
    example: [
      'Domingo:  Fechado o dia todo',
      'Segunda à Terça:  Aberto entre 08:00 e 12:00',
      'Quarta à Sexta:  Aberto entre 08:00 e 12:00 e entre 16:00 e 22:00',
    ],
  })
  workingSchedule: string[];
}
