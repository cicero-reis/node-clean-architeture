import mongoose from 'mongoose'

export default class MongoDB {
  private static instance: MongoDB

  private constructor() {}

  static getInstance(): MongoDB {
    if (!MongoDB.instance) {
      MongoDB.instance = new MongoDB()
    }
    return MongoDB.instance
  }

  getConnectDB = () => {
    mongoose.connect('mongodb://mongodb:27017/db_store').then(
      () => {
        console.log('connected to mongodb successfully!')
      },
      (err) => {
        return err
      }
    )
  }

  dbClose = () => {
    mongoose.connection.close()
  }
}
