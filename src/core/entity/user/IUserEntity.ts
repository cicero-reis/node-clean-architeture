export interface IUserEntity {
  id?: string
  name: string
  email: string
  photo?: string
  role?: string
  password?: string
  passwordConfirm?: string
  active?: boolean
  updatedAt?: Date
  passwordChangedAt?: Date
  passwordResetToken?: string
  passwordResetExpires?: Date
  token?: string
}
