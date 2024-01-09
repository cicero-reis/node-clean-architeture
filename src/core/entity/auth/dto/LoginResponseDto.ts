import { Exclude, Expose } from 'class-transformer'

export default class LoginResponseDto {
  @Exclude()
  email?: string
  @Exclude()
  password?: string
  @Expose()
  acessToken: string
  @Expose()
  refreshToken: string
}
