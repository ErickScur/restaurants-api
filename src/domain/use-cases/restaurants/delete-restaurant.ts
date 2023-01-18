export abstract class DeleteRestaurant {
  abstract delete(id: string): Promise<void>;
}
