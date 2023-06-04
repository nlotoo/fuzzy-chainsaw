const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const _ = require('lodash');
const { typeDefs } = require("./graphql/type-defs.js");
const { resolvers } = require('./graphql/resover.js')

mongoose.set('strictQuery', true);






// todo: gprahql - type def for user/create user /delete user/  create record / edit-record  /delete record/ (also middware and validation)

// TODO: middleware

const server = new ApolloServer({ typeDefs, resolvers });


mongoose.connect('mongodb+srv://nlotoo93:asdasd@cluster0.spy4lji.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connection succsessful');

        return server.listen({ port: 5001 });
    })
    .then((res) => {
        console.log(`Server runing at  ${res.url}`)
    })



module.exports = mongoose;