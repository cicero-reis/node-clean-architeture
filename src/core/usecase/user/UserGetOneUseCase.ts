import { UserReadOneRepository, IUserEntity } from '../../entity/user'
import { IUserGetOneUseCase } from './index'

export default class UserGetOneUseCase
  implements IUserGetOneUseCase<IUserEntity>
{
  constructor(private readonly _repository: UserReadOneRepository) {}

  async execute(id: string): Promise<IUserEntity | null> {
    return await this._repository.readOne(id)
  }
}
