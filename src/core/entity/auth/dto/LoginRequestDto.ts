import { Exclude, Expose } from 'class-transformer'
export default class LoginRequestDto {
  @Expose()
  email: string
  @Expose()
  password: string
  @Exclude()
  acessToken?: string
  @Exclude()
  refreshToken?: string
}
