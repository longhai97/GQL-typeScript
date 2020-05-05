import {Arg, Mutation, Query, Resolver} from "type-graphql";
import Author from "./Author";
import {getRepository} from "typeorm";

@Resolver()
export default class AuthorResolver {

    private authorRepository = getRepository(Author);

    @Query(returns => [Author])
    async authors(): Promise<Author[]> {
        return await this.authorRepository.find();
    }

    @Mutation(returns => Author)
    async creteAuthor(
        @Arg("name") name: string
    ): Promise<Author> {
        let author = new Author();
        author.name = name

        await this.authorRepository.save(author);
        return author;
    }
}
