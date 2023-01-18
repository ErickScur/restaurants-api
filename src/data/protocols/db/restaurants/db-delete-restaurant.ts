export abstract class DeleteRestaurantRepository {
  abstract delete(id: string): Promise<void>;
}
