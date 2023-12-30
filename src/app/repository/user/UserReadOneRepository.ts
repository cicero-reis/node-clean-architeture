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
  static async emailIsValid(
    email: string
  ): Promise<IUserEntity | null | never> {
    try {
      const user = await User.findOne({ email }).select('+password')
      return user ?? null
    } catch (err) {
      throw new Error(err)
    }
  }
}
