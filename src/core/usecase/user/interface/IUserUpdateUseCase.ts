export default interface IUserUpdateUseCase<T> {
  execute: (id: string, task: T) => Promise<boolean | null | never>
}
