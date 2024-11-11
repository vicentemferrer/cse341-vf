import UserModel from '../models/users.model.js'
import UserSchema from '../utils/userSchema.util.js'

async function getAllUsers(req, res) {
    const result = await UserModel.getAllUsers()

    res.end(result)
}

async function getUser(req, res) {
    const { id } = req.params

    const result = await UserModel.getUser(id)

    res.json(result)
}

async function addUser(req, res) {
    const user = new UserSchema(req.body)

    const result = await UserModel.addUser(user)

    res.json(result)
}

async function deleteUser(req, res) {
    const { id } = req.params

    const result = await UserModel.deleteUser(id)

    res.json(result)
}

async function updateUser(req, res) {
    const user = new UserSchema(req.body)
    const { id } = req.params

    const result = await UserModel.updateUser(id, user)

    res.json(result)
}

export {
    getAllUsers,
    getUser,
    addUser,
    deleteUser,
    updateUser
}