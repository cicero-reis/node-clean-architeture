import { Expose } from 'class-transformer'

export default class LoginRequestDto {
  @Expose()
  email: string
  @Expose()
  password: string
  @Expose()
  token: string
}
