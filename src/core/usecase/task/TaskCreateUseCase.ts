import { ITaskEntity, TaskCreateRepository } from '../../entity/task'
import { ITaskCreateUseCase } from '../../usecase/task'

export default class TaskCreateUseCase
  implements ITaskCreateUseCase<ITaskEntity>
{
  constructor(private readonly repository: TaskCreateRepository) {}

  async execute(task: ITaskEntity): Promise<ITaskEntity> {
    return await this.repository.insertOne(task)
  }
}
