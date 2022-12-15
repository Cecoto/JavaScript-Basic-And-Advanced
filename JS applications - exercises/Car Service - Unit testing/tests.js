const expect = require('chai').expect;
const carService = require('./03. Car Service_Resources');

describe("Tests", () => {

    describe("isItExpensive", () => {

        it("Tests1", () => {
            expect(carService.isItExpensive('Engineasdaddad')).to.equal(`The overall price will be a bit cheaper`);
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive(12)).to.equal(`The overall price will be a bit cheaper`);
            expect(carService.isItExpensive({})).to.equal(`The overall price will be a bit cheaper`);
        });

    });
    describe("discount", () => {

        it("Tests2", () => {
            expect(() => carService.discount('5', 5)).to.throw('Invalid input');
            expect(() => carService.discount(5, '1')).to.throw('Invalid input');
            expect(() => carService.discount('2', '1')).to.throw('Invalid input');

            expect(carService.discount(2, 5)).to.equal("You cannot apply a discount");
            expect(carService.discount(1, 5)).to.equal("You cannot apply a discount");


            expect(carService.discount(5, 100)).to.equal(`Discount applied! You saved 15$`);
            expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved 15$`);
            expect(carService.discount(10, 100)).to.equal(`Discount applied! You saved 30$`);

        });

    });
    describe("partsToBuy", () => {

        it("Test1", () => {
            expect(() => carService.partsToBuy({}, []).to.throw('Invalid input'));
            expect(() => carService.partsToBuy({}, '').to.throw('Invalid input'));
            expect(() => carService.partsToBuy(5, '').to.throw('Invalid input'));

            expect(carService.partsToBuy(
                [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],
                ["blowoff valve", "injectors"])).to.equal(145);
                
            expect(carService.partsToBuy(
                [],
                ["blowoff valve", "injectors"])).to.equal(0);


        });

    });

});
