import { plainToClass } from 'class-transformer'
import {
  IUserEntity,
  IUserReadOneRepository,
  IUserReadOne,
  UserReadDto
} from '../../index'

export default class UserReadOneRepository
  implements IUserReadOneRepository<IUserEntity>
{
  constructor(private readonly _repository: IUserReadOne<IUserEntity>) {}

  async readOne(id: string): Promise<IUserEntity | null | never> {
    const response = await this._repository.read(id)
    return plainToClass(UserReadDto, response, {
      excludeExtraneousValues: true
    })
  }
}
