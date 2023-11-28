import { plainToInstance } from 'class-transformer'
import { ITaskEntity } from '../../ITaskEntity'
import { ITaskRepository } from './ITaskRepository'
import { ITaskReadAll } from './ITaskReadAll'
import { TaskReadDto } from '../../dto/TaskReadDto'

export class TaskReadAllRepository implements ITaskRepository<ITaskEntity> {
  constructor(private readonly _repository: ITaskReadAll<ITaskEntity>) {}

  async readAll(req: object): Promise<ITaskEntity[]> {
    const response = await this._repository.read(req)
    return plainToInstance(TaskReadDto, response, {
      excludeExtraneousValues: true
    })
  }
}
