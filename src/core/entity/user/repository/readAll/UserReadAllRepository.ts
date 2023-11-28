import { plainToInstance } from 'class-transformer'
import { IUserEntity } from '../../IUserEntity'
import { IUserRepository } from './IUserRepository'
import { IUserReadAll } from './IUserReadAll'
import { UserReadDto } from '../../dto/UserReadDto'

export class UserReadAllRepository implements IUserRepository<IUserEntity> {
  constructor(private readonly _repository: IUserReadAll<IUserEntity>) {}

  async readAll(req: object): Promise<IUserEntity[]> {
    const response = await this._repository.read(req)
    return plainToInstance(UserReadDto, response, {
      excludeExtraneousValues: true
    })
  }
}
