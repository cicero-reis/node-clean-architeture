import { TaskUpdateRepository, ITaskEntity } from '../../entity/task'
import { ITaskUpdateUseCase } from '../../usecase/task'

export default class TaskUpdateUseCase
  implements ITaskUpdateUseCase<ITaskEntity>
{
  constructor(private readonly _repository: TaskUpdateRepository) {}

  async execute(
    id: string,
    task: ITaskEntity
  ): Promise<boolean | null | never> {
    return await this._repository.updateOne(id, task)
  }
}
