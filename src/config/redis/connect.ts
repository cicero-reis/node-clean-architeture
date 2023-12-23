import { Redis } from 'ioredis'

const redisConnect = new Redis({
  host: 'redis',
  port: 6379
})

redisConnect.on('connect', () => {
  console.log('connected to redis successfully!')
})

redisConnect.on('error', (error) => {
  console.log('Redis connection error :', error)
})

export default redisConnect
