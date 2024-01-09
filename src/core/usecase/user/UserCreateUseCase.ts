import { UserCreateRepository, IUserEntity } from '../../entity/user/'
import { IUserCreateUseCase } from './index'

export default class UserCreateUseCase
  implements IUserCreateUseCase<IUserEntity>
{
  constructor(private readonly repository: UserCreateRepository) {}

  async execute(user: IUserEntity): Promise<IUserEntity> {
    return await this.repository.insertOne(user)
  }
}
