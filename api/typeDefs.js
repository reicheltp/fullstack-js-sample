module.exports = `
type Author {
  id: ID!
  name: String
  posts: [Post]
}

type Post {
  id: ID!
  title: String
  votes: Int
  author: Author
}

type Query {
  posts: [Post!]
  author(id: ID!): Author!
}

type Mutation {
  addAuthor(name: String!): Author
  writePost(title: String!, authorId: ID!): Post
  upvotePost(postId: ID!): Post
}
`
