import Task from '../../schema/taskShema'

export class TaskDeleteRepository {
  static async deleteOne(id: string): Promise<boolean | never | null> {
    try {
      return await Task.findByIdAndDelete(id)
    } catch (err) {
      throw new Error(err)
    }
  }
}
