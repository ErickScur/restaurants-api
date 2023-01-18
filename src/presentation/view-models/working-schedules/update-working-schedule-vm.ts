import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateWorkingScheduleVM {
  @ApiProperty({ example: 'Segunda' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  day?: string;

  @ApiProperty({ example: '08:00' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  startHour?: string;

  @ApiProperty({ example: '12:00' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  endHour?: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsOptional()
  isOpened?: boolean;
}
