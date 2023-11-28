import { IUserEntity } from '../../IUserEntity'
import { UserCreateDto } from '../../dto/UserCreateDto'
import { UserCreateRepository } from './UserCreateRepository'
import { plainToClass } from 'class-transformer'
import { IUserCreate } from './IUserCreate'

describe('Create user', () => {
  let mockUserRepository: IUserCreate<IUserEntity>

  beforeAll(async () => {
    mockUserRepository = { create: jest.fn() }
  })

  beforeEach(() => jest.clearAllMocks())

  test('sould create user', async () => {
    const body = {
      id: undefined,
      name: 'User 01',
      email: 'user1@gmail.com',
      photo: 'user_photo.png',
      password: 'password',
      confirmPassword: 'password',
      active: 0
    }

    const dto = plainToClass(UserCreateDto, body, {
      excludeExtraneousValues: true
    })

    jest
      .spyOn(mockUserRepository, 'create')
      .mockImplementation(() => Promise.resolve(dto))

    const repository = new UserCreateRepository(mockUserRepository)

    const result = await repository.insertOne(dto)

    expect(result).toEqual(body)
  })
})
