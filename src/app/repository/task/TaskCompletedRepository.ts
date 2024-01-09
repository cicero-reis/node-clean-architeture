import Task from '../../schema/taskShema'
import { ITaskEntity } from '../../../core/entity/task'

export class TaskCompletedRepository {
  static async isCompleted(
    id: string,
    task: ITaskEntity
  ): Promise<boolean | null | never> {
    try {
      return await Task.findByIdAndUpdate(
        { _id: id },
        { $set: { is_completed: task.is_completed } },
        { new: true }
      )
    } catch (err) {
      throw new Error(err)
    }
  }
}
