import {
  ITaskCreateUseCase,
  ITaskGetOneUseCase,
  ITaskGetAllUseCase,
  ITaskUpdateUseCase,
  ITaskDeleteUseCase,
  ITaskCompletedUseCase,
  ITaskActiveUseCase
} from '../../usecase/task/index'
import { ITaskEntity } from '../../entity/task'
import ITaskPresentation from './interface/ITaskPresentation'

export default class TaskPresentation
  implements ITaskPresentation<ITaskEntity>
{
  constructor(
    private readonly taskGetAllUseCase: ITaskGetAllUseCase<ITaskEntity>,
    private readonly taskCreateUseCase: ITaskCreateUseCase<ITaskEntity>,
    private readonly taskGetOneUseCase: ITaskGetOneUseCase<ITaskEntity>,
    private readonly taskUpdateUseCase: ITaskUpdateUseCase<ITaskEntity>,
    private readonly taskDeleteUseCase: ITaskDeleteUseCase,
    private readonly taskCompletedUseCase: ITaskCompletedUseCase<ITaskEntity>,
    private readonly taskActivedUseCase: ITaskActiveUseCase<ITaskEntity>
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

  async completed(
    id: string,
    task: ITaskEntity
  ): Promise<boolean | null | never> {
    return await this.taskCompletedUseCase.execute(id, task)
  }

  async active(id: string, task: ITaskEntity): Promise<boolean | null | never> {
    return await this.taskActivedUseCase.execute(id, task)
  }
}
