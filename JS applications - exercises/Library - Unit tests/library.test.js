const expect = require('chai').expect;
const library = require('./library');

describe("Tests …", () => {

    describe("Calculate Price Book", () => {
        it("test1", () => {
            expect(() => library.calcPriceOfBook({}, 1997)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('asdasd', {})).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook({}, [])).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('string', 12.5)).to.throw('Invalid input');

            expect(library.calcPriceOfBook('Book', 1975)).to.equal(`Price of Book is 10.00`);
            expect(library.calcPriceOfBook('Book', 1980)).to.equal(`Price of Book is 10.00`);
            expect(library.calcPriceOfBook('Book', 2000)).to.equal(`Price of Book is 20.00`);
        });

    });
    describe('find book funciton', () => {
        it('test2', () => {
            expect(() => library.findBook([], 'book')).to.throw("No books currently available");
            expect(library.findBook(['Book1', 'Book5'], 'Tom')).to.equal("The book you are looking for is not here!");
            expect(library.findBook(['Book1', 'Book5'], 'Book1')).to.equal("We found the book you want.");
        });
    });
    describe('arrange books', () => {
        it('test3', () => {
            expect(() => library.arrangeTheBooks({})).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks([])).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks('12')).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-5)).to.throw('Invalid input');

            expect(library.arrangeTheBooks(10)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');

            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
            expect(library.arrangeTheBooks(100)).to.equal("Insufficient space, more shelves need to be purchased.");




        });
    });
 
});
