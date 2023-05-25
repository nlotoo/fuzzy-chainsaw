const express = require("express")()
const app = express

const { PORT } = require('./config/config')
router = require('./router')



const expressConfig = require("./config/express");
expressConfig(app)

app.use(router)

const { ApolloServer, gql } = require('apollo-server');
const _ = require('lodash');
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require('./schema/resover.js')
// import { ApolloServer } from '@apollo/server';
// const { gql } = require("apollo-server-ex")
// const { gql } = require('apollo-server-express');















const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {

    console.log(`Your API is RUNNING AT: ${url}`)
})


app.listen(PORT, () => console.log(`Server listen on port http://localhost:${PORT}/`))

//express.listen(PORT, () => console.log(`Server listen on port http://localhost:${PORT}/`))