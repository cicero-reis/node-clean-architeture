import { ITaskEntity } from '../../ITaskEntity'
import { TaskCompletedDto } from '../../dto/TaskCompletedDto'
import { TaskCompletedRepository } from './TaskCompletedRepository'
import { plainToClass } from 'class-transformer'
import { ITaskCompleted } from './ITaskCompleted'

describe('Update Task', () => {
  let mockTaskRepository: ITaskCompleted<ITaskEntity>

  beforeAll(async () => {
    mockTaskRepository = { completed: jest.fn() }
  })

  beforeEach(() => jest.clearAllMocks())

  test('sould update task', async () => {
    const body = {
      id: '1',
      is_completed: true
    }

    const dto = plainToClass(TaskCompletedDto, body, {
      excludeExtraneousValues: true
    })

    jest
      .spyOn(mockTaskRepository, 'completed')
      .mockImplementation(() => Promise.resolve(true))

    const repository = new TaskCompletedRepository(mockTaskRepository)

    const result = await repository.completedOne(body.id, dto)

    expect(result).toBe(true)
  })
})
