export default interface ITaskCreateRepository<T> {
  insertOne: (t: T) => Promise<T>
}
