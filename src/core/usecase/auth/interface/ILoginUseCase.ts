export default interface ILoginUseCase<T1, T2> {
  execute: (body: T1) => Promise<T2 | boolean>
}
