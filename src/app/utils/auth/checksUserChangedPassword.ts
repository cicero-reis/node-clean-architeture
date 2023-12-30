import { IUserEntity } from '../../../core/entity/user'

export function checksIfTheUserChangedThePasswordAfterTheTokenWasGenerated(
  user: IUserEntity,
  jWTTimestamp: number
): boolean {
  if (user.passwordChangedAt) {
    const passwordChangedAt = user.passwordChangedAt.getTime() / 1000
    const changedTimestamp = parseInt(passwordChangedAt.toString(), 10)
    return jWTTimestamp < changedTimestamp
  }
  return false
}
