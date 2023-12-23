import redisConnect from './connect'
import redisClient from './redisClient'

redisConnect.set('key', 'allowlist-refresh-token')

export default redisClient(redisConnect)
