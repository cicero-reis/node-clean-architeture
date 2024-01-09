import { plainToInstance } from 'class-transformer'
import {
  IUserEntity,
  IUserReadAllRepository,
  IUserReadAll,
  UserReadDto
} from '../../index'

export default class UserReadAllRepository
  implements IUserReadAllRepository<IUserEntity>
{
  constructor(private readonly _repository: IUserReadAll<IUserEntity>) {}

  async readAll(req: object): Promise<IUserEntity[]> {
    const response = await this._repository.read(req)
    return plainToInstance(UserReadDto, response, {
      excludeExtraneousValues: true
    })
  }
}
