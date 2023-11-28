export interface ITaskCreate<T> {
  create(t: T): Promise<T>
}
