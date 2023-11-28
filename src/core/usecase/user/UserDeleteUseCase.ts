import { UserDeleteRepository } from '../../entity/user/repository/delete/UserDeleteRepository'
import { IUserDeleteUseCase } from './interface/IUserDeleteUseCase'

export class UserDeleteUseCase implements IUserDeleteUseCase {
  constructor(private readonly _repository: UserDeleteRepository) {}

  async execute(id: string): Promise<boolean | null | never> {
    return await this._repository.deleteOne(id)
  }
}
