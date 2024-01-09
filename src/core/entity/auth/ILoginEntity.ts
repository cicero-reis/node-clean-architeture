export default interface ILoginEntity {
  email: string
  password: string
  acessToken?: string
  refreshToken?: string
}
