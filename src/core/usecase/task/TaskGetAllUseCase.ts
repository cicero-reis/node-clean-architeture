import { TaskReadAllRepository, ITaskEntity } from '../../entity/task'
import { ITaskGetAllUseCase } from '../../usecase/task'

export default class TaskGetAllUseCase
  implements ITaskGetAllUseCase<ITaskEntity>
{
  constructor(private readonly _repository: TaskReadAllRepository) {}

  async execute(req: object): Promise<ITaskEntity[]> {
    return await this._repository.readAll(req)
  }
}
