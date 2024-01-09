import { ITaskDeleteRepository, ITaskDelete } from '../../index'

export default class TaskDeleteRepository implements ITaskDeleteRepository {
  constructor(private readonly _repository: ITaskDelete) {}

  async deleteOne(id: string): Promise<boolean | null | never> {
    return await this._repository.delete(id)
  }
}
