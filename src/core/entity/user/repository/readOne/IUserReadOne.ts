export default interface IUserReadOne<T> {
  read(id: string): Promise<T | null | never>
}
