import {
  IUserCreateUseCase,
  IUserGetOneUseCase,
  IUserGetAllUseCase,
  IUserUpdateUseCase,
  IUserDeleteUseCase
} from '../../usecase/user/index'
import IUserEntity from '../../entity/user/IUserEntity'
import IUserPresentation from './interface/IUserPresentation'

export default class UserPresentation
  implements IUserPresentation<IUserEntity>
{
  constructor(
    private readonly userGetAllUseCase: IUserGetAllUseCase<IUserEntity>,
    private readonly userCreateUseCase: IUserCreateUseCase<IUserEntity>,
    private readonly userGetOneUseCase: IUserGetOneUseCase<IUserEntity>,
    private readonly userUpdateUseCase: IUserUpdateUseCase<IUserEntity>,
    private readonly userDeleteUseCase: IUserDeleteUseCase
  ) {}

  async getAll(req: object): Promise<IUserEntity[] | null | never> {
    return await this.userGetAllUseCase.execute(req)
  }

  async getOne(id: string): Promise<IUserEntity | null | never> {
    return await this.userGetOneUseCase.execute(id)
  }

  async create(user: IUserEntity): Promise<IUserEntity | null | never> {
    return await this.userCreateUseCase.execute(user)
  }

  async update(id: string, user: IUserEntity): Promise<boolean | null | never> {
    return await this.userUpdateUseCase.execute(id, user)
  }

  async delete(id: string): Promise<boolean | null | never> {
    return await this.userDeleteUseCase.execute(id)
  }
}
