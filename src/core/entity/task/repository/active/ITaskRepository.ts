export interface ITaskRepository<T> {
  activeOne: (id: string, t: T) => Promise<boolean | null | never>
}
