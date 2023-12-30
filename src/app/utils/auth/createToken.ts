import jwt from 'jsonwebtoken'
import moment from 'moment'
import { IUserEntity } from '../../../core/entity/user'

const createToken = (user: IUserEntity) => {
  const secret = process.env.JWT_SECRET ?? ''
  return jwt.sign(
    {
      id: user.id,
      updatedAt: moment(user.updatedAt).format('YYYY-MM-DD HH:mm:ss')
    },
    secret,
    {
      expiresIn: process.env.JWT_EXPIRES_IN
    }
  )
}

export default createToken
