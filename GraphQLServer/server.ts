import {ApolloServer} from "apollo-server";
import typeDefs from "./schema";
import {AuthorService} from "./AuthorService";

declare type HaveInfoMation = {
    id: string
    name: string
}

const authorService = new AuthorService();
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: {
            authors() {
                return authorService.list()
            },
            author(_, args: HaveInfoMation) {
                return authorService.get(args.id)
            }
        },
        Mutation: {
            addAuthor(_, args: HaveInfoMation) {
                return authorService.add(args.id, args.name)
            }
        }
    }
});

apolloServer.listen(8080).then(() => {
   console.log("server is ready")
});
