export default interface ITaskGetAllUseCase<T> {
  execute: (req: object) => Promise<T[]>
}
