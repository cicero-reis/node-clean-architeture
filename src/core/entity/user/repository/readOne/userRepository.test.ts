import { IUserEntity } from '../../IUserEntity'
import { UserReadOneRepository } from './UserReadOneRepository'
import { plainToClass } from 'class-transformer'
import { IUserReadOne } from './IUserReadOne'
import { UserReadDto } from '../../dto/UserReadDto'

describe('Read one User', () => {
  let mockUserRepository: IUserReadOne<IUserEntity>

  beforeAll(async () => {
    mockUserRepository = { read: jest.fn() }
  })

  beforeEach(() => jest.clearAllMocks())

  test('sould read one User', async () => {
    const body = {
      id: '12345',
      name: 'User 02',
      email: 'user1@gmail.com',
      photo: 'user_photo.png',
      password: 'password',
      confirmPassword: 'password',
      active: 0
    }

    const dto = plainToClass(UserReadDto, body, {
      excludeExtraneousValues: true
    })

    jest
      .spyOn(mockUserRepository, 'read')
      .mockImplementation(() => Promise.resolve(dto))

    const repository = new UserReadOneRepository(mockUserRepository)

    const result = await repository.readOne(body.id)

    expect(result).toEqual(body)
  })
})
