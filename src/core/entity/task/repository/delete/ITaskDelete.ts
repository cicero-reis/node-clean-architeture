export interface ITaskDelete {
  delete(id: string): Promise<boolean | null | never>
}
