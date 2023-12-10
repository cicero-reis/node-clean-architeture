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
  @Expose()
  role!: string
  @Exclude()
  password!: string
  @Exclude()
  passwordConfirm!: string
  @Exclude()
  active!: boolean
}
