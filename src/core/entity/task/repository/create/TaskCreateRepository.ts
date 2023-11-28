import { plainToInstance } from 'class-transformer'
import { ITaskEntity } from '../../ITaskEntity'
import { ITaskRepository } from './ITaskRepository'
import { ITaskCreate } from './ITaskCreate'
import { TaskCreateDto } from '../../dto/TaskCreateDto'
import { TaskReadDto } from '../../dto/TaskReadDto'

export class TaskCreateRepository implements ITaskRepository<ITaskEntity> {
  constructor(private readonly _repository: ITaskCreate<ITaskEntity>) {}

  async insertOne(task: ITaskEntity): Promise<ITaskEntity> {
    const response = await this._repository.create(
      plainToInstance(TaskCreateDto, task, { excludeExtraneousValues: true })
    )
    return plainToInstance(TaskReadDto, response, {
      excludeExtraneousValues: true
    })
  }
}
