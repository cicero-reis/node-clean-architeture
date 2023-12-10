import User from '../../schema/userShema'
import { IUserEntity } from '../../../core/entity/user'
import { Request } from 'express'
import UserFilter from './UserFilter'

export class UserReadAllRepository {
  static async findAll(req: Request): Promise<IUserEntity[]> {
    try {
      const query = User.find()
      return new UserFilter(query, req).filter().sort().paginate().exec()
    } catch (err) {
      throw new Error(err)
    }
  }
}
