import { plainToClass } from 'class-transformer'
import { IUserEntity } from '../../IUserEntity'
import { IUserRepository } from './IUserRepository'
import { IUserUpdate } from './IUserUpdate'
import { UserUpdateDto } from '../../dto/UserUpdateDto'

export class UserUpdateRepository implements IUserRepository<IUserEntity> {
  constructor(private readonly _repository: IUserUpdate<IUserEntity>) {}

  async updateOne(
    id: string,
    user: IUserEntity
  ): Promise<boolean | null | never> {
    return await this._repository.update(
      id,
      plainToClass(UserUpdateDto, user, { excludeExtraneousValues: true })
    )
  }
}
