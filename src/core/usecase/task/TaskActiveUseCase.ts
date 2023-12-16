import { TaskActiveRepository } from '../../entity/task'
import { ITaskActiveUseCase } from './interface/ITaskActiveUseCase'
import { ITaskEntity } from '../../entity/task/ITaskEntity'

export class TaskActiveUseCase implements ITaskActiveUseCase<ITaskEntity> {
  constructor(private readonly _repository: TaskActiveRepository) {}

  async execute(
    id: string,
    task: ITaskEntity
  ): Promise<boolean | null | never> {
    return await this._repository.activeOne(id, task)
  }
}
