export interface ITaskUpdateUseCase<T> {
  execute: (id: string, task: T) => Promise<boolean | null | never>
}
