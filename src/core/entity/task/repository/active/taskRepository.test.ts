import { ITaskEntity } from '../../ITaskEntity'
import { TaskActiveDto } from '../../dto/TaskActiveDto'
import { TaskActiveRepository } from './TaskActiveRepository'
import { plainToClass } from 'class-transformer'
import { ITaskActive } from './ITaskActive'

describe('Update Task active', () => {
  let mockTaskRepository: ITaskActive<ITaskEntity>

  beforeAll(async () => {
    mockTaskRepository = { active: jest.fn() }
  })

  beforeEach(() => jest.clearAllMocks())

  test('sould update active', async () => {
    const body = {
      id: '1',
      is_Active: true
    }

    const dto = plainToClass(TaskActiveDto, body, {
      excludeExtraneousValues: true
    })

    jest
      .spyOn(mockTaskRepository, 'active')
      .mockImplementation(() => Promise.resolve(true))

    const repository = new TaskActiveRepository(mockTaskRepository)

    const result = await repository.activeOne(body.id, dto)

    expect(result).toBe(true)
  })
})
