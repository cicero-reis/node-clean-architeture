export default interface IUserCreateUseCase<T> {
  execute: (task: T) => Promise<T>
}
