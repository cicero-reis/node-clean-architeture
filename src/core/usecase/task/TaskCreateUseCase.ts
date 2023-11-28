import { TaskCreateRepository } from '../../entity/task/repository/create/TaskCreateRepository'
import { ITaskCreateUseCase } from './interface/ITaskCreateUseCase'
import { ITaskEntity } from '../../entity/task/ITaskEntity'

export class TaskCreateUseCase implements ITaskCreateUseCase<ITaskEntity> {
  constructor(private readonly repository: TaskCreateRepository) {}

  async execute(task: ITaskEntity): Promise<ITaskEntity> {
    return await this.repository.insertOne(task)
  }
}
