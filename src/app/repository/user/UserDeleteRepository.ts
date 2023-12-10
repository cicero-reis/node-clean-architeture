import User from '../../schema/userShema'

export class UserDeleteRepository {
  static async deleteOne(id: string): Promise<boolean | never | null> {
    try {
      return await User.findByIdAndDelete(id)
    } catch (err) {
      throw new Error(err)
    }
  }
}
