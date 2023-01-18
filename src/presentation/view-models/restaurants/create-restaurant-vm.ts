import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRestaurantVM {
  @ApiProperty({ example: 'Lanchonete do Zé' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '03.778.130/0001-48' })
  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @ApiProperty({ example: 'Lanchonete' })
  @IsString()
  @IsNotEmpty()
  type: string;
}
