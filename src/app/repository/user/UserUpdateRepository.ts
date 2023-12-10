import User from '../../schema/userShema'
import { IUserEntity } from '../../../core/entity/user'

export class UserUpdateRepository {
  static async updateOne(
    id: string,
    task: IUserEntity
  ): Promise<boolean | null | never> {
    try {
      return await User.findByIdAndUpdate(id, task, {
        new: true,
        runValidators: true
      })
    } catch (err) {
      throw new Error(err)
    }
  }
}
