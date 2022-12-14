const { expect } = require('chai').expect;
const { bookSelection } = require('./bookSelection');

describe('Tests', () => {
    describe('isGenreSuitable', () => {
        it('Test 1', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.equal(`Books with Thriller genre are not suitable for kids at 10 age`);
            expect(bookSelection.isGenreSuitable('Horror', 5)).to.equal(`Books with Horror genre are not suitable for kids at 5 age`);
            expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Thriller', 20)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('a', 20)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('a', 5)).to.equal(`Those books are suitable`);

        });


    }); 54
    describe('isItAffordable', () => {
        it('test 2', () => {
            expect(() => bookSelection.isItAffordable('4', 4)).to.throw("Invalid input");
            expect(() => bookSelection.isItAffordable(4, '10')).to.throw("Invalid input");
            expect(() => bookSelection.isItAffordable('4', '10')).to.throw("Invalid input");

            expect(bookSelection.isItAffordable(13, 10)).to.equal("You don't have enough money");

            expect(bookSelection.isItAffordable(5, 10)).to.equal(`Book bought. You have 5$ left`);
            expect(bookSelection.isItAffordable(10, 10)).to.equal(`Book bought. You have 0$ left`);



        });
    });
    describe('suitableTitles', () => {
        it('test 3', () => {
            expect(() => bookSelection.suitableTitles('4', 10)).to.throw("Invalid input");
            expect(() => bookSelection.suitableTitles({}, 10)).to.throw("Invalid input");
            expect(() => bookSelection.suitableTitles(['Thriller', 'Comedy', 'Horror'], 10)).to.throw("Invalid input");
            expect(() => bookSelection.suitableTitles(5, 'Horror')).to.throw("Invalid input");

            expect(bookSelection.suitableTitles([{ title: "Beastmaking", genre: 'Sport' }, { title: "Green mile", genre: 'Drama' }, { title: 'Run', genre: 'Drama' }], 'Drama')).to.equal('Green mile, Run');






        });
    });
});