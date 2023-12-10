import User from '../../schema/userShema'
import { IUserEntity } from '../../../core/entity/user'

export class UserReadOneRepository {
  static async findOne(id: string): Promise<IUserEntity | null | never> {
    try {
      return await User.findById(id)
    } catch (err) {
      throw new Error(err)
    }
  }
}
