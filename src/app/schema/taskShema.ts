import { Document, Schema, model } from 'mongoose'
import { ITaskEntity } from '../../core/entity/task'
import User from './userShema'

interface ITask extends Document {
  id: string
  name: string
  user_id: string
  is_completed?: boolean
  active?: boolean
}

const taskShema = new Schema<ITaskEntity>(
  {
    name: { type: String, required: true },
    user_id: { type: String, required: true },
    is_completed: { type: Boolean, default: false },
    active: { type: Boolean, default: true }
  },
  { timestamps: true }
)

taskShema.pre<ITask>('save', async function (this: ITask, next) {
  const result = await User.findById(this.user_id)
  if (result) next()
  next(new Error(`Invalid user id`))
})

const Task = model<ITaskEntity>('task', taskShema)

export default Task
