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
  TaskDeleteRepository,
  TaskCompletedRepository,
  TaskActiveRepository,
  ITaskActive
} from '../../core/entity/task'

import {
  TaskCreateUseCase,
  TaskGetAllUseCase,
  TaskGetOneUseCase,
  TaskUpdateUseCase,
  TaskDeleteUseCase,
  TaskCompletedUseCase,
  TaskActiveUseCase
} from '../../core/usecase/task'

import taskRouter from '../routers/taskRouter'
import TaskController from '../../core/controller/task/TaskController'
import TaskPresentation from '../../core/presentation/task/TaskPresentation'

import {
  TaskCreateRepository as repositoryCreate,
  TaskReadAllRepository as repositoryReadAll,
  TaskReadOneRepository as repositoryReadOne,
  TaskUpdateRepository as repositoryUpdate,
  TaskDeleteRepository as repositoryDelete,
  TaskCompletedRepository as repositoryCompleted,
  TaskActiveRepository as repositoryActive
} from '../repository/task'
import { Request } from 'express'
import { ITaskCompleted } from '../../core/entity/task/repository/completed/ITaskCompleted'

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

  const taskCompleted: ITaskCompleted<ITaskEntity> = {
    completed: async (
      id: string,
      task: ITaskEntity
    ): Promise<boolean | null | never> => {
      return await repositoryCompleted.isCompleted(id, task)
    }
  }

  const taskActive: ITaskActive<ITaskEntity> = {
    active: async (
      id: string,
      task: ITaskEntity
    ): Promise<boolean | null | never> => {
      return await repositoryActive.active(id, task)
    }
  }

  return taskRouter(
    new TaskController(
      new TaskPresentation(
        new TaskGetAllUseCase(new TaskReadAllRepository(taskReadAll)),
        new TaskCreateUseCase(new TaskCreateRepository(taskCreate)),
        new TaskGetOneUseCase(new TaskReadOneRepository(taskReadOne)),
        new TaskUpdateUseCase(new TaskUpdateRepository(taskUpdate)),
        new TaskDeleteUseCase(new TaskDeleteRepository(taskDelete)),
        new TaskCompletedUseCase(new TaskCompletedRepository(taskCompleted)),
        new TaskActiveUseCase(new TaskActiveRepository(taskActive))
      )
    )
  )
}

export default taskMiddleWare
