import { plainToClass } from 'class-transformer'
import {
  IUserEntity,
  IUserUpdate,
  UserUpdateRepository,
  UserUpdateDto
} from '../../index'

describe('Update User', () => {
  let mockUserRepository: IUserUpdate<IUserEntity>

  beforeAll(async () => {
    mockUserRepository = { update: jest.fn() }
  })

  beforeEach(() => jest.clearAllMocks())

  test('sould update User', async () => {
    const body = {
      id: '12345',
      name: 'User 02',
      email: 'user1@gmail.com',
      photo: 'user_photo.png',
      password: 'password',
      passwordConfirm: 'password',
      active: 0
    }

    const dto = plainToClass(UserUpdateDto, body, {
      excludeExtraneousValues: true
    })

    jest
      .spyOn(mockUserRepository, 'update')
      .mockImplementation(() => Promise.resolve(true))

    const repository = new UserUpdateRepository(mockUserRepository)

    const result = await repository.updateOne(body.id, dto)

    expect(result).toBe(true)
  })
})
