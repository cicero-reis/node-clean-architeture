export interface IUserRepository<T> {
  readOne: (id: string) => Promise<T | null | never>
}
