import { IUserDeleteRepository, IUserDelete } from '../../index'

export default class UserDeleteRepository implements IUserDeleteRepository {
  constructor(private readonly _repository: IUserDelete) {}

  async deleteOne(id: string): Promise<boolean | null | never> {
    return await this._repository.delete(id)
  }
}
