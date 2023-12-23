import ILoginEntity from '../../entity/auth/ILoginEntity'
import ILoginUseCase from '../../usecase/auth/interface/ILoginUseCase'
import ILoginPresentation from './interface/ILoginPresentation'

export default class LoginPresentation
  implements ILoginPresentation<ILoginEntity>
{
  constructor(private readonly _loginUseCase: ILoginUseCase<ILoginEntity>) {}

  async login(body: ILoginEntity): Promise<ILoginEntity> {
    return await this._loginUseCase.execute(body)
  }
}
