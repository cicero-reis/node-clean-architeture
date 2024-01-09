import Task from '../../schema/taskShema'
import { ITaskEntity } from '../../../core/entity/task'

export class TaskActiveRepository {
  static async active(
    id: string,
    task: ITaskEntity
  ): Promise<boolean | null | never> {
    try {
      return await Task.findByIdAndUpdate(
        { _id: id },
        { $set: { active: task.active } },
        { new: true }
      )
    } catch (err) {
      throw new Error(err)
    }
  }
}
