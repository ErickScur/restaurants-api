export abstract class DeleteWorkingScheduleRepository {
  abstract delete(id: string): Promise<void>;
}
