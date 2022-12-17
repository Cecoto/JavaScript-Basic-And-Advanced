const expect = require('chai').expect;
const flowerShop = require('./flowerShop');

describe("Tests …", () => {
    describe('calculte price of flowers', () => {
        it("test1", () => {
            expect(() => flowerShop.calcPriceOfFlowers([], 10, 2)).to.throw('Invalid input');
            expect(() => flowerShop.calcPriceOfFlowers('string', 10, {})).to.throw('Invalid input');
            expect(() => flowerShop.calcPriceOfFlowers('string', {}, 2)).to.throw('Invalid input');
            expect(() => flowerShop.calcPriceOfFlowers('string', {}, 2.5)).to.throw('Invalid input');
            expect(() => flowerShop.calcPriceOfFlowers('string', 10.2, {})).to.throw('Invalid input');
            expect(() => flowerShop.calcPriceOfFlowers('string', [], {})).to.throw('Invalid input');

            expect(flowerShop.calcPriceOfFlowers('tulips', 5, 5)).to.equal(`You need $25.00 to buy tulips!`);



        });
    });

    describe("check flower is available", () => {
        it("test2", () => {
            expect(flowerShop.checkFlowersAvailable('tulip', ['tulip', 'lilac'])).to.equal(`The tulip are available!`);
            expect(flowerShop.checkFlowersAvailable('string', ['tulip', 'lilac'])).to.equal(`The string are sold! You need to purchase more!`);

        });
    });

    describe("sell flowers", () => {
        it("test3", () => {
            expect(() => flowerShop.sellFlowers({}, 0)).to.throw('Invalid input');
            expect(() => flowerShop.sellFlowers(['rose'], 2)).to.throw('Invalid input');
            expect(() => flowerShop.sellFlowers(['rose'], -4)).to.throw('Invalid input');
            expect(() => flowerShop.sellFlowers(['rose'], 2.5)).to.throw('Invalid input');
            expect(() => flowerShop.sellFlowers(['rose'], '6')).to.throw('Invalid input');
            expect(() => flowerShop.sellFlowers(['rose'], 1)).to.throw('Invalid input');
            expect(() => flowerShop.sellFlowers('string', 0)).to.throw('Invalid input');

            expect(flowerShop.sellFlowers(['rose', 'ohrid', 'lilac', 'tulip'], 2)).to.equal('rose / ohrid / tulip');





        });
    });

});
