export default interface ITaskRepository<T> {
  completedOne: (id: string, t: T) => Promise<boolean | null | never>
}
