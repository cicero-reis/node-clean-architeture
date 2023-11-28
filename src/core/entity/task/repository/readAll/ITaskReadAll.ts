export interface ITaskReadAll<T> {
  read(req: object): Promise<T[]>
}
