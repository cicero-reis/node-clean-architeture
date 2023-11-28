import { UserReadAllRepository } from '../../entity/user/repository/readAll/UserReadAllRepository'
import { IUserGetAllUseCase } from './interface/IUserGetAllUseCase'
import { IUserEntity } from '../../entity/user/IUserEntity'

export class UserGetAllUseCase implements IUserGetAllUseCase<IUserEntity> {
  constructor(private readonly _repository: UserReadAllRepository) {}

  async execute(req: object): Promise<IUserEntity[]> {
    return await this._repository.readAll(req)
  }
}
