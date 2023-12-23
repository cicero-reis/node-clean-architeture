import { NextFunction, Request, Response } from 'express'
import AppError from './error/AppError'
import blocklist from '../../config/redis/blocklist'
import User from '../schema/userShema'
import { verifyToken } from '../utils/checkToken'
import { checksIfTheUserChangedThePasswordAfterTheTokenWasGenerated } from '../utils/checksUserChangedPassword'

export class AuthMiddleWare {
  static auth = async (req: Request, _res: Response, next: NextFunction) => {
    try {
      let token = null

      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
      ) {
        token = req.headers.authorization.split(' ')[1]
      }

      if (!token) {
        return next(
          new AppError(
            401,
            JSON.stringify({ notAutorization: 'Not authorized.' })
          )
        )
      }

      // 01 Checks if the token was added to the block list on logout action
      const containTokenBlockList = await blocklist.containsKey(token)
      if (containTokenBlockList) {
        return next(
          new AppError(401, JSON.stringify({ tokenInvalid: 'Invalid token!' }))
        )
      }

      const decoded = await verifyToken(token)

      const freshUser = await User.findById(decoded.id)

      if (!freshUser) {
        return next(
          new AppError(
            401,
            JSON.stringify({ tokenNotExist: 'Token does not exist.' })
          )
        )
      }

      if (
        checksIfTheUserChangedThePasswordAfterTheTokenWasGenerated(
          freshUser,
          decoded.iat
        )
      ) {
        return next(
          new AppError(
            401,
            JSON.stringify({ changePassword: 'password changed' })
          )
        )
      }

      req.body.user = freshUser

      next()
    } catch (err) {
      next(err)
    }
  }
}

export default AuthMiddleWare
