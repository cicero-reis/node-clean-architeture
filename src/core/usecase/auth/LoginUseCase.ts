import { ILoginRequestDto, ILoginResponseDto } from '../../entity/auth'
import LoginRepository from '../../entity/auth/repository/LoginRepository'
import ILoginUseCase from './interface/ILoginUseCase'

export default class LoginUseCase
  implements ILoginUseCase<ILoginRequestDto, ILoginResponseDto>
{
  constructor(private readonly _repository: LoginRepository) {}
  async execute(body: ILoginRequestDto): Promise<ILoginResponseDto | boolean> {
    return await this._repository.login(body)
  }
}
