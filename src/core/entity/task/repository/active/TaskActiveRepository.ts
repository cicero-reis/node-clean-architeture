import { plainToClass } from 'class-transformer'
import { ITaskEntity } from '../../ITaskEntity'
import { ITaskRepository } from './ITaskRepository'
import { ITaskActive } from './ITaskActive'
import { TaskActiveDto } from '../../dto/TaskActiveDto'

export class TaskActiveRepository implements ITaskRepository<ITaskEntity> {
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
