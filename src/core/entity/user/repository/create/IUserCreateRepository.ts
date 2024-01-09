export default interface IUserCreateRepository<T> {
  insertOne: (t: T) => Promise<T>
}
