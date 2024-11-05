import express from 'express'
import bodyParser from 'body-parser'
import { connect } from 'mongoose'

import activitiesRouter from './src/routes/activities.router.js'

const { HOST, PORT, MONGO_URI } = process.env

const app = express()

connect(MONGO_URI)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/activities', activitiesRouter)

// Server start
app.listen(PORT || 4321, () => {
    console.log(`Your app is listening on http://${HOST}:${PORT}`)
})