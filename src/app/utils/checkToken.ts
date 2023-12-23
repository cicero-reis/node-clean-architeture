import jwt from 'jsonwebtoken'
import { promisify } from 'util'

const secretKey = process.env.JWT_SECRET || 'invalid'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function verifyToken(token: string): Promise<any> {
  const verifyAsync = promisify(jwt.verify) as (
    token: string,
    secretOrPublicKey: jwt.Secret,
    options?: jwt.VerifyOptions
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => Promise<any>

  try {
    const decoded = await verifyAsync(token, secretKey)
    return decoded
  } catch (error) {
    throw new Error('Invalid token!')
  }
}

// ;(async () => {
//   const tokenToVerify = 'seu_token_aqui'

//   try {
//     const decodedToken = await verifyToken(tokenToVerify)
//     console.log('Token válido. Decodificado:', decodedToken)
//   } catch (error) {
//     console.error('Erro ao verificar o token:', error.message)
//   }
// })()
