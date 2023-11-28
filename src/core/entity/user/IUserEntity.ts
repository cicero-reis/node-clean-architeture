export interface IUserEntity {
  id: string
  name: string
  email: string
  photo: string
  password: string
  confirmPassword: string
  active?: boolean
}
