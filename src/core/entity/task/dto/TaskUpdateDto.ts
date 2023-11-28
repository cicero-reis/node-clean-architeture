import { Expose } from 'class-transformer'

export class TaskUpdateDto {
  @Expose()
  id!: string
  @Expose()
  name!: string
  @Expose()
  user_id!: string
}
