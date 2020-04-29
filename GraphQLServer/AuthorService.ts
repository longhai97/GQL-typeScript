declare type Author = {
    id: string
    name: string
}

interface AuthorServiceInterface {
    list(): Author[]

    get(id: string): Author

    add(id: string, name: string): Author
}

export class AuthorService implements AuthorServiceInterface {

    authors: Author[] = [
        {id: "foo", name: "bar"},
        {id: "bar", name: "foo"}
    ];

    list(): Author[] {
        return this.authors;
    }

    get(id: string): Author {
        return this.authors.find(author => author.id === id);
    }

    add(id: string, name: string): Author {
        this.authors.push({id, name});
        return {id,name}
    }
}
