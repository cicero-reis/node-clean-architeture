export default interface IUserUpdate<T> {
  update(id: string, t: T): Promise<boolean | null | never>
}
