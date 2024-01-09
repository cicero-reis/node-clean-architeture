import {
  ILogin,
  ILoginEntity,
  ILoginRepository,
  LoginRequestDto,
  LoginResponseDto
} from './../index'
import { plainToInstance } from 'class-transformer'

export default class LoginRepository
  implements ILoginRepository<ILoginEntity, LoginResponseDto>
{
  constructor(
    private readonly _repository: ILogin<ILoginEntity, LoginResponseDto>
  ) {}

  async login(body: ILoginEntity): Promise<LoginResponseDto | boolean> {
    const response = await this._repository.login(
      plainToInstance(LoginRequestDto, body, { excludeExtraneousValues: true })
    )
    return plainToInstance(LoginResponseDto, response, {
      excludeExtraneousValues: true
    })
  }
}
