export interface IUserRepository<T> {
  readAll: (req: object) => Promise<T[]>
}
