import { Exclude, Expose } from 'class-transformer'

export class TaskCompletedDto {
  @Expose()
  id!: string
  @Exclude()
  name!: string
  @Exclude()
  user_id!: string
  @Expose()
  is_completed: boolean
}
