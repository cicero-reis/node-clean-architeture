import LoginController from './LoginController'
import ILoginPresentation from '../../presentation/auth/interface/ILoginPresentation'
import { ILoginRequestDto, ILoginResponseDto } from '../../entity/auth'

describe('Controller login', () => {
  let mockLoginPresentation: ILoginPresentation<
    ILoginRequestDto,
    ILoginResponseDto
  >

  const body = { email: 'user01@gmail.com', password: 'password' }

  const response = { acessToken: 'acessToken', refreshToken: 'refreshToken' }

  beforeAll(() => {
    mockLoginPresentation = {
      login: jest.fn()
    }
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Controller login', () => {
    test('should return user valid', async () => {
      jest
        .spyOn(mockLoginPresentation, 'login')
        .mockImplementation(() => Promise.resolve(response))

      const controller = new LoginController(mockLoginPresentation)

      const result = await controller.login(body)

      expect(result).toEqual(response)
    })
  })
})
