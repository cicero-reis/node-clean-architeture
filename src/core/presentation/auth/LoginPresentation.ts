import { ILoginRequestDto, ILoginResponseDto } from '../../entity/auth'
import ILoginUseCase from '../../usecase/auth/interface/ILoginUseCase'
import ILoginPresentation from './interface/ILoginPresentation'

export default class LoginPresentation
  implements ILoginPresentation<ILoginRequestDto, ILoginResponseDto>
{
  constructor(
    private readonly _loginUseCase: ILoginUseCase<
      ILoginRequestDto,
      ILoginResponseDto
    >
  ) {}

  async login(body: ILoginRequestDto): Promise<ILoginResponseDto | boolean> {
    return await this._loginUseCase.execute(body)
  }
}
