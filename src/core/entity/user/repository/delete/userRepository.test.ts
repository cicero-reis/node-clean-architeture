import { UserDeleteRepository } from './UserDeleteRepository'
import { IUserDelete } from './IUserDelete'

describe('Delete User', () => {
  let mockUserRepository: IUserDelete

  beforeAll(async () => {
    mockUserRepository = { delete: jest.fn() }
  })

  beforeEach(() => jest.clearAllMocks())

  test('sould delete User', async () => {
    jest
      .spyOn(mockUserRepository, 'delete')
      .mockImplementation(() => Promise.resolve(true))

    const repository = new UserDeleteRepository(mockUserRepository)

    const result = await repository.deleteOne('abc')

    expect(result).toBe(true)
  })
})
