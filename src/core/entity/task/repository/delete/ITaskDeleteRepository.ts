export default interface ITaskDeleteRepository {
  deleteOne: (id: string) => Promise<boolean | null | never>
}
