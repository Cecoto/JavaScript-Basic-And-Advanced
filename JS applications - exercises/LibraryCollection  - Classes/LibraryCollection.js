class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length == this.capacity) {
            throw new Error("Not enough space in the collection.");
        }
        this.books.push({
            bookName: bookName,
            bookAuthor: bookAuthor,
            payed: false
        });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName) {
        let book = this.books.find(x => x.bookName == bookName);

        if (book == undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (book.payed == true) {
            throw new Error(`${bookName} has already been paid.`);
        }
        book.payed = true;
        return `${bookName} has been successfully paid.`;
    }
    removeBook(bookName) {
        let book = this.books.find(x => x.bookName == bookName);
        if (book == undefined) {
            throw new Error(`The book, you're looking for, is not found.`);
        }
        if (book.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books.splice(this.books.indexOf(book), 1);
        return `${bookName} remove from the collection.`;
    }
    getStatistics(bookAuthor) {
        let result = [];
        if (bookAuthor == undefined) {
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);

            for (const book of this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))) {
                result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed == true ? 'Has Paid' : 'Not Paid'}.`);
            }
            return result.join('\n');
        }
        let bookA = this.books.find(x => x.bookAuthor == bookAuthor);
        if (bookA != undefined) {
            return `${bookA.bookName} == ${bookA.bookAuthor} - ${bookA.payed == true ? 'Has Paid' : 'Not Paid'}.`
        }

        throw new Error(`${bookAuthor} is not in the collection.`);
    }

}
const library = new LibraryCollection(2)
library.getStatistics('ceco');



