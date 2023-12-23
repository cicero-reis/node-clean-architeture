import { IUserEntity } from '../../entity/user'
import UserController from './UserController'
import IUserPresentation from '../../presentation/user/interface/IUserPresentation'

describe('Presentation router user', () => {
  let mockUserkPresentation: IUserPresentation<IUserEntity>

  const user = [
    {
      id: 'abc',
      name: 'User 01',
      email: 'user01@gmail.com',
      password: 'password',
      passwordConfirm: 'password',
      active: false
    },
    {
      id: 'cba',
      name: 'User 02',
      email: 'user02@gmail.com',
      password: '!password',
      passwordConfirm: '!password',
      active: false
    }
  ]

  beforeAll(() => {
    mockUserkPresentation = {
      getAll: jest.fn(),
      getOne: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn()
    }
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Presentation user', () => {
    test('should return user', async () => {
      jest
        .spyOn(mockUserkPresentation, 'getAll')
        .mockImplementation(() => Promise.resolve(user))

      const controller = new UserController(mockUserkPresentation)

      const result = await controller.index({})

      expect(result).toEqual(user)
    })

    test('should return one user', async () => {
      jest
        .spyOn(mockUserkPresentation, 'getOne')
        .mockImplementation(() => Promise.resolve(user[0]))

      const controller = new UserController(mockUserkPresentation)

      const result = await controller.show(user[0]['id'])

      expect(result).toEqual(user[0])
    })

    test('should create one user', async () => {
      jest
        .spyOn(mockUserkPresentation, 'create')
        .mockImplementation(() => Promise.resolve(user[0]))

      const controller = new UserController(mockUserkPresentation)

      const result = await controller.store(user[0])

      expect(result).toEqual(user[0])
    })

    test('should udpate one user', async () => {
      jest
        .spyOn(mockUserkPresentation, 'update')
        .mockImplementation(() => Promise.resolve(true))

      const controller = new UserController(mockUserkPresentation)

      const result = await controller.update(user[0]['id'], {
        name: 'User 03',
        email: 'user03@gmail.com',
        photo: 'usuer.png',
        role: 'admin',
        active: false
      })

      expect(result).toEqual(true)
    })

    test('should delete one user', async () => {
      jest
        .spyOn(mockUserkPresentation, 'delete')
        .mockImplementation(() => Promise.resolve(true))

      const controller = new UserController(mockUserkPresentation)

      const result = await controller.destroy(user[0]['id'])

      expect(result).toEqual(true)
    })
  })
})
