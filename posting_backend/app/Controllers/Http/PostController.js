'use strict'

const Post = use('App/Models/Post')

class PostController {
    async index() {
        const post = await Post.all()

        return post
    }

    async store({ request }) {

        const { judul, isi } = request.all()
        const post = new Post()

        post.judul = judul
        post.isi = isi

        await post.save()

        return post
    }

    async show({ params }) {
        const post = await Post.find(params.id)

        return post

    }
    async update({ request, params }) {
        const post = await Post.find(params.id)
        const { judul, isi } = request.all()

        post.judul = judul
        post.isi = isi

        await post.save()

        return post
    }

    async destroy({ params, response }) {
        const post = await Post.find(params.id)

        if (!post) {
            response.status(404).json({ status: 'tidak ada' })
        }

        await post.delete();

        return response.status(404).json(null)
    }
}

module.exports = PostController
