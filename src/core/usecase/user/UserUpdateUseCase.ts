import { UserUpdateRepository, IUserEntity } from '../../entity/user'
import { IUserUpdateUseCase } from './index'

export default class UserUpdateUseCase
  implements IUserUpdateUseCase<IUserEntity>
{
  constructor(private readonly _repository: UserUpdateRepository) {}

  async execute(
    id: string,
    user: IUserEntity
  ): Promise<boolean | null | never> {
    return await this._repository.updateOne(id, user)
  }
}
