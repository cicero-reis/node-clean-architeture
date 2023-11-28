import { TaskDeleteRepository } from '../../entity/task/repository/delete/TaskDeleteRepository'
import { ITaskDeleteUseCase } from './interface/ITaskDeleteUseCase'

export class TaskDeleteUseCase implements ITaskDeleteUseCase {
  constructor(private readonly _repository: TaskDeleteRepository) {}

  async execute(id: string): Promise<boolean | null | never> {
    return await this._repository.deleteOne(id)
  }
}
