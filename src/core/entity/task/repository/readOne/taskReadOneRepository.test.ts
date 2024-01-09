import { ITaskEntity, ITaskReadOne, TaskReadOneRepository } from '../../index'

describe('Read one Task', () => {
  let mockTaskRepository: ITaskReadOne<ITaskEntity>

  beforeAll(async () => {
    mockTaskRepository = { read: jest.fn() }
  })

  beforeEach(() => jest.clearAllMocks())

  test('sould read one task', async () => {
    const body = {
      id: 'task_id',
      name: 'Task 01',
      user_id: 'user_id',
      is_completed: true,
      active: true
    }

    jest
      .spyOn(mockTaskRepository, 'read')
      .mockImplementation(() => Promise.resolve(body))

    const repository = new TaskReadOneRepository(mockTaskRepository)

    const result = await repository.readOne(body.id)

    expect(result).toEqual(body)
  })
})
