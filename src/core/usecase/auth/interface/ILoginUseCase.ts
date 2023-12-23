export default interface ILoginUseCase<T> {
  execute: (body: T) => Promise<T>
}
