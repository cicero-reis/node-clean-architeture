import { plainToClass } from 'class-transformer'
import { ITaskEntity } from '../../ITaskEntity'
import { ITaskRepository } from './ITaskRepository'
import { ITaskCompleted } from './ITaskCompleted'
import { TaskCompletedDto } from '../../dto/TaskCompletedDto'

export class TaskCompletedRepository implements ITaskRepository<ITaskEntity> {
  constructor(private readonly _repository: ITaskCompleted<ITaskEntity>) {}

  async completedOne(
    id: string,
    task: ITaskEntity
  ): Promise<boolean | null | never> {
    return await this._repository.completed(
      id,
      plainToClass(TaskCompletedDto, task, { excludeExtraneousValues: true })
    )
  }
}
