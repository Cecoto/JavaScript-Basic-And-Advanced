const expect = require('chai').expect;
const rentCar = require('./rentCar');

describe("Tests", () => {

    describe("search Car", () => {

        it("Test1", () => {
            expect(rentCar.searchCar(['BMW', 'Merc', 'Audi'], 'Merc')).to.equal(`There is 1 car of model Merc in the catalog!`);
            expect(rentCar.searchCar(['BMW', 'Merc', 'Audi', 'Merc', 'Merc'], 'Merc')).to.equal(`There is 3 car of model Merc in the catalog!`);

            expect(() => rentCar.searchCar(['BMW', 'Merc', 'Audi', 'Merc', 'Merc'], 'Golf')).to.throw('There are no such models in the catalog!');
            expect(() => rentCar.searchCar({}, 'Golf')).to.throw('Invalid input!');

            expect(() => rentCar.searchCar([], 5)).to.throw('Invalid input!');
            expect(() => rentCar.searchCar({}, {})).to.throw('Invalid input!');

            expect(() => rentCar.searchCar(['Golf', 'M'], {})).to.throw('Invalid input!');

        });

    });
    describe("calculate price of car", () => {

        it("Test2", () => {
            expect(() => rentCar.calculatePriceOfCar('Subaru', 13)).to.throw('No such model in the catalog!');
            expect(() => rentCar.calculatePriceOfCar('Subaru', '13')).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar([], 13)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar([], '13')).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar({}, {})).to.throw('Invalid input!');
            



            expect(rentCar.calculatePriceOfCar('BMW', 10)).to.equal(`You choose BMW and it will cost $450!`);


        });

    });
    describe("Check budget", () => {

        it("Test3", () => {
            expect(() => rentCar.checkBudget('5', 2, 1)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(5, '2', 1)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(2, 2, "1")).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget('5', [], {})).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget('5', [], 2)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget('', [], {})).to.throw('Invalid input!');

            expect(rentCar.checkBudget(50, 2, 200)).to.equal(`You rent a car!`);
            expect(rentCar.checkBudget(50, 2, 100)).to.equal(`You rent a car!`);

            expect(rentCar.checkBudget(50, 2, 20)).to.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(50, 2, 99)).to.equal('You need a bigger budget!');





        });

    });

});
