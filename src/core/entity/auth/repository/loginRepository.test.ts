import { plainToClass } from 'class-transformer'
import ILogin from './ILogin'
import LoginRepository from './LoginRepository'
import LoginRequestDto from '../dto/LoginRequestDto'
import ILoginEntity from '../ILoginEntity'
import LoginResponseDto from '../dto/LoginResponseDto'

describe('Login', () => {
  let mockLogin: ILogin<ILoginEntity>

  beforeAll(async () => {
    mockLogin = {
      login: jest.fn()
    }
  })

  beforeEach(() => jest.clearAllMocks())

  test('should login user', async () => {
    const body = {
      email: 'user01@gmail.com',
      password: 'password'
    }

    const dto = plainToClass(LoginRequestDto, body, {
      excludeExtraneousValues: true
    })

    jest
      .spyOn(mockLogin, 'login')
      .mockImplementation(() => Promise.resolve(dto))

    const repository = new LoginRepository(mockLogin)
    const result = await repository.login(dto)

    result.token = 'clksmvfkgnrenvfnvlflvk'

    const response = plainToClass(LoginResponseDto, result, {
      excludeExtraneousValues: true
    })

    expect(result).toEqual(response)
  })
})
