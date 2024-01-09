export default interface IUserGetOneUseCase<T> {
  execute: (id: string) => Promise<T | null>
}
