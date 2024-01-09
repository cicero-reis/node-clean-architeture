import { TaskDeleteRepository } from '../../entity/task'
import { ITaskDeleteUseCase } from '../../usecase/task'

export default class TaskDeleteUseCase implements ITaskDeleteUseCase {
  constructor(private readonly _repository: TaskDeleteRepository) {}

  async execute(id: string): Promise<boolean | null | never> {
    return await this._repository.deleteOne(id)
  }
}
