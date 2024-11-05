import express from 'express'
import Database from './src/db/mongodb.manager.js'

import { corsMiddleware } from './src/utils/app.util.js'

import professionalRoute from './src/routes/professional.route.js'

const { HOST, PORT, MONGODB_URI } = process.env

const app = express()

Database.connect(MONGODB_URI)

app.use(corsMiddleware)

app.use('/professional', professionalRoute)

app.listen(PORT || 8080, () => {
    console.log(`App listening on http://${HOST}:${PORT}`)
})