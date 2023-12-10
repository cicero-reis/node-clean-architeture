import { IUserEntity } from '../../IUserEntity'
import { UserReadAllRepository } from './UserReadAllRepository'
import { plainToInstance } from 'class-transformer'
import { IUserReadAll } from './IUserReadAll'
import { UserReadDto } from '../../dto/UserReadDto'

describe('Read one User', () => {
  let mockUserRepository: IUserReadAll<IUserEntity>

  beforeAll(async () => {
    mockUserRepository = { read: jest.fn() }
  })

  beforeEach(() => jest.clearAllMocks())

  test('sould read one User', async () => {
    const Users = [
      {
        id: '12345',
        name: 'User 01',
        email: 'user1@gmail.com',
        photo: 'user_photo.png',
        password: 'password',
        passwordConfirm: 'password',
        active: 0
      },
      {
        id: '12345',
        name: 'User 02',
        email: 'user1@gmail.com',
        photo: 'user_photo.png',
        password: 'password',
        passwordConfirm: 'password',
        active: 0
      }
    ]

    const response = plainToInstance(UserReadDto, Users, {
      excludeExtraneousValues: true
    })

    jest
      .spyOn(mockUserRepository, 'read')
      .mockImplementation(() => Promise.resolve(response))

    const userReadAllRepository = new UserReadAllRepository(mockUserRepository)

    const result = await userReadAllRepository.readAll({})

    expect(result).toStrictEqual(response)
  })
})
