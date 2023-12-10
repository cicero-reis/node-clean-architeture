import User from '../../schema/userShema'
import { IUserEntity } from '../../../core/entity/user'

export class UserCreateRepository {
  static async insertOne(user: IUserEntity): Promise<IUserEntity> {
    try {
      return User.create(user)
    } catch (err) {
      throw new Error(err)
    }
  }
}
