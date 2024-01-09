import {
  ILoginEntity,
  LoginRepository,
  LoginResponseDto
} from '../../entity/auth'
import ILoginUseCase from './interface/ILoginUseCase'

export default class LoginUseCase
  implements ILoginUseCase<ILoginEntity, LoginResponseDto>
{
  constructor(private readonly _repository: LoginRepository) {}
  async execute(body: ILoginEntity): Promise<LoginResponseDto | boolean> {
    return await this._repository.login(body)
  }
}
