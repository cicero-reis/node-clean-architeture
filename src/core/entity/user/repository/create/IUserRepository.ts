export interface IUserRepository<T> {
  insertOne: (t: T) => Promise<T>
}
