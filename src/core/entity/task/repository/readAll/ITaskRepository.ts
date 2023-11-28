export interface ITaskRepository<T> {
  readAll: (req: object) => Promise<T[]>
}
