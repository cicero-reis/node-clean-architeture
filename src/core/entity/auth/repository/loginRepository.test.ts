import {
  ILoginEntity,
  ILogin,
  LoginRepository,
  LoginResponseDto
} from './../../auth'

describe('Login', () => {
  let mockLogin: ILogin<ILoginEntity, LoginResponseDto>

  beforeAll(async () => {
    mockLogin = {
      login: jest.fn()
    }
  })

  beforeEach(() => jest.clearAllMocks())

  test('should login user', async () => {
    const body = {
      email: 'user01@gmail.com',
      password: 'password',
      acessToken: 'acessToken',
      refreshToken: 'refreshToken'
    }

    jest
      .spyOn(mockLogin, 'login')
      .mockImplementation(() => Promise.resolve(body))

    const repository = new LoginRepository(mockLogin)
    const result = await repository.login(body)

    expect(result).toEqual(result)
  })
})
