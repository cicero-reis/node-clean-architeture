import { Exclude, Expose } from 'class-transformer'

export default class UserCreateDto {
  @Exclude()
  id!: string
  @Expose()
  name!: string
  @Expose()
  email!: string
  @Expose()
  photo!: string
  @Expose()
  role!: string
  @Expose()
  password!: string
  @Expose()
  passwordConfirm!: string
  @Exclude()
  active?: boolean
}
