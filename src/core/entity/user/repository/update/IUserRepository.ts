export interface IUserRepository<T> {
  updateOne: (id: string, t: T) => Promise<boolean | null | never>
}
