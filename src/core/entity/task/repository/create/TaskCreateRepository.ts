import { plainToInstance } from 'class-transformer'
import {
  ITaskEntity,
  ITaskCreateRepository,
  ITaskCreate,
  TaskCreateDto,
  TaskReadDto
} from '../../index'

export default class TaskCreateRepository
  implements ITaskCreateRepository<ITaskEntity>
{
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
