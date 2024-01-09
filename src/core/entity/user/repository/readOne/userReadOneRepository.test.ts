import {
  IUserEntity,
  UserReadOneRepository,
  IUserReadOne,
  UserReadDto
} from '../../index'
import { plainToClass } from 'class-transformer'

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
      role: 'admin',
      active: true
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
