const { gql } = require('apollo-server');


const typeDefs = gql`


type User {

email:String 
password:String

} 

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

  user(id:ID): User!

  books: [Book]

  magazines: [Magazine]

  magaz(id:ID):Magazine

  buyers:[Customer]

  csearch(name:String):Customer


 
},

input CreateBookInput {

  title: String

  author: String
}

input updateBookName{
  title:String
  newUserTitle:String 
}


type Mutation {

  createBook( input:CreateBookInput):Book
  updateBookName(input:updateBookName):Book
  deleteBook(title: String):Book

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


module.exports = { typeDefs }