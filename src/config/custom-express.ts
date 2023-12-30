import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

app.use(express.json({ limit: '1mb' }))

app.use(express.urlencoded({ extended: false }))

export default app
