import { Exclude, Expose } from 'class-transformer'

export class TaskCreateDto {
  @Exclude()
  id!: string
  @Expose()
  name!: string
  @Expose()
  user_id!: string
}
