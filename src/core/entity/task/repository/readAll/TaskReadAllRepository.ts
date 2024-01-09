import { plainToInstance } from 'class-transformer'
import {
  ITaskEntity,
  ITaskReadAllRepository,
  ITaskReadAll,
  TaskReadDto
} from '../../index'

export default class TaskReadAllRepository
  implements ITaskReadAllRepository<ITaskEntity>
{
  constructor(private readonly _repository: ITaskReadAll<ITaskEntity>) {}

  async readAll(req: object): Promise<ITaskEntity[]> {
    const response = await this._repository.read(req)
    return plainToInstance(TaskReadDto, response, {
      excludeExtraneousValues: true
    })
  }
}
