import { ITaskEntity } from '../../ITaskEntity'
import { TaskReadAllRepository } from './TaskReadAllRepository'
import { plainToInstance } from 'class-transformer'
import { ITaskReadAll } from './ITaskReadAll'
import { TaskReadDto } from '../../dto/TaskReadDto'

describe('Read one Task', () => {
  let mockTaskRepository: ITaskReadAll<ITaskEntity>

  beforeAll(async () => {
    mockTaskRepository = { read: jest.fn() }
  })

  beforeEach(() => jest.clearAllMocks())

  test('sould read one task', async () => {
    const tasks = [
      {
        id: '1234',
        name: 'task 01',
        user_id: 1,
        is_completed: false,
        active: true
      },
      {
        id: '1235',
        name: 'task 02',
        user_id: 2,
        is_completed: false,
        active: true
      }
    ]

    const response = plainToInstance(TaskReadDto, tasks, {
      excludeExtraneousValues: true
    })

    jest
      .spyOn(mockTaskRepository, 'read')
      .mockImplementation(() => Promise.resolve(response))

    const taskReadAllRepository = new TaskReadAllRepository(mockTaskRepository)

    const result = await taskReadAllRepository.readAll({})

    expect(result).toStrictEqual(response)
  })
})
