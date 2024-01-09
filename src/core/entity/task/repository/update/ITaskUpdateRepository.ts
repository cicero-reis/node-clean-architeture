export default interface ITaskUpdateRepository<T> {
  updateOne: (id: string, t: T) => Promise<boolean | null | never>
}
