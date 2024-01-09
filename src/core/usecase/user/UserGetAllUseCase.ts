import { UserReadAllRepository, IUserEntity } from '../../entity/user'
import { IUserGetAllUseCase } from './index'

export default class UserGetAllUseCase
  implements IUserGetAllUseCase<IUserEntity>
{
  constructor(private readonly _repository: UserReadAllRepository) {}

  async execute(req: object): Promise<IUserEntity[]> {
    return await this._repository.readAll(req)
  }
}
