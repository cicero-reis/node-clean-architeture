import { Redis as RedisClient } from 'ioredis'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function connect(client: RedisClient) {
  client.connect()
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function disconnect(client: RedisClient) {
  await client.disconnect()
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const redisClient = (client: RedisClient) => {
  return {
    async add(key: string, value: string, dateExpiresIn: number) {
      await connect(client)
      await client.set(key, value)
      await client.expire(key, dateExpiresIn)
      await disconnect(client)
    },

    async addToken(token: string) {
      await connect(client)
      await client.set(token, ' ')
      await disconnect(client)
    },

    async getKey(key: string) {
      await connect(client)
      const result = await client.get(key)
      await disconnect(client)
      return result
    },

    async containsKey(key: string) {
      await connect(client)
      const result = await client.exists(key)
      await disconnect(client)
      return result === 1
    },

    async delete(key: string) {
      await connect(client)
      await client.del(key)
      await disconnect(client)
    }
  }
}

export default redisClient
