const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const { typeDefs } = require("./graphql/type-defs.js");
const { resolvers } = require('./graphql/resover.js');


const { DB_PORT, MONGODB } = require('./config.js');

mongoose.set('strictQuery', true);






// todo: gprahql - type def for user/create user /delete user/  create record / edit-record  /delete record/ (also middware and validation)

// TODO: middleware

const server = new ApolloServer({ typeDefs, resolvers });


mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connection succsessful');

        return server.listen({ port: DB_PORT });
    })
    .then((res) => {
        console.log(`Server runing at  ${res.url}`)
    })



module.exports = mongoose;