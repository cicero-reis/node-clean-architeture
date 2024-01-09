import { plainToClass } from 'class-transformer'
import {
  ITaskEntity,
  ITaskReadOneRepository,
  ITaskReadOne,
  TaskReadDto
} from '../../index'

export default class TaskReadOneRepository
  implements ITaskReadOneRepository<ITaskEntity>
{
  constructor(private readonly _repository: ITaskReadOne<ITaskEntity>) {}

  async readOne(id: string): Promise<ITaskEntity | null | never> {
    const response = await this._repository.read(id)
    return plainToClass(TaskReadDto, response, {
      excludeExtraneousValues: true
    })
  }
}
