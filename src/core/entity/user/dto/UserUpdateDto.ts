import { Exclude, Expose } from 'class-transformer'

export class UserUpdateDto {
  @Expose()
  id!: string
  @Expose()
  name!: string
  @Expose()
  email!: string
  @Expose()
  photo!: string
  @Exclude()
  password!: string
  @Exclude()
  confirmPassword!: string
  @Exclude()
  active?: boolean
}
