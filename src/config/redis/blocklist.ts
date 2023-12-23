import redisConnect from './connect'
import redisClient from './redisClient'

redisConnect.set('key', 'blocklist')

export default redisClient(redisConnect)
