const mongoose = require('mongoose');
const { DB_PORT } = require("./config.js");

mongoose.set('strictQuery', true);

// mongoose.connect(`mongodb://localhost:${DB_PORT}/tournirr`);
// mongoose.connect('mongodb+srv://root:MVWWKD4j3ym47CB9@cluster0.lnhwqsk.mongodb.net/tournir_react')

// new added
const { ApolloServer, gql } = require('apollo-server');
const _ = require('lodash');
const { typeDefs } = require("../schema/type-defs.js");
const { resolvers } = require('../schema/resover.js')
// import { ApolloServer } from '@apollo/server';
// const { gql } = require("apollo-server-ex")
// const { gql } = require('apollo-server-express');




const server = new ApolloServer({ typeDefs, resolvers })
// server.listen().then(({ url }) => {

//     console.log(`Your API is RUNNING AT: ${url}`)
// })





mongoose.connect('mongodb+srv://nlotoo93:asdasd@cluster0.spy4lji.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connection succsessful');
        return server.listen({ port: 5001 });
    })
    .then((res) => {
        console.log(`Server runing at  ${res.url}`)
    })

require("../schemes/USER");


// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error2:'));
// db.once('open', function () {
//     console.log("DB CONNECTED");
// });


module.exports = mongoose;