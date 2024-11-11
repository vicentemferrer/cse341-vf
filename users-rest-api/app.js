import express from 'express'
import bodyParser from 'body-parser'

import { addUser, deleteUser, getAllUsers, getUser, updateUser } from './src/controllers/users.controller.js'

const { HOST, PORT } = process.env

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.route('/')
    .get(getAllUsers)
    .post(addUser)

app.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

app.listen(PORT || 5000, () => {
    console.log(`Express App running at http://${HOST}:${PORT}`)
})