import { ITaskEntity, TaskReadAllRepository, ITaskReadAll } from '../../index'

describe('Read one Task', () => {
  let mockTaskRepository: ITaskReadAll<ITaskEntity>

  beforeAll(async () => {
    mockTaskRepository = { read: jest.fn() }
  })

  beforeEach(() => jest.clearAllMocks())

  test('sould read one task', async () => {
    const body = [
      {
        id: '1234',
        name: 'task 01',
        user_id: 'user_id',
        is_completed: false,
        active: true
      },
      {
        id: '1235',
        name: 'task 02',
        user_id: 'user_id',
        is_completed: false,
        active: true
      }
    ]

    jest
      .spyOn(mockTaskRepository, 'read')
      .mockImplementation(() => Promise.resolve(body))

    const taskReadAllRepository = new TaskReadAllRepository(mockTaskRepository)

    const result = await taskReadAllRepository.readAll({})

    expect(result).toEqual(body)
  })
})
