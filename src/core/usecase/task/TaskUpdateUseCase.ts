import { TaskUpdateRepository } from '../../entity/task/repository/update/TaskUpdateRepository'
import { ITaskUpdateUseCase } from './interface/ITaskUpdateUseCase'
import { ITaskEntity } from '../../entity/task/ITaskEntity'

export class TaskUpdateUseCase implements ITaskUpdateUseCase<ITaskEntity> {
  constructor(private readonly _repository: TaskUpdateRepository) {}

  async execute(
    id: string,
    task: ITaskEntity
  ): Promise<boolean | null | never> {
    return await this._repository.updateOne(id, task)
  }
}
