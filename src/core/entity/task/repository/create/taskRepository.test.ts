import { ITaskEntity } from '../../ITaskEntity'
import { TaskCreateDto } from '../../dto/TaskCreateDto'
import { TaskCreateRepository } from './TaskCreateRepository'
import { plainToClass } from 'class-transformer'
import { ITaskCreate } from './ITaskCreate'

describe('Create Task', () => {
  let mockTaskRepository: ITaskCreate<ITaskEntity>

  beforeAll(async () => {
    mockTaskRepository = { create: jest.fn() }
  })

  beforeEach(() => jest.clearAllMocks())

  test('sould create task', async () => {
    const body = {
      id: undefined,
      name: 'task 01',
      user_id: 1,
      is_completed: undefined,
      active: undefined
    }

    const dto = plainToClass(TaskCreateDto, body, {
      excludeExtraneousValues: true
    })

    jest
      .spyOn(mockTaskRepository, 'create')
      .mockImplementation(() => Promise.resolve(dto))

    const repository = new TaskCreateRepository(mockTaskRepository)

    const result = await repository.insertOne(dto)

    expect(result).toEqual(body)
  })
})
