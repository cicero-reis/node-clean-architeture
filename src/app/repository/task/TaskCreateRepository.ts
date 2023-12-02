import Task from '../../schema/taskShema'
import { ITaskEntity } from '../../../core/entity/task/ITaskEntity'

export class TaskCreateRepository {
  static async insertOne(task: ITaskEntity): Promise<ITaskEntity> {
    try {
      return Task.create(task)
    } catch (err) {
      throw new Error(err)
    }
  }
}
