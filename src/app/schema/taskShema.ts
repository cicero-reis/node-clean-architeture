import { Schema, model } from 'mongoose'
import { ITaskEntity } from '../../core/entity/task/ITaskEntity'

const taskShema = new Schema<ITaskEntity>(
  {
    name: { type: String, required: true },
    user_id: { type: String, required: true },
    is_completed: { type: Boolean, default: false },
    active: { type: Boolean, default: true }
  },
  { timestamps: true }
)

const Task = model<ITaskEntity>('task', taskShema)

export default Task
