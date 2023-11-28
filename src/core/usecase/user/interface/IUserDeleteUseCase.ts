export interface IUserDeleteUseCase {
  execute: (id: string) => Promise<boolean | null | never>
}
