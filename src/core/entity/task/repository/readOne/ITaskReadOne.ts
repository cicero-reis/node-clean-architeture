export interface ITaskReadOne<T> {
  read(id: string): Promise<T | null | never>
}
