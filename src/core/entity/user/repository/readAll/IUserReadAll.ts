export default interface IUserReadAll<T> {
  read(req: object): Promise<T[]>
}
