const express = require("express")()
const app = express

const { PORT } = require('./config/config')
router = require('./router')



const expressConfig = require("./config/express");
expressConfig(app)

app.use(router)

const { ApolloServer, gql } = require('apollo-server');
// import { ApolloServer } from '@apollo/server';
// const { gql } = require("apollo-server-ex")
// const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Magazine{

    id:ID

    title: String

    author: String

    year: Int

    country: Country
}

type Book {


  title: String

  author: String

}

type Customer{

    name:String

    year:String

    gender: Gender

    collection:[Magazine]
}


type Query {

  books: [Book]

  magazines: [Magazine]

  magaz(id:ID):Magazine

  buyers:[Customer]

  csearch(name:String):Customer

}

enum Gender{

    MALE
    FEMALE
}


enum  Country{
 SPAIN
 GERMAN
 ITALY
 BRAZIL
}

`;


const customers = [

    {
        name: 'Pesho',
        year: '1990',
        gender: 'MALE',
        collection: [{
            id: '4',

            title: 'Amazon',

            author: 'Bai Ivan 2',

            year: 2022,

            country: 'BRAZIL'


        },
        {
            id: '2',

            title: 'Forbse',

            author: 'Danw Jhone',

            year: 2023,

            country: 'GERMAN'

        },


        ]
    }
]

const magazines = [
    {
        id: '2',

        title: 'Forbse',

        author: 'Danw Jhone',

        year: 2023,

        country: 'GERMAN',
        collection: null


    },

    {
        id: '3',

        title: 'Hai Club',

        author: 'Bai Ivan',

        year: 2022,

        country: 'SPAIN',
        collection: null



    },


    {
        id: '4',

        title: 'Amazon',

        author: 'Bai Ivan 2',

        year: 2022,

        country: 'BRAZIL',
        collection: null


    }

]

const books = [

    {

        title: 'The Awakening',

        author: 'Kate Chopin',

    },

    {

        title: 'City of Glass',

        author: 'Paul Auster',

    },

];

const _ = require('lodash');


const resolvers = {

    Query: {

        books: () => books,

        magazines: () => magazines,

        magaz: (parent, args) => {

            const id = args.id;
            const magazine = magazines.find((m) => {
                console.log(id)

                if (m.id === args.id) {
                    return m
                }
            });
            // console.log(magazine)
            return magazine

        },


        buyers: () => customers,

        csearch: (parent, args) => {


            // console.log(args)

            const name = args.name
            // const result = 
            return customers.find((data) => {

                return data.collection.filter((m) => m.country !== 'BRAZIL')


            })

            // return result

        }

    },


};

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {

    console.log(`Your API is RUNNING AT: ${url}`)
})


app.listen(PORT, () => console.log(`Server listen on port http://localhost:${PORT}/`))

//express.listen(PORT, () => console.log(`Server listen on port http://localhost:${PORT}/`))