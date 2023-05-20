const express = require("express")()
const app = express

const { PORT } = require('./config/config')
router = require('./router')



const expressConfig = require("./config/express");
expressConfig(app)

app.use(router)


//implementing server sent events


// integrate graphQL
const typeDefinition = `
type Query  {
   greeting: String
}`
const resolverObject = {
    Query: {
        greeting: () => 'Hello GraphQL  From TutorialsPoint !!'
    }
}
const { makeExecutableSchema } = require('graphql-tools')

const schema = makeExecutableSchema({ typeDefs: typeDefinition, resolvers: resolverObject })

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')

app.use('/graphql', graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

// integrate end



app.listen(PORT, () => console.log(`Server listen on port http://localhost:${PORT}/`))

//express.listen(PORT, () => console.log(`Server listen on port http://localhost:${PORT}/`))