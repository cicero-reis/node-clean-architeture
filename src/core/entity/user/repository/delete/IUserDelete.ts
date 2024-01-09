export default interface IUserDelete {
  delete(id: string): Promise<boolean | null | never>
}
