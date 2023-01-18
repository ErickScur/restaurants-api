import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateRestaurantVM {
  @ApiProperty({ example: 'Lanchonete do Zé' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @ApiProperty({ example: '03.778.130/0001-48' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  cnpj?: string;

  @ApiProperty({ example: 'Lanchonete' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  type?: string;
}
