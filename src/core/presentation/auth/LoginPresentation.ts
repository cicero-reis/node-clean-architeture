import { ILoginEntity, LoginResponseDto } from '../../entity/auth'
import ILoginUseCase from '../../usecase/auth/interface/ILoginUseCase'
import ILoginPresentation from './interface/ILoginPresentation'

export default class LoginPresentation
  implements ILoginPresentation<ILoginEntity, LoginResponseDto>
{
  constructor(
    private readonly _loginUseCase: ILoginUseCase<
      ILoginEntity,
      LoginResponseDto
    >
  ) {}

  async login(body: ILoginEntity): Promise<LoginResponseDto | boolean> {
    return await this._loginUseCase.execute(body)
  }
}
