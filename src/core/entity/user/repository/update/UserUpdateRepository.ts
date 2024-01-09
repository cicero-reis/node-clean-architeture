import { plainToClass } from 'class-transformer'
import {
  IUserEntity,
  IUserUpdateRepository,
  IUserUpdate,
  UserUpdateDto
} from '../../index'

export default class UserUpdateRepository
  implements IUserUpdateRepository<IUserEntity>
{
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
