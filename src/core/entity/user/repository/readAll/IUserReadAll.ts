export interface IUserReadAll<T> {
  read(req: object): Promise<T[]>
}
