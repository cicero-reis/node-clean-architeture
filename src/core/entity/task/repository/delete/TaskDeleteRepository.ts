import { ITaskRepository } from './ITaskRepository'
import { ITaskDelete } from './ITaskDelete'

export class TaskDeleteRepository implements ITaskRepository {
  constructor(private readonly _repository: ITaskDelete) {}

  async deleteOne(id: string): Promise<boolean | null | never> {
    return await this._repository.delete(id)
  }
}
