import { TaskReadAllRepository } from '../../entity/task/repository/readAll/TaskReadAllRepository'
import { ITaskGetAllUseCase } from './interface/ITaskGetAllUseCase'
import { ITaskEntity } from '../../entity/task/ITaskEntity'

export class TaskGetAllUseCase implements ITaskGetAllUseCase<ITaskEntity> {
  constructor(private readonly _repository: TaskReadAllRepository) {}

  async execute(req: object): Promise<ITaskEntity[]> {
    return await this._repository.readAll(req)
  }
}
