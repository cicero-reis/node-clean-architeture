export interface IUserRepository {
  deleteOne: (id: string) => Promise<boolean | null | never>
}
