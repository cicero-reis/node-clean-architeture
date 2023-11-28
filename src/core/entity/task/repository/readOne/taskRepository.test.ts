import { ITaskEntity } from '../../ITaskEntity'
import { TaskReadOneRepository } from './TaskReadOneRepository'
import { plainToClass } from 'class-transformer'
import { ITaskReadOne } from './ITaskReadOne'
import { TaskReadDto } from '../../dto/TaskReadDto'

describe('Read one Task', () => {
  let mockTaskRepository: ITaskReadOne<ITaskEntity>

  beforeAll(async () => {
    mockTaskRepository = { read: jest.fn() }
  })

  beforeEach(() => jest.clearAllMocks())

  test('sould read one task', async () => {
    const body = {
      id: 'abc',
      name: 'task 01',
      user_id: 1,
      is_completed: undefined,
      active: undefined
    }

    const dto = plainToClass(TaskReadDto, body, {
      excludeExtraneousValues: true
    })

    jest
      .spyOn(mockTaskRepository, 'read')
      .mockImplementation(() => Promise.resolve(dto))

    const repository = new TaskReadOneRepository(mockTaskRepository)

    const result = await repository.readOne(body.id)

    expect(result).toEqual(body)
  })
})
