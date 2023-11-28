export interface ITaskGetAllUseCase<T> {
  execute: (req: object) => Promise<T[]>
}
