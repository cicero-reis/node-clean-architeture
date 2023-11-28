export interface ITaskGetOneUseCase<T> {
  execute: (id: string) => Promise<T | null>
}
