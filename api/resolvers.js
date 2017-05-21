var mongoose = require('mongoose')

// Native Promises
mongoose.Promise = global.Promise

// Local Mongo intance
mongoose.connect('mongodb://localhost/test')

// Create Schema-free Models
var Post = mongoose.model('Post', new mongoose.Schema({}, { strict: false }))
var Author = mongoose.model('Author', new mongoose.Schema({}, { strict: false }))

// Export the resolvers
module.exports = {
  Query: {
    posts: () => Post.find().lean(),
    author: (_, { id }) => Author.findById(id).lean()
  },
  Mutation: {
    addAuthor(_, { name }) {
      return new Author({ name }).save()
    },
    writePost(_, { title, authorId }) {
      return new Post({ votes: 0, title, authorId }).save()
    },
    async upvotePost(_, { postId }, {user}) {
      var post = await Post.findById(postId).lean()
      post.votes += 1
      return Post.findByIdAndUpdate(postId, post).lean()
    }
  },
  Post: {
    id: (post) => post._id.toHexString(),
    author: (post) => Author.findOne({ _id: post.authorId }).lean()
  },
  Author: {
    id: (author) => author._id.toHexString(),
    posts: (author) => Post.find({ authorId: author._id.toHexString() }).lean()
  }
}