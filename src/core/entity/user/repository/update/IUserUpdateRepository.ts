export default interface IUserUpdateRepository<T> {
  updateOne: (id: string, t: T) => Promise<boolean | null | never>
}
