export default interface ITaskDeleteUseCase {
  execute: (id: string) => Promise<boolean | null | never>
}
