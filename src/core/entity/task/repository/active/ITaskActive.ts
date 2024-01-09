export default interface ITaskActive<T> {
  active(id: string, t: T): Promise<boolean | null | never>
}
