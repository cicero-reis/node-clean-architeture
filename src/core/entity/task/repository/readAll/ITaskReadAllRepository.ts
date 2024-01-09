export default interface ITaskReadAllRepository<T> {
  readAll: (req: object) => Promise<T[]>
}
