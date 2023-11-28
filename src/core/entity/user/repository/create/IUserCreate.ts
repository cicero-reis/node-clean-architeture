export interface IUserCreate<T> {
  create(t: T): Promise<T>
}
