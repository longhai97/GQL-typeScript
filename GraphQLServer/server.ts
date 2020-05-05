import 'reflect-metadata';
import {ApolloServer} from "apollo-server";
import {buildSchema} from "type-graphql";
import AuthorResolver from "./AuthorResolver";
import {createConnection} from "typeorm";

createConnection()
    .then(() => {
        return buildSchema({
            resolvers: [AuthorResolver]
        })
    })
    .then(schema => {
        const apolloServer = new ApolloServer({
            schema
        });
        apolloServer.listen(8080).then(() => {
            console.log("server is ready");
        });
    });
