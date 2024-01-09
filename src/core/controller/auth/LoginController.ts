import { ILoginEntity, LoginResponseDto } from '../../entity/auth'
import ILoginPresentation from '../../presentation/auth/interface/ILoginPresentation'

export default class LoginController {
  constructor(
    private readonly _loginPresentation: ILoginPresentation<
      ILoginEntity,
      LoginResponseDto
    >
  ) {}

  async login(body: ILoginEntity): Promise<LoginResponseDto | boolean> {
    return await this._loginPresentation.login(body)
  }
}
