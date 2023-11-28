export interface ITaskRepository<T> {
  readOne: (id: string) => Promise<T | null | never>
}
