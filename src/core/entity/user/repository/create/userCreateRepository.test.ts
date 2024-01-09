import {
  IUserEntity,
  UserCreateDto,
  UserReadDto,
  UserCreateRepository,
  IUserCreate
} from '../../index'
import { plainToClass, plainToInstance } from 'class-transformer'

describe('Create user', () => {
  let mockUserRepository: IUserCreate<IUserEntity>

  beforeAll(async () => {
    mockUserRepository = { create: jest.fn() }
  })

  beforeEach(() => jest.clearAllMocks())

  test('sould create user', async () => {
    const body = {
      name: 'User 01',
      email: 'user1@gmail.com',
      photo: 'user_photo.png',
      role: 'admin',
      password: '!password@2023',
      passwordConfirm: '!password@2023'
    }

    const dto = plainToClass(UserCreateDto, body, {
      excludeExtraneousValues: true
    })

    jest
      .spyOn(mockUserRepository, 'create')
      .mockImplementation(() => Promise.resolve(dto))

    const repository = new UserCreateRepository(mockUserRepository)

    const response = await repository.insertOne(dto)

    const result = plainToInstance(UserReadDto, response, {
      excludeExtraneousValues: true
    })

    expect(result).toEqual(response)
  })
})
