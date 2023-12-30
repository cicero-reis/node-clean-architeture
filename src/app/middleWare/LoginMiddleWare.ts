import {
  ILoginRequestDto,
  ILoginResponseDto,
  ILogin,
  LoginRepository
} from './../../core/entity/auth'
import { LoginPresentation } from './../../core/presentation/auth'
import { LoginUseCase } from './../../core/usecase/auth'
import loginRouter from './../routers/loginRouter'
import LoginController from './../../core/controller/auth/LoginController'
import LoginService from './../service/LoginService'

const loginMiddleware = () => {
  const login: ILogin<ILoginRequestDto, ILoginResponseDto> = {
    login: async (
      body: ILoginRequestDto
    ): Promise<ILoginResponseDto | boolean> => {
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
