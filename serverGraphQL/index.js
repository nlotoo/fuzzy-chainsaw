const { ApolloServer, gql } = require('apollo-server-express');

const mongoose = require('mongoose');
const express = require('express');


const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');
const { graphqlUploadExpress } = require('graphql-upload');
const { GraphQLUpload } = require('graphql-upload');



const { resolvers } = require('./graphql/resover.js');
const { typeDefs } = require('./graphql/type-defs.js');

const { DB_PORT, MONGODB } = require('./config.js');

mongoose.set('strictQuery', true);




const { createUploadLink } = require('apollo-upload-client')

// todo: gprahql - type def for user/create user /delete user/  create record / edit-record  /delete record/ (also middware and validation)

// TODO: middleware

// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: ({ req }) => ({ req }),

//     link: createUploadLink(),
//     headers: {
//         "keep-alive": "true"
//     }

// });





async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        // Using graphql-upload without CSRF prevention is very insecure.
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
    });

   

    await server.start();

    const app = express();

    mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connection succsessful');
        return app.listen({ port: DB_PORT });
    })
    .then((res) => {
        console.log(`Server runing at ${DB_PORT}`)
    })

    // This middleware should be added before calling `applyMiddleware`.
    app.use(graphqlUploadExpress());

    server.applyMiddleware({ app });

    // await new Promise((r) => app.listen({ port: 5001 }, r));
    // console.log(`🚀 Server ready at http://localhost:${DB_PORT}${server.graphqlPath}`);

 
}

startServer();







module.exports = mongoose;