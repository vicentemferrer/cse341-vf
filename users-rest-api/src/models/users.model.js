import { readFile, writeFile } from 'node:fs/promises'
import { dirnameParse, pathSeparator } from '../utils/path.util.js'

const { dirname } = import.meta
const separator = pathSeparator()

const pathDB = `${dirnameParse(dirname, 1)}${separator}db${separator}users.json`

async function getAllUsers() {
    try {
        const fileStream = await readFile(pathDB, 'utf8')

        return fileStream
    } catch (err) {
        console.log(`getAllUsers failed: ${err.message}`)
    }
}

async function getUser(id) {
    try {
        const fileStream = await readFile(pathDB, 'utf8')

        const [user] = JSON.parse(fileStream).filter(user => user.id === parseInt(id))

        return user
    } catch (err) {
        console.log(`getUser failed: ${err.message}`)
    }
}

async function addUser(user) {
    try {
        const fileStream = await readFile(pathDB, 'utf8')
        const users = JSON.parse(fileStream)

        users.push(user)

        return await writeFile(pathDB, JSON.stringify(users), 'utf8')
            .then(data => ({ message: 'User added!' }))
            .catch(err => console.log(`writeFile to add failed: ${err.message}`))
    } catch (err) {
        console.log(`addUser failed: ${err.message}`)
    }
}

async function deleteUser(id) {
    try {
        const fileStream = await readFile(pathDB, 'utf8')

        const users = JSON.parse(fileStream).filter(user => user.id !== parseInt(id))

        return await writeFile(pathDB, JSON.stringify(users), 'utf8')
            .then(data => ({ message: 'User deleted!' }))
            .catch(err => console.log(`writeFile to delete failed: ${err.message}`))
    } catch (err) {
        console.log(`deleteUser failed: ${err.message}`)
    }
}

async function updateUser(id, user) {
    try {
        const fileStream = await readFile(pathDB, 'utf8')

        const users = JSON.parse(fileStream).map(oldUser => oldUser.id === parseInt(id) ? user : oldUser)

        return await writeFile(pathDB, JSON.stringify(users), 'utf8')
            .then(data => user)
            .catch(err => console.log(`writeFile to update failed: ${err.message}`))
    } catch (err) {
        console.log(`updateUser failed: ${err.message}`)
    }
}

export default {
    getAllUsers,
    getUser,
    addUser,
    deleteUser,
    updateUser
}