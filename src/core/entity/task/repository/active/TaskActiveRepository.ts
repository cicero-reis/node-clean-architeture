import { plainToClass } from 'class-transformer'
import {
  ITaskEntity,
  ITaskActiveRepository,
  ITaskActive,
  TaskActiveDto
} from '../../index'

export default class TaskActiveRepository
  implements ITaskActiveRepository<ITaskEntity>
{
  constructor(private readonly _repository: ITaskActive<ITaskEntity>) {}

  async activeOne(
    id: string,
    task: ITaskEntity
  ): Promise<boolean | null | never> {
    return await this._repository.active(
      id,
      plainToClass(TaskActiveDto, task, { excludeExtraneousValues: true })
    )
  }
}
