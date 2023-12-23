import express from 'express'

const app = express()

app.use(express.json({ limit: '1mb' }))

app.use(express.urlencoded({ extended: false }))

export default app
