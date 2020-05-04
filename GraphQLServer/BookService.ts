declare type Book = {
    id: string
    name: string
}

interface BookServiceInter {
    list(): Book[]

    get(id: string, name: string): Book

    add(id: string, name: string): Book
}

export class BookService implements BookServiceInter {

    books: Book[] = [
        {id: "one", name: "bar"},
        {id: "two", name: "foo"},
        {id: "three", name: "book3"},
    ]

    list(): Book[] {
        return this.books;
    }

    get(id: string): Book {
        return this.books.find( sach => sach.id === id);
    }

    add(id: string, name: string): Book {
        this.books.push({id,name})
        return {id,name}
    }
}
