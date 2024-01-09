import { TaskReadOneRepository, ITaskEntity } from '../../entity/task'
import { ITaskGetOneUseCase } from '../../usecase/task'

export default class TaskGetOneUseCase
  implements ITaskGetOneUseCase<ITaskEntity>
{
  constructor(private readonly _repository: TaskReadOneRepository) {}

  async execute(id: string): Promise<ITaskEntity | null> {
    return await this._repository.readOne(id)
  }
}
