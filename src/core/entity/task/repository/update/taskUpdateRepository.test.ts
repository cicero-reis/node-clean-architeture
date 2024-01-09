import { ITaskEntity, TaskUpdateRepository, ITaskUpdate } from '../../index'

describe('Update Task', () => {
  let mockTaskRepository: ITaskUpdate<ITaskEntity>

  beforeAll(async () => {
    mockTaskRepository = { update: jest.fn() }
  })

  beforeEach(() => jest.clearAllMocks())

  test('sould update task', async () => {
    const body = {
      id: 'task_id',
      name: 'task 01',
      user_id: 'user_id',
      is_completed: true,
      active: true
    }

    jest
      .spyOn(mockTaskRepository, 'update')
      .mockImplementation(() => Promise.resolve(true))

    const repository = new TaskUpdateRepository(mockTaskRepository)

    const result = await repository.updateOne(body.id, body)

    expect(result).toBe(true)
  })
})
