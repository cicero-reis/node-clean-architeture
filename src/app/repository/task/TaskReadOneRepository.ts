import Task from '../../schema/taskShema'
import { ITaskEntity } from '../../../core/entity/task'

export class TaskReadOneRepository {
  static async findOne(id: string): Promise<ITaskEntity | null | never> {
    try {
      return await Task.findById(id)
    } catch (err) {
      throw new Error(err)
    }
  }
}
