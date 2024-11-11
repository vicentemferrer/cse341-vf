class UserSchema {
    constructor({ name, password, profession, id }) {
        this.name = name
        this.password = password
        this.profession = profession
        this.id = parseInt(id)
    }
}

export default UserSchema