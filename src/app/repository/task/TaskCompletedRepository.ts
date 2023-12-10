import Task from '../../schema/taskShema'
import { ITaskEntity } from '../../../core/entity/task/ITaskEntity'

export class TaskCompletedRepository {
  static async isCompleted(
    id: string,
    task: ITaskEntity
  ): Promise<boolean | null | never> {
    try {
      return await Task.findByIdAndUpdate(id, task, {
        new: true,
        runValidators: true
      })
    } catch (err) {
      throw new Error(err)
    }
  }
}
