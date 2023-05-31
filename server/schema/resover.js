const { books } = require("./fake-data");
const { customers } = require("./fake-data");
const { magazines } = require("./fake-data");
const _ = require("lodash")


const USER = require('../schemes/USER.js')
const resolvers = {

    Query: {

        // user: ()=> user,

        async user(_, args) {

            console.log(args)
            let result = await USER.findById(args.id)
            console.log(result)
            return result


        },

        magazines: () => magazines,

        magaz: (parent, args) => {

            const id = args.id;
            const magazine = magazines.find((m) => {
                // console.log(id)

                if (m.id === args.id) {
                    return m
                }
            });
            // console.log(magazine)
            return magazine

        },


        buyers: () => customers,

        csearch: (parent, args) => {

            const name = args.name

            const customer = _.find(customers, { name })

            return customer

        }

    },

    // Customer: {
    //     collection: () => {
    //         return _.filter(customers, (m) => {
    //             // console.log(m.collection )


    //         });

    //     },
    // },

    Mutation: {
        createBook: (parent, args) => {
            const book = args.input

            if (book !== null) {
                books.push(book)
            }

            return book

        },
        updateBookName: (parent, args) => {

            let { title, newUserTitle } = args.input
            let newRecord;
            books.forEach((oneBook) => {

                if (oneBook.title === title) {
                    console.log(oneBook)
                    oneBook.title = newUserTitle;
                    newRecord = oneBook
                }
            })

            return newRecord



        },
        deleteBook: (parent, args) => {

            books.filter((book, index) => {
                if (book.title == args.title) {
                    return books.splice(index, index + 1)
                }
            });

        }



    }


};

module.exports = { resolvers }