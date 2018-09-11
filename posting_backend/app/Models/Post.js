'use strict'

const Model = use('Model')

class Post extends Model {
    static get table () {
        return 'posts'
    }

    static get primaryKey () {
        return 'id'
    }
}

module.exports = Post
