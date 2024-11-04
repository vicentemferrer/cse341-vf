import express from 'express'

import activitiesRoute from './routes/activities.router.js'

process.loadEnvFile()

const app = express()

app.use('/activities', activitiesRoute)

// Server start
const { HOST, PORT } = process.env

app.listen(PORT || 4321, () => {
    console.log(`Your app is listening on http://${HOST}:${PORT}`)
})