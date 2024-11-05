import Database from "../db/mongodb.manager.js"

async function getUser() {
    try {
        const db = await Database.getDatabase()
        const [user, _] = await db.collection('user').find().toArray()

        return user
    } catch (err) {
        console.error(err)
    }
}

async function insertUser(user) {
    try {
        const db = await Database.getDatabase()
        db.collection('user').insertOne(user)
    } catch (err) {
        console.error(err)
    }
}

export {
    getUser,
    insertUser
}