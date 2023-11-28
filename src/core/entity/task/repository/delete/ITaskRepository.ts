export interface ITaskRepository {
  deleteOne: (id: string) => Promise<boolean | null | never>
}
