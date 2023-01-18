import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { Restaurant } from 'src/domain/models/restaurant';

export class RestaurantResponseViewModel {
  @ApiProperty({ example: '022348e5-0a34-4d73-849d-bbc6b720c0c0' })
  @IsString()
  @IsNotEmpty()
  public id: string;

  @ApiProperty({ example: 'Lanchonete do Zé' })
  @IsString()
  @IsNotEmpty()
  public name: string;

  @ApiProperty({ example: '03.778.130/0001-48' })
  @IsString()
  @IsNotEmpty()
  public cnpj: string;

  @ApiProperty({ example: 'Lanchonete' })
  @IsString()
  @IsNotEmpty()
  public type: string;

  constructor(id: string, name: string, cnpj: string, type: string) {
    this.id = id;
    this.name = name;
    this.cnpj = cnpj;
    this.type = type;
  }

  static toViewModel({
    id,
    name,
    cnpj,
    type,
  }: Restaurant): RestaurantResponseViewModel {
    return new RestaurantResponseViewModel(id, name, cnpj, type);
  }
}
