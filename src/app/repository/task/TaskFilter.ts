import { Request } from 'express'
import { ITaskEntity } from '../../../core/entity/task'
import { FilterQuery } from 'mongoose'

export default class TaskFilter {
  private readonly req: Request
  private query: FilterQuery<ITaskEntity>

  constructor(query: FilterQuery<ITaskEntity>, req: Request) {
    this.query = query
    this.req = req
  }

  filter(): this {
    if (this.req.body.name) {
      this.query.where('name', {
        $regex: '.*' + this.req.body.name + '.*'
      })
    }
    return this
  }

  sort(): this {
    this.req.body.sort
      ? this.query.sort(this.req.body.page)
      : this.query.sort('name')
    return this
  }

  paginate(): FilterQuery<ITaskEntity> {
    const page = Number(this.req.body.page) * 1 || 1
    const limit = Number(this.req.body.limit) * 1 || 20
    const skip = (page - 1) * limit
    this.query.skip(skip).limit(limit)

    return this.query
  }
}
