import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CheckIsOpenedVM {
  @ApiProperty({ example: '2023-01-23T15:00:51.198Z' })
  @IsNotEmpty()
  date: Date;
}

export class CheckIsOpenedResponseVM {
  @ApiProperty({ example: true })
  isOpened: boolean;
}
