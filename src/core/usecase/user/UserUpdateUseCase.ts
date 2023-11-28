import { UserUpdateRepository } from '../../entity/user/repository/update/UserUpdateRepository'
import { IUserUpdateUseCase } from './interface/IUserUpdateUseCase'
import { IUserEntity } from '../../entity/user/IUserEntity'

export class UserUpdateUseCase implements IUserUpdateUseCase<IUserEntity> {
  constructor(private readonly _repository: UserUpdateRepository) {}

  async execute(
    id: string,
    user: IUserEntity
  ): Promise<boolean | null | never> {
    return await this._repository.updateOne(id, user)
  }
}
