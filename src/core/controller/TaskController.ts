import { ITaskEntity } from '../entity/task'
import ITaskPresentation from '../presentation/task/interface/ITaskPresentation'

export default class TaskController {
  constructor(
    private readonly taskPresentation: ITaskPresentation<ITaskEntity>
  ) {}

  async index(req: object): Promise<ITaskEntity[] | null | never> {
    return await this.taskPresentation.getAll(req)
  }

  async show(id: string): Promise<ITaskEntity | null | never> {
    return await this.taskPresentation.getOne(id)
  }

  async store(task: ITaskEntity): Promise<ITaskEntity | null | never> {
    return await this.taskPresentation.create(task)
  }

  async update(id: string, task: ITaskEntity): Promise<boolean | null | never> {
    return await this.taskPresentation.update(id, task)
  }

  async destroy(id: string): Promise<boolean | null | never> {
    return await this.taskPresentation.delete(id)
  }
}
