export default interface IUserReadAllRepository<T> {
  readAll: (req: object) => Promise<T[]>
}
