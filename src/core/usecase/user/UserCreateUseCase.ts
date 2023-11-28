import { UserCreateRepository } from '../../entity/user/repository/create/UserCreateRepository'
import { IUserCreateUseCase } from './interface/IUserCreateUseCase'
import { IUserEntity } from '../../entity/user/IUserEntity'

export class UserCreateUseCase implements IUserCreateUseCase<IUserEntity> {
  constructor(private readonly repository: UserCreateRepository) {}

  async execute(user: IUserEntity): Promise<IUserEntity> {
    return await this.repository.insertOne(user)
  }
}
