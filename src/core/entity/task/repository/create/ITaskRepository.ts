export interface ITaskRepository<T> {
  insertOne: (t: T) => Promise<T>
}
