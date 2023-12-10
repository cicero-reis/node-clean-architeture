export default interface ITaskPresentation<T> {
  getAll(req: object): Promise<T[] | null | never>
  getOne(id: string): Promise<T | null | never>
  create(task: T): Promise<T | null | never>
  update(id: string, task: T): Promise<boolean | null | never>
  delete(id: string): Promise<boolean | null | never>
  completed(id: string, task: T): Promise<boolean | null | never>
}
