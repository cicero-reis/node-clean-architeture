import bcrypt from 'bcryptjs'

export default function correctPassword(
  requestPassword: string,
  userPassword: string
) {
  return bcrypt.compare(requestPassword, userPassword)
}
