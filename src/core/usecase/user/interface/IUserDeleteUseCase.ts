export default interface IUserDeleteUseCase {
  execute: (id: string) => Promise<boolean | null | never>
}
