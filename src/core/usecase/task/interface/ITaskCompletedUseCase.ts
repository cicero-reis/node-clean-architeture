export default interface ITaskCompletedUseCase<T> {
  execute: (id: string, task: T) => Promise<boolean | null | never>
}
