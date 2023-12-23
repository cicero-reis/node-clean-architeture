import { ITaskEntity } from '../../entity/task'
import TaskController from './TaskController'
import ITaskPresentation from '../../presentation/task/interface/ITaskPresentation'
import { plainToClass } from 'class-transformer'
import { TaskActiveDto } from '../../entity/task/dto/TaskActiveDto'

describe('Presentation router task', () => {
  let mockTaskPresentation: ITaskPresentation<ITaskEntity>

  const tasks = [
    {
      id: 'abc',
      name: 'task 01',
      user_id: '1',
      is_completed: false,
      active: true
    },
    {
      id: 'cba',
      name: 'task 02',
      user_id: '2',
      is_completed: false,
      active: true
    }
  ]

  beforeAll(() => {
    mockTaskPresentation = {
      getAll: jest.fn(),
      getOne: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      completed: jest.fn(),
      active: jest.fn()
    }
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Presentation task', () => {
    test('should return tasks', async () => {
      jest
        .spyOn(mockTaskPresentation, 'getAll')
        .mockImplementation(() => Promise.resolve(tasks))

      const controller = new TaskController(mockTaskPresentation)

      const result = await controller.index({})

      expect(result).toEqual(tasks)
    })

    test('should return one task', async () => {
      jest
        .spyOn(mockTaskPresentation, 'getOne')
        .mockImplementation(() => Promise.resolve(tasks[0]))

      const controller = new TaskController(mockTaskPresentation)

      const result = await controller.show(tasks[0]['id'])

      expect(result).toEqual(tasks[0])
    })

    test('should create one task', async () => {
      jest
        .spyOn(mockTaskPresentation, 'create')
        .mockImplementation(() => Promise.resolve(tasks[0]))

      const controller = new TaskController(mockTaskPresentation)

      const result = await controller.store(tasks[0])

      expect(result).toEqual(tasks[0])
    })

    test('should udpate one task', async () => {
      jest
        .spyOn(mockTaskPresentation, 'update')
        .mockImplementation(() => Promise.resolve(true))

      const controller = new TaskController(mockTaskPresentation)

      const result = await controller.update(tasks[0]['id'], {
        id: 'abc',
        name: 'Task Update',
        user_id: '4',
        is_completed: false,
        active: true
      })

      expect(result).toEqual(true)
    })

    test('should delete one task', async () => {
      jest
        .spyOn(mockTaskPresentation, 'delete')
        .mockImplementation(() => Promise.resolve(true))

      const controller = new TaskController(mockTaskPresentation)

      const result = await controller.destroy(tasks[0]['id'])

      expect(result).toEqual(true)
    })

    test('should completed one task', async () => {
      const body = {
        id: '1',
        completed: true
      }

      const dto = plainToClass(TaskActiveDto, body, {
        excludeExtraneousValues: true
      })

      jest
        .spyOn(mockTaskPresentation, 'completed')
        .mockImplementation(() => Promise.resolve(true))

      const controller = new TaskController(mockTaskPresentation)

      const result = await controller.completed(tasks[0]['id'], dto)

      expect(result).toEqual(true)
    })

    test('should active one task', async () => {
      const body = {
        id: '1',
        is_Active: true
      }

      const dto = plainToClass(TaskActiveDto, body, {
        excludeExtraneousValues: true
      })

      jest
        .spyOn(mockTaskPresentation, 'active')
        .mockImplementation(() => Promise.resolve(true))

      const controller = new TaskController(mockTaskPresentation)

      const result = await controller.active(tasks[0]['id'], dto)

      expect(result).toEqual(true)
    })
  })
})
