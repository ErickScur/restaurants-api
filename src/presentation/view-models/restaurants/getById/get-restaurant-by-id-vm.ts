import { ApiProperty } from '@nestjs/swagger';

export class GetRestaurantByIdViewModel {
  @ApiProperty({ example: '022348e5-0a34-4d73-849d-bbc6b720c0c0' })
  id: string;

  @ApiProperty({ example: 'Lanchonete do Zé' })
  name: string;

  @ApiProperty({ example: '03.778.130/0001-48' })
  cnpj: string;

  @ApiProperty({ example: 'Lanchonete' })
  type: string;

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
