export default interface ITaskReadOneRepository<T> {
  readOne: (id: string) => Promise<T | null | never>
}
