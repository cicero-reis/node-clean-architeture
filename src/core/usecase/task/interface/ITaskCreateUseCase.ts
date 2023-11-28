export interface ITaskCreateUseCase<T> {
  execute: (task: T) => Promise<T>
}
