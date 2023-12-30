import { ILoginRequestDto, ILoginResponseDto } from '../../entity/auth'
import ILoginPresentation from '../../presentation/auth/interface/ILoginPresentation'

export default class LoginController {
  constructor(
    private readonly _loginPresentation: ILoginPresentation<
      ILoginRequestDto,
      ILoginResponseDto
    >
  ) {}

  async login(body: ILoginRequestDto): Promise<ILoginResponseDto | boolean> {
    return await this._loginPresentation.login(body)
  }
}
