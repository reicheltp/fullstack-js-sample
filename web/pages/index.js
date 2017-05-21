import 'isomorphic-fetch'
import React from 'react'

import withData from '../lib/withData'
import PostList from '../components/PostList'

function Index() {
  return (
    <div>
      <h1>Posts of Today</h1>
      <PostList />       
    </div>
  )
}

export default withData(Index)