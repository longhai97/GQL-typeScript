import {gql} from "apollo-server";

export default gql`    
    type Author {
        id:ID
        name:String
        books: [Book]
    }
    type Book {
        id:ID
        name:String
        author:Author
    }
    type Query {
        authors: [Author]
        author(id:ID!):Author
        books: [Book]
        book(id:ID!):Book
    }
    type Mutation {
        addAuthor(id:ID, name: String): Author
        saveAuthor(id:ID, name: String): Author
        addBook(id:ID name: String, author: String): Book
    }
`
