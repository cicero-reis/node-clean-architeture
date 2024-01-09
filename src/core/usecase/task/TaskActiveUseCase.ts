import { TaskActiveRepository, ITaskEntity } from '../../entity/task'
import { ITaskActiveUseCase } from '../../usecase/task'

export default class TaskActiveUseCase
  implements ITaskActiveUseCase<ITaskEntity>
{
  constructor(private readonly _repository: TaskActiveRepository) {}

  async execute(
    id: string,
    task: ITaskEntity
  ): Promise<boolean | null | never> {
    return await this._repository.activeOne(id, task)
  }
}
