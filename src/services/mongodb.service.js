import { MongoClient } from "mongodb"

async function main(callback, ...args) {
    const { MONGO_URI } = process.env

    const client = new MongoClient(MONGO_URI)

    try {
        await client.connect()

        await callback(client, ...args)
    } catch (error) {
        console.error(error.message)
    } finally {
        await client.close()
    }
}

export default main