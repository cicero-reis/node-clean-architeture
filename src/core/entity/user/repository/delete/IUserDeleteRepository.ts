export default interface IUserDeleteRepository {
  deleteOne: (id: string) => Promise<boolean | null | never>
}
