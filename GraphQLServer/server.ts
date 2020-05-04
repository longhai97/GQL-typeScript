import {ApolloServer} from "apollo-server";
import typeDefs from "./schema";
import {AuthorService} from "./AuthorService";
import {BookService} from "./BookService";

declare type HaveParameter = {
    id: string
    name: string
    books: []
}

declare type BookInfo = {
    id: string
    name: string
    author: string
}

declare type Book = {
    id: string
    name: string
}

const bookService   = new BookService();
const authorService = new AuthorService();

const apolloServer  = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: {
            authors() {
                return authorService.list()
            },
            author(_, args: HaveParameter) {
                return authorService.get(args.id)
            },
            books() {
                return bookService.list()
            },
            book(args: HaveParameter) {
                return bookService.get(args.id)
            }
        },

        Author: {
            books(parent) {
                return bookService.list().filter( book => book.name === parent.name)
            }
        },

        Mutation: {
            addAuthor(_, args: HaveParameter) {
                return authorService.add(args.id, args.name, args.books)
            },
            // editAuthor(_,args: HaveParameter) {
            //     return authorService.edit(args.id, args.name)
            // },
            addBook(root, args:BookInfo) {
                return bookService.add(args.id,args.name)
            }
        }
    }
});
apolloServer.listen(8080).then(() => {
   console.log("server is ready")
});
