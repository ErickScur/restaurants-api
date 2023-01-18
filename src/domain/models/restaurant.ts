import { WorkingSchedule } from './working-schedule';

export interface RestaurantProps {
  name: string;
  cnpj: string;
  type: string;
}

export class Restaurant {
  id: string;
  name: string;
  cnpj: string;
  type: string;
  workingSchedule: WorkingSchedule[];

  constructor({ name, cnpj, type }: RestaurantProps) {
    this.name = name;
    this.cnpj = cnpj;
    this.type = type;
  }
}
