import { Expose } from 'class-transformer'

export default class TaskReadDto {
  @Expose()
  id!: string
  @Expose()
  name!: string
  @Expose()
  user_id!: string
  @Expose()
  is_completed!: boolean
  @Expose()
  active!: boolean
}
