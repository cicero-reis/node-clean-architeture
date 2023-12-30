import ILogin from './ILogin'
import LoginRepository from './LoginRepository'
import ILoginRequestDto from '../dto/ILoginRequestDto'
import ILoginResponseDto from '../dto/ILoginResponseDto'

describe('Login', () => {
  let mockLogin: ILogin<ILoginRequestDto, ILoginResponseDto>

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

    const response = { acessToken: 'acessToken', refreshToken: 'refreshToken' }

    jest
      .spyOn(mockLogin, 'login')
      .mockImplementation(() => Promise.resolve(response))

    const repository = new LoginRepository(mockLogin)
    const result = await repository.login(body)

    let dados = undefined

    if (typeof result === 'boolean') {
      dados = false
    } else {
      const { acessToken, refreshToken } = result
      dados = { acessToken, refreshToken }
    }

    expect(result).toEqual(dados)
  })
})
