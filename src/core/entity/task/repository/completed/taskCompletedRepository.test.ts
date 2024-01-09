import ITaskEntity from '../../ITaskEntity'
import TaskCompletedRepository from './TaskCompletedRepository'
import ITaskCompleted from './ITaskCompleted'

describe('Update Task completed', () => {
  let mockTaskRepository: ITaskCompleted<ITaskEntity>

  beforeAll(async () => {
    mockTaskRepository = { completed: jest.fn() }
  })

  beforeEach(() => jest.clearAllMocks())

  test('sould update task completed', async () => {
    const body = {
      id: '1',
      name: 'Task 1',
      user_id: 'user_id',
      is_completed: true,
      active: true
    }

    jest
      .spyOn(mockTaskRepository, 'completed')
      .mockImplementation(() => Promise.resolve(true))

    const repository = new TaskCompletedRepository(mockTaskRepository)

    const result = await repository.completedOne(body.id, body)

    expect(result).toBe(true)
  })
})
