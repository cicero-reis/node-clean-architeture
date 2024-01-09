import {
  ILoginEntity,
  ILogin,
  LoginRepository,
  LoginResponseDto
} from './../../core/entity/auth'
import { LoginPresentation } from './../../core/presentation/auth'
import { LoginUseCase } from './../../core/usecase/auth'
import loginRouter from './../routers/loginRouter'
import LoginController from './../../core/controller/auth/LoginController'
import LoginService from './../service/LoginService'

const loginMiddleware = () => {
  const login: ILogin<ILoginEntity, LoginResponseDto> = {
    login: async (body: ILoginEntity): Promise<LoginResponseDto | boolean> => {
      return await LoginService.login(body)
    }
  }
  return loginRouter(
    new LoginController(
      new LoginPresentation(new LoginUseCase(new LoginRepository(login)))
    )
  )
}

export default loginMiddleware
