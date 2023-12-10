import {
  IUserCreate,
  IUserReadAll,
  IUserReadOne,
  IUserUpdate,
  IUserDelete,
  IUserEntity,
  UserCreateRepository,
  UserReadAllRepository,
  UserReadOneRepository,
  UserUpdateRepository,
  UserDeleteRepository
} from './../../core/entity/user'

import {
  UserCreateUseCase,
  UserGetAllUseCase,
  UserGetOneUseCase,
  UserUpdateUseCase,
  UserDeleteUseCase
} from '../../core/usecase/user'

import userRouter from '../routers/userRouter'
import UserController from '../../core/controller/UserController'
import UserPresentation from '../../core/presentation/user/UserPresentation'

import {
  UserCreateRepository as repositoryCreate,
  UserReadAllRepository as repositoryReadAll,
  UserReadOneRepository as repositoryReadOne,
  UserUpdateRepository as repositoryUpdate,
  UserDeleteRepository as repositoryDelete
} from '../repository/user'
import { Request } from 'express'

const userMiddleWare = () => {
  const userCreate: IUserCreate<IUserEntity> = {
    create: async (user: IUserEntity): Promise<IUserEntity> => {
      return await repositoryCreate.insertOne(user)
    }
  }

  const userReadAll: IUserReadAll<IUserEntity> = {
    read: async (req: Request): Promise<IUserEntity[]> => {
      return await repositoryReadAll.findAll(req)
    }
  }

  const userReadOne: IUserReadOne<IUserEntity> = {
    read: async (id: string): Promise<IUserEntity | null | never> => {
      return await repositoryReadOne.findOne(id)
    }
  }

  const userUpdate: IUserUpdate<IUserEntity> = {
    update: async (
      id: string,
      user: IUserEntity
    ): Promise<boolean | null | never> => {
      return await repositoryUpdate.updateOne(id, user)
    }
  }

  const userDelete: IUserDelete = {
    delete: async (id: string): Promise<boolean | null | never> => {
      return await repositoryDelete.deleteOne(id)
    }
  }

  return userRouter(
    new UserController(
      new UserPresentation(
        new UserGetAllUseCase(new UserReadAllRepository(userReadAll)),
        new UserCreateUseCase(new UserCreateRepository(userCreate)),
        new UserGetOneUseCase(new UserReadOneRepository(userReadOne)),
        new UserUpdateUseCase(new UserUpdateRepository(userUpdate)),
        new UserDeleteUseCase(new UserDeleteRepository(userDelete))
      )
    )
  )
}

export default userMiddleWare
