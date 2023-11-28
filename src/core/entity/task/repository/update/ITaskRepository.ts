export interface ITaskRepository<T> {
  updateOne: (id: string, t: T) => Promise<boolean | null | never>
}
