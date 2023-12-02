import {
  ITaskCreate,
  ITaskReadAll,
  ITaskReadOne,
  ITaskUpdate,
  ITaskDelete,
  ITaskEntity,
  TaskCreateRepository,
  TaskReadAllRepository,
  TaskReadOneRepository,
  TaskUpdateRepository,
  TaskDeleteRepository
} from '../../core/entity/task'

import {
  TaskCreateUseCase,
  TaskGetAllUseCase,
  TaskGetOneUseCase,
  TaskUpdateUseCase,
  TaskDeleteUseCase
} from '../../core/usecase/task'

import taskRouter from '../routers/taskRouter'
import TaskController from '../../core/controller/TaskController'
import TaskPresentation from '../../core/presentation/task/TaskPresentation'

import {
  TaskCreateRepository as repositoryCreate,
  TaskReadAllRepository as repositoryReadAll,
  TaskReadOneRepository as repositoryReadOne,
  TaskUpdateRepository as repositoryUpdate,
  TaskDeleteRepository as repositoryDelete
} from '../repository/task'
import { Request } from 'express'

const taskMiddleWare = () => {
  const taskCreate: ITaskCreate<ITaskEntity> = {
    create: async (task: ITaskEntity): Promise<ITaskEntity> => {
      return await repositoryCreate.insertOne(task)
    }
  }

  const taskReadAll: ITaskReadAll<ITaskEntity> = {
    read: async (req: Request): Promise<ITaskEntity[]> => {
      return await repositoryReadAll.findAll(req)
    }
  }

  const taskReadOne: ITaskReadOne<ITaskEntity> = {
    read: async (id: string): Promise<ITaskEntity | null | never> => {
      return await repositoryReadOne.findOne(id)
    }
  }

  const taskUpdate: ITaskUpdate<ITaskEntity> = {
    update: async (
      id: string,
      task: ITaskEntity
    ): Promise<boolean | null | never> => {
      return await repositoryUpdate.updateOne(id, task)
    }
  }

  const taskDelete: ITaskDelete = {
    delete: async (id: string): Promise<boolean | null | never> => {
      return await repositoryDelete.deleteOne(id)
    }
  }

  return taskRouter(
    new TaskController(
      new TaskPresentation(
        new TaskGetAllUseCase(new TaskReadAllRepository(taskReadAll)),
        new TaskCreateUseCase(new TaskCreateRepository(taskCreate)),
        new TaskGetOneUseCase(new TaskReadOneRepository(taskReadOne)),
        new TaskUpdateUseCase(new TaskUpdateRepository(taskUpdate)),
        new TaskDeleteUseCase(new TaskDeleteRepository(taskDelete))
      )
    )
  )
}

export default taskMiddleWare
