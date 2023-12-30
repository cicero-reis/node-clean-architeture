import * as jwt from 'jsonwebtoken'

const secretKey = process.env.JWT_SECRET || 'invalid'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const verifyToken = (token: string): Promise<any> => {
  return new Promise((resolve) => {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        throw new Error('Token invalid')
      } else {
        resolve(decoded)
      }
    })
  })
}

export default verifyToken
