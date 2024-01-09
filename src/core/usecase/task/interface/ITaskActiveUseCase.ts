export default interface ITaskActiveUseCase<T> {
  execute: (id: string, task: T) => Promise<boolean | null | never>
}
