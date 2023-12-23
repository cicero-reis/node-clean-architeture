import ILoginEntity from '../../entity/auth/ILoginEntity'
import ILoginPresentation from '../../presentation/auth/interface/ILoginPresentation'

export default class LoginController {
  constructor(
    private readonly _loginPresentation: ILoginPresentation<ILoginEntity>
  ) {}

  async login(body: ILoginEntity): Promise<ILoginEntity> {
    return await this._loginPresentation.login(body)
  }
}
