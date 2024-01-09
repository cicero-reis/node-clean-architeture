export default interface ITaskReadAll<T> {
  read(req: object): Promise<T[]>
}
