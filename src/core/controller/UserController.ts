import { IUserEntity } from '../entity/user'
import IUserPresentation from '../presentation/user/interface/IUserPresentation'

export default class UserController {
  constructor(
    private readonly taskPresentation: IUserPresentation<IUserEntity>
  ) {}

  async index(req: object): Promise<IUserEntity[] | null | never> {
    return await this.taskPresentation.getAll(req)
  }

  async show(id: string): Promise<IUserEntity | null | never> {
    return await this.taskPresentation.getOne(id)
  }

  async store(task: IUserEntity): Promise<IUserEntity | null | never> {
    return await this.taskPresentation.create(task)
  }

  async update(id: string, task: IUserEntity): Promise<boolean | null | never> {
    return await this.taskPresentation.update(id, task)
  }

  async destroy(id: string): Promise<boolean | null | never> {
    return await this.taskPresentation.delete(id)
  }
}
