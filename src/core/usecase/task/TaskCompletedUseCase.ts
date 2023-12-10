import { TaskCompletedRepository } from '../../entity/task'
import { ITaskCompletedUseCase } from './interface/ITaskCompletedUseCase'
import { ITaskEntity } from '../../entity/task/ITaskEntity'

export class TaskCompletedUseCase
  implements ITaskCompletedUseCase<ITaskEntity>
{
  constructor(private readonly _repository: TaskCompletedRepository) {}

  async execute(
    id: string,
    task: ITaskEntity
  ): Promise<boolean | null | never> {
    return await this._repository.completedOne(id, task)
  }
}
