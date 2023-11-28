import { ITaskEntity } from '../../ITaskEntity'
import { TaskUpdateDto } from '../../dto/TaskUpdateDto'
import { TaskUpdateRepository } from './TaskUpdateRepository'
import { plainToClass } from 'class-transformer'
import { ITaskUpdate } from './ITaskUpdate'

describe('Update Task', () => {
  let mockTaskRepository: ITaskUpdate<ITaskEntity>

  beforeAll(async () => {
    mockTaskRepository = { update: jest.fn() }
  })

  beforeEach(() => jest.clearAllMocks())

  test('sould update task', async () => {
    const body = {
      id: 'abc',
      name: 'task 01',
      user_id: 1,
      is_completed: undefined,
      active: undefined
    }

    const dto = plainToClass(TaskUpdateDto, body, {
      excludeExtraneousValues: true
    })

    jest
      .spyOn(mockTaskRepository, 'update')
      .mockImplementation(() => Promise.resolve(true))

    const repository = new TaskUpdateRepository(mockTaskRepository)

    const result = await repository.updateOne(body.id, dto)

    expect(result).toBe(true)
  })
})
