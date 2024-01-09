export default interface ITaskActiveRepository<T> {
  activeOne: (id: string, t: T) => Promise<boolean | null | never>
}
