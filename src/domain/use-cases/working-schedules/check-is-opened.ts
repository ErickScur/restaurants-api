export abstract class CheckIsOpened {
  abstract check(restaurantId: string, date: Date): Promise<boolean>;
}
