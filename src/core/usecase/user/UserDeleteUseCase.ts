import { UserDeleteRepository } from '../../entity/user'
import { IUserDeleteUseCase } from './index'

export default class UserDeleteUseCase implements IUserDeleteUseCase {
  constructor(private readonly _repository: UserDeleteRepository) {}

  async execute(id: string): Promise<boolean | null | never> {
    return await this._repository.deleteOne(id)
  }
}
