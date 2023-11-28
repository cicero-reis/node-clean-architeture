import {
  ITaskCreateUseCase,
  ITaskGetOneUseCase,
  ITaskGetAllUseCase,
  ITaskUpdateUseCase,
  ITaskDeleteUseCase
} from '../../usecase/task/index'
import { ITaskEntity } from '../../entity/task/ITaskEntity'
import ITaskPresentation from './interface/ITaskPresentation'

export default class TaskPresentation
  implements ITaskPresentation<ITaskEntity>
{
  constructor(
    private readonly taskGetAllUseCase: ITaskGetAllUseCase<ITaskEntity>,
    private readonly taskCreateUseCase: ITaskCreateUseCase<ITaskEntity>,
    private readonly taskGetOneUseCase: ITaskGetOneUseCase<ITaskEntity>,
    private readonly taskUpdateUseCase: ITaskUpdateUseCase<ITaskEntity>,
    private readonly taskDeleteUseCase: ITaskDeleteUseCase
  ) {}

  async getAll(req: object): Promise<ITaskEntity[] | null | never> {
    return await this.taskGetAllUseCase.execute(req)
  }

  async getOne(id: string): Promise<ITaskEntity | null | never> {
    return await this.taskGetOneUseCase.execute(id)
  }

  async create(task: ITaskEntity): Promise<ITaskEntity | null | never> {
    return await this.taskCreateUseCase.execute(task)
  }

  async update(id: string, task: ITaskEntity): Promise<boolean | null | never> {
    return await this.taskUpdateUseCase.execute(id, task)
  }

  async delete(id: string): Promise<boolean | null | never> {
    return await this.taskDeleteUseCase.execute(id)
  }
}
