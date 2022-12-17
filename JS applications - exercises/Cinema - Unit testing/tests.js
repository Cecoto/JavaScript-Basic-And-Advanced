const expect = require('chai').expect;
const cinema = require('./cinema');


describe("Tests", () => {

    describe("showMoves", () => {

        it("Test1", () => {
            expect(cinema.showMovies([])).to.equal(`There are currently no movies to show.`);

            expect(cinema.showMovies(['Shreck', 'The Matrix', 'Dune'])).to.equal('Shreck, The Matrix, Dune');

        });

    });
    describe("ticketPrice", () => {

        it("Test2", () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);

            expect(() => cinema.ticketPrice('')).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice('123')).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice({})).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice([])).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice(15)).to.throw('Invalid projection type.');




        });

    });
    describe("swapSeatsInHall", () => {

        it("Test3", () => {

            expect(cinema.swapSeatsInHall('5', 5)).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(5, '15')).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall('5', '19')).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall([], [])).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall({}, [])).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall({}, {})).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall({}, 5)).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(5, {})).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall([], '123')).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(5, 5)).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(21, 5)).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(15, -5)).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(10, 0)).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(-10, 12)).to.equal(`Unsuccessful change of seats in the hall.`);

            expect(cinema.swapSeatsInHall(15, 20)).to.equal(`Successful change of seats in the hall.`);

            expect(cinema.swapSeatsInHall(1, 20)).to.equal(`Successful change of seats in the hall.`);

            expect(cinema.swapSeatsInHall(16, 2)).to.equal(`Successful change of seats in the hall.`);

        });

    });

});
