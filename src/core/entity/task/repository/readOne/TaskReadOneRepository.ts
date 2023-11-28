import { plainToClass } from 'class-transformer'
import { ITaskEntity } from '../../ITaskEntity'
import { ITaskRepository } from './ITaskRepository'
import { ITaskReadOne } from './ITaskReadOne'
import { TaskReadDto } from '../../dto/TaskReadDto'

export class TaskReadOneRepository implements ITaskRepository<ITaskEntity> {
  constructor(private readonly _repository: ITaskReadOne<ITaskEntity>) {}

  async readOne(id: string): Promise<ITaskEntity | null | never> {
    const response = await this._repository.read(id)
    return plainToClass(TaskReadDto, response, {
      excludeExtraneousValues: true
    })
  }
}
