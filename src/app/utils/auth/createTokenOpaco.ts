import moment from 'moment'
import crypto from 'crypto'
import allowListRefreshToken from '../../../config/redis/allowListRefreshToken'

const createTokenOpaco = async (userId: string) => {
  const tokenOpaco = crypto.randomBytes(24).toString('hex')
  const dateExpiresIn = moment().add(5, 'd').unix()
  await allowListRefreshToken.add(tokenOpaco, userId, dateExpiresIn)
  return tokenOpaco
}

export default createTokenOpaco
