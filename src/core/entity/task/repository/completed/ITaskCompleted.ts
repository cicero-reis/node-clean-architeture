export interface ITaskCompleted<T> {
  completed(id: string, t: T): Promise<boolean | null | never>
}
