import React from 'react'
import {gql, graphql} from 'react-apollo'

function PostList({data: {posts}}) {
  return (
    <ul>
      {posts && posts.map(post => 
        <li key={post.id}>{post.title} by {post.author.name}</li>
      )}
    </ul>
  )
}

const FetchData = gql`
query GetPosts {
  posts {
    id title
    author {
      id name
    }
  }
}
`

const PostListWithData = graphql(FetchData)(PostList)

export default PostListWithData
