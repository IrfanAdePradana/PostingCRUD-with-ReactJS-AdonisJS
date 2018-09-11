'use strict'
const User = use('App/Models/User');
class UserController {

    async store({ request }) {
        const { username, email, password } = request.all()
        const user = new User();

        user.username = username
        user.email = email
        user.password = password

        await user.save();

        return user
    }

    async index() {
        const user = await User.all()

        return user
    }

    async login({ request, auth }) {
        const { username, password } = request.all()
        const token = await auth.attempt(username, password)

        return {
            status: 200,
            message: "berhasil login",
            token
        }
    }
}

module.exports = UserController
