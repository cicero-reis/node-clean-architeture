import ILoginEntity from '../../entity/auth/ILoginEntity'
import LoginRepository from '../../entity/auth/repository/LoginRepository'
import ILoginUseCase from './interface/ILoginUseCase'

export class LoginUseCase implements ILoginUseCase<ILoginEntity> {
  constructor(private readonly _repository: LoginRepository) {}
  async execute(body: ILoginEntity): Promise<ILoginEntity> {
    return await this._repository.login(body)
  }
}
