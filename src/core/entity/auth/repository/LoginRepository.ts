import { plainToInstance } from 'class-transformer'
import ILogin from './ILogin'
import ILoginRepository from './ILoginRepository'
import LoginRequestDto from '../dto/LoginRequestDto'
import LoginResponseDto from '../dto/LoginResponseDto'
import ILoginEntity from '../ILoginEntity'

export default class LoginRepository implements ILoginRepository<ILoginEntity> {
  constructor(private readonly _repository: ILogin<ILoginEntity>) {}

  async login(body: ILoginEntity): Promise<ILoginEntity> {
    const result = await this._repository.login(
      plainToInstance(LoginRequestDto, body, { excludeExtraneousValues: true })
    )

    return plainToInstance(LoginResponseDto, result, {
      excludeExtraneousValues: true
    })
  }
}
