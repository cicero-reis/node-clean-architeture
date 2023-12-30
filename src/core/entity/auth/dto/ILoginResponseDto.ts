export default interface ILoginResponseDto {
  email?: string
  password?: string
  acessToken: string
  refreshToken: string
}
