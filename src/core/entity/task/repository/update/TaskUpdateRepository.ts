import { plainToClass } from 'class-transformer'
import { ITaskEntity } from '../../ITaskEntity'
import { ITaskRepository } from './ITaskRepository'
import { ITaskUpdate } from './ITaskUpdate'
import { TaskUpdateDto } from '../../dto/TaskUpdateDto'

export class TaskUpdateRepository implements ITaskRepository<ITaskEntity> {
  constructor(private readonly _repository: ITaskUpdate<ITaskEntity>) {}

  async updateOne(
    id: string,
    task: ITaskEntity
  ): Promise<boolean | null | never> {
    return await this._repository.update(
      id,
      plainToClass(TaskUpdateDto, task, { excludeExtraneousValues: true })
    )
  }
}
