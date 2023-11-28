export interface IUserGetAllUseCase<T> {
  execute: (req: object) => Promise<T[]>
}
