import { UserReadOneRepository } from '../../entity/user/repository/readOne/UserReadOneRepository'
import { IUserGetOneUseCase } from './interface/IUserGetOneUseCase'
import { IUserEntity } from '../../entity/user/IUserEntity'

export class UserGetOneUseCase implements IUserGetOneUseCase<IUserEntity> {
  constructor(private readonly _repository: UserReadOneRepository) {}

  async execute(id: string): Promise<IUserEntity | null> {
    return await this._repository.readOne(id)
  }
}
