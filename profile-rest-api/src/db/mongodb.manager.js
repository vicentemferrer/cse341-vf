import { MongoClient } from 'mongodb';

class Database {
    static client;

    static async connect(uri) {
        Database.client = new MongoClient(uri);

        try {
            Database.client.connect();
        } catch (err) {
            console.error(err);
        }
    }

    static async getDatabase() {
        if (!Database.client) throw Error('Database not initialized');

        try {
            return await Database.client.db();
        } catch (err) {
            console.error(err);
        }
    }

    static async disconnect() {
        try {
            Database.client.close();
        } catch (err) {
            console.error(err);
        }
    }
}

export default Database;
