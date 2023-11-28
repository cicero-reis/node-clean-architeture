import { TaskDeleteRepository } from './TaskDeleteRepository'
import { ITaskDelete } from './ITaskDelete'

describe('Delete Task', () => {
  let mockTaskRepository: ITaskDelete

  beforeAll(async () => {
    mockTaskRepository = { delete: jest.fn() }
  })

  beforeEach(() => jest.clearAllMocks())

  test('sould delete task', async () => {
    jest
      .spyOn(mockTaskRepository, 'delete')
      .mockImplementation(() => Promise.resolve(true))

    const repository = new TaskDeleteRepository(mockTaskRepository)

    const result = await repository.deleteOne('123456')

    expect(result).toBe(true)
  })
})
