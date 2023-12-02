import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()

app.use(express.json({ limit: '1mb' }))

app.use(express.urlencoded({ extended: false }))

export default app
