const { ApolloServer } = require('apollo-server')
const { mainCards, animals, categories } = require('./db')
const typeDefs = require('./schema')
const Query = require('./resolvers/Query')
const Category = require('./resolvers/Category')
const Animal = require('./resolvers/Animal')
const Mutation = require('./resolvers/Mutation')

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Mutation, Category, Animal },
  context: { mainCards, animals, categories },
  csrfPrevention: true,
})

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
