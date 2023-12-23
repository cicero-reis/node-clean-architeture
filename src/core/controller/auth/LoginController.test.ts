import ILoginEntity from '../../entity/auth/ILoginEntity'
import LoginController from './LoginController'
import ILoginPresentation from '../../presentation/auth/interface/ILoginPresentation'

describe('Controller login', () => {
  let mockLoginPresentation: ILoginPresentation<ILoginEntity>

  const body = {
    email: 'user01@gmail.com',
    password: 'password'
  }

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
        .mockImplementation(() => Promise.resolve(body))

      const controller = new LoginController(mockLoginPresentation)

      const result = await controller.login(body)

      expect(result).toEqual(body)
    })
  })
})
