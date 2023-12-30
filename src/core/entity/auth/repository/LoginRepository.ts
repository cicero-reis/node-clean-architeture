import ILogin from './ILogin'
import ILoginRepository from './ILoginRepository'
import ILoginRequestDto from '../dto/ILoginRequestDto'
import ILoginResponseDto from '../dto/ILoginResponseDto'

export default class LoginRepository
  implements ILoginRepository<ILoginRequestDto, ILoginResponseDto>
{
  constructor(
    private readonly _repository: ILogin<ILoginRequestDto, ILoginResponseDto>
  ) {}

  async login(body: ILoginRequestDto): Promise<ILoginResponseDto | boolean> {
    const { email, password } = body

    const result = await this._repository.login({ email, password })

    if (typeof result === 'boolean') return result
    const { acessToken, refreshToken } = result
    return { acessToken, refreshToken }
  }
}
