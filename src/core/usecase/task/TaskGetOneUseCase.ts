import { TaskReadOneRepository } from '../../entity/task/repository/readOne/TaskReadOneRepository'
import { ITaskGetOneUseCase } from './interface/ITaskGetOneUseCase'
import { ITaskEntity } from '../../entity/task/ITaskEntity'

export class TaskGetOneUseCase implements ITaskGetOneUseCase<ITaskEntity> {
  constructor(private readonly _repository: TaskReadOneRepository) {}

  async execute(id: string): Promise<ITaskEntity | null> {
    return await this._repository.readOne(id)
  }
}
