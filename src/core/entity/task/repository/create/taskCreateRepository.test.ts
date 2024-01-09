import { ITaskEntity, TaskCreateRepository, ITaskCreate } from '../../index'

describe('Create Task', () => {
  let mockTaskRepository: ITaskCreate<ITaskEntity>

  beforeAll(async () => {
    mockTaskRepository = { create: jest.fn() }
  })

  beforeEach(() => jest.clearAllMocks())

  test('sould create task', async () => {
    const body = {
      id: 'task_id',
      name: 'task 01',
      user_id: 'task_user',
      is_completed: true,
      active: true
    }

    jest
      .spyOn(mockTaskRepository, 'create')
      .mockImplementation(() => Promise.resolve(body))

    const repository = new TaskCreateRepository(mockTaskRepository)

    const result = await repository.insertOne(body)

    expect(result).toEqual(body)
  })
})
