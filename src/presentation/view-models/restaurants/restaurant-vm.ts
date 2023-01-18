import { ApiProperty } from '@nestjs/swagger';
import { Restaurant } from 'src/domain/models/restaurant';

export class RestaurantResponseViewModel {
  @ApiProperty({ example: '022348e5-0a34-4d73-849d-bbc6b720c0c0' })
  public id: string;

  @ApiProperty({ example: 'Lanchonete do Zé' })
  public name: string;

  @ApiProperty({ example: '03.778.130/0001-48' })
  public cnpj: string;

  @ApiProperty({ example: 'Lanchonete' })
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
