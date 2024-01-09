import { ILoginEntity, LoginResponseDto } from '../../core/entity/auth'
import User from '../schema/userShema'
import correctPassword from '../utils/auth/correctPassword'
import createToken from '../utils/auth/createToken'
import createTokenOpaco from '../utils/auth/createTokenOpaco'

export default class LoginService {
  static login = async (
    body: ILoginEntity
  ): Promise<LoginResponseDto | boolean> => {
    try {
      const { email, password } = body
      const user = await User.findOne({ email }).select('+password')
      if (user?.password) {
        const correct = await correctPassword(password, user.password)
        if (correct) {
          const acessToken = createToken(user)
          const newRefreshToken = await createTokenOpaco(user.id)
          return {
            acessToken: acessToken,
            refreshToken: newRefreshToken
          }
        }
        return false
      }
      return false
    } catch (err) {
      throw new Error(err)
    }
  }
}
