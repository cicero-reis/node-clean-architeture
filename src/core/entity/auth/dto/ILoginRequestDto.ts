export default interface ILoginRequestDto {
  email: string
  password: string
  acessToken?: string
  refreshToken?: string
}
