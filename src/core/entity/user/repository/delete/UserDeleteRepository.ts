import { IUserRepository } from './IUserRepository'
import { IUserDelete } from './IUserDelete'

export class UserDeleteRepository implements IUserRepository {
  constructor(private readonly _repository: IUserDelete) {}

  async deleteOne(id: string): Promise<boolean | null | never> {
    return await this._repository.delete(id)
  }
}
