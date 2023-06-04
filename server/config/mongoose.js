const mongoose = require('mongoose');
const { DB_PORT } = require("./config.js");

mongoose.set('strictQuery', true);


// new added
const { ApolloServer, gql } = require('apollo-server');
const _ = require('lodash');
const { typeDefs } = require("../graphql/type-defs.js");
const { resolvers } = require('../graphql/resover.js')



// TODO:  to set up graphql server delete REST depedency
// TODO: middleware

const server = new ApolloServer({ typeDefs, resolvers })

mongoose.connect('mongodb+srv://nlotoo93:asdasd@cluster0.spy4lji.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connection succsessful');
        return server.listen({ port: 5001 });
    })
    .then((res) => {
        console.log(`Server runing at  ${res.url}`)
    })

// require("../schemes/USER"); // ИЗКЛЮЧЕНО ЗА ПРОБА


module.exports = mongoose;