export abstract class DeleteWorkingSchedule {
  abstract delete(id: string): Promise<void>;
}
