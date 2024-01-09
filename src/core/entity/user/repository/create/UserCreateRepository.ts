import { plainToInstance } from 'class-transformer'
import {
  IUserEntity,
  IUserCreateRepository,
  IUserCreate,
  UserCreateDto,
  UserReadDto
} from '../../index'

export default class UserCreateRepository
  implements IUserCreateRepository<IUserEntity>
{
  constructor(private readonly _repository: IUserCreate<IUserEntity>) {}

  async insertOne(user: IUserEntity): Promise<IUserEntity> {
    const response = await this._repository.create(
      plainToInstance(UserCreateDto, user, { excludeExtraneousValues: true })
    )
    return plainToInstance(UserReadDto, response, {
      excludeExtraneousValues: true
    })
  }
}
