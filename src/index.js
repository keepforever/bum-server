require('dotenv').config()
const { prisma } = require('../generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./resolvers')

const main = async () => {

  const server = new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers,
    context: req => ({
      ...req,
      prisma
    }),
  })

  server.start(() => console.log(`
    ##################################################
    ##                                              ##
    ##  Server is running on http://localhost:4000  ##
    ##                                              ##
    ##################################################
`))

}

main();
