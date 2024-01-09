export default interface IUserReadOneRepository<T> {
  readOne: (id: string) => Promise<T | null | never>
}
