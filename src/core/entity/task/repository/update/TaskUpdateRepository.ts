import { plainToClass } from 'class-transformer'
import { ITaskEntity, ITaskUpdateRepository, ITaskUpdate } from '../../index'
import TaskUpdateDto from '../../dto/TaskUpdateDto'

export default class TaskUpdateRepository
  implements ITaskUpdateRepository<ITaskEntity>
{
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
