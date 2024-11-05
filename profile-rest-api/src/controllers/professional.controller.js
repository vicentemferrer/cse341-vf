import { getUser } from '../models/professional.model.js'

async function getProfileData(req, res) {
    const user = await getUser()

    return res.json(user)
}

export {
    getProfileData
}