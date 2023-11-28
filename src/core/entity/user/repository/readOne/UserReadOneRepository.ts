import { plainToClass } from 'class-transformer'
import { IUserEntity } from '../../IUserEntity'
import { IUserRepository } from './IUserRepository'
import { IUserReadOne } from './IUserReadOne'
import { UserReadDto } from '../../dto/UserReadDto'

export class UserReadOneRepository implements IUserRepository<IUserEntity> {
  constructor(private readonly _repository: IUserReadOne<IUserEntity>) {}

  async readOne(id: string): Promise<IUserEntity | null | never> {
    const response = await this._repository.read(id)
    return plainToClass(UserReadDto, response, {
      excludeExtraneousValues: true
    })
  }
}
