import { Redis as RedisClient } from 'ioredis'

const redisClient = (client: RedisClient) => {
  return {
    async add(key: string, value: string, dateExpiresIn: number) {
      await client.set(key, value)
      await client.expire(key, dateExpiresIn)
    },

    async addToken(token: string) {
      await client.set(token, ' ')
    },

    async getKey(key: string) {
      const result = await client.get(key)
      return result
    },

    async containsKey(key: string) {
      const result = await client.exists(key)
      return result === 1
    },

    async delete(key: string) {
      await client.del(key)
    }
  }
}

export default redisClient
