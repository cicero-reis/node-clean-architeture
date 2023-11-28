import { Expose } from 'class-transformer'

export class UserReadDto {
  @Expose()
  id!: string
  @Expose()
  name!: string
  @Expose()
  email!: string
  @Expose()
  photo!: string
  @Expose()
  password!: string
  @Expose()
  confirmPassword!: string
  @Expose()
  active?: boolean
}
