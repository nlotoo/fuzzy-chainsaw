const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');


const { resolvers } = require('./graphql/resover.js');
const { typeDefs } = require('./graphql/type-defs.js');

const { DB_PORT, MONGODB } = require('./config.js');

mongoose.set('strictQuery', true);




const { createUploadLink } = require('apollo-upload-client')
// todo: gprahql - type def for user/create user /delete user/  create record / edit-record  /delete record/ (also middware and validation)

// TODO: middleware

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
    link: createUploadLink()

});




mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connection succsessful');

        return server.listen({ port: DB_PORT });
    })
    .then((res) => {
        console.log(`Server runing at  ${res.url}`)
    })



module.exports = mongoose;