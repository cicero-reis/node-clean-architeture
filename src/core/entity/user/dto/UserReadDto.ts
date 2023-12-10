import { Expose, Exclude } from 'class-transformer'

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
  role!: string
  @Exclude()
  password!: string
  @Exclude()
  passwordConfirm!: string
  @Expose()
  active?: boolean
}
