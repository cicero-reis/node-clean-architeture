import { Exclude, Expose } from 'class-transformer'

export default class TaskActiveDto {
  @Expose()
  id!: string
  @Exclude()
  name!: string
  @Exclude()
  user_id!: string
  @Expose()
  active: boolean
}
