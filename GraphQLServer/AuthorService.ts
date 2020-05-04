declare type Book = {
    id: string
    name: string
}

declare type Author = {
    id: string
    name: string
    books: Array<Book>
}

interface AuthorServiceInterface {
    list(): Author[]

    get(id: string): Author

    add(id: string, name: string, books: Array<Book>): Author
}

export class AuthorService implements AuthorServiceInterface {

    authors: Author[] = [
        {id: "foo", name: "bar", books: []},
        {id: "bar", name: "foo", books: []}
    ];

    list(): Author[] {
        return this.authors;
    }

    get(id: string): Author {
        return this.authors.find(author => author.id === id);
    }

    add(id: string, name: string, books: Book[]): Author {
        this.authors.push({id, name, books});
        return {id,name,books}
    }

    // edit(id: string, name: string) {
    //     const newValue = this.authors.filter(author => author.id === id)
    //
    // }
}
