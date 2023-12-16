import Task from '../../schema/taskShema'
import { UserReadOneRepository } from '../user'
import { ITaskEntity } from '../../../core/entity/task/ITaskEntity'

export class TaskUpdateRepository {
  static async updateOne(
    id: string,
    task: ITaskEntity
  ): Promise<boolean | null | never> {
    try {
      await UserReadOneRepository.findOne(task.user_id)
      return await Task.findByIdAndUpdate(id, task, {
        new: true,
        runValidators: true
      })
    } catch (err) {
      throw new Error(err)
    }
  }
}
