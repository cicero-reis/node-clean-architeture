export default interface ITaskUpdate<T> {
  update(id: string, t: T): Promise<boolean | null | never>
}
