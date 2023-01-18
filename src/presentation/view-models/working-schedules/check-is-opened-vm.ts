import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CheckIsOpenedVM {
  @ApiProperty({ example: '2023-08-08T13:24:38.409Z' })
  @IsNotEmpty()
  date: Date;
}

export class CheckIsOpenedResponseVM {
  @ApiProperty({ example: true })
  isOpened: boolean;
}
