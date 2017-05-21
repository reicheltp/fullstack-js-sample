const server = require('graphql-server-micro')
const tools = require('graphql-tools')
const cors = require('micro-cors')()
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const schema = tools.makeExecutableSchema({
  typeDefs, resolvers
})

module.exports = cors(server.microGraphql({ schema, debug: true }))
