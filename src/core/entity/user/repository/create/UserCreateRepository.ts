import { plainToInstance } from 'class-transformer'
import { IUserEntity } from '../../IUserEntity'
import { IUserRepository } from './IUserRepository'
import { IUserCreate } from './IUserCreate'
import { UserCreateDto } from '../../dto/UserCreateDto'
import { UserReadDto } from '../../dto/UserReadDto'

export class UserCreateRepository implements IUserRepository<IUserEntity> {
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
