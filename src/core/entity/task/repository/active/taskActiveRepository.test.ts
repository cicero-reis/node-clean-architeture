import ITaskEntity from '../../ITaskEntity'
import TaskActiveRepository from './TaskActiveRepository'
import ITaskActive from './ITaskActive'

describe('Update Task active', () => {
  let mockTaskRepository: ITaskActive<ITaskEntity>

  beforeAll(async () => {
    mockTaskRepository = { active: jest.fn() }
  })

  beforeEach(() => jest.clearAllMocks())

  test('sould update active', async () => {
    const body = {
      id: 'task_id',
      name: 'Task 01',
      user_id: 'user_id',
      is_completed: true,
      active: true
    }

    jest
      .spyOn(mockTaskRepository, 'active')
      .mockImplementation(() => Promise.resolve(true))

    const repository = new TaskActiveRepository(mockTaskRepository)

    const result = await repository.activeOne(body.id, body)

    expect(result).toBe(true)
  })
})
