export interface IUserEntity {
  id?: string
  name: string
  email: string
  photo?: string
  role?: string
  password?: string
  passwordConfirm?: string
  active?: boolean
}
