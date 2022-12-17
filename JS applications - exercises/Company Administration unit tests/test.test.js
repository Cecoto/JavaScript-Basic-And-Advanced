const expect = require('chai').expect;
const companyAdministration = require('./companyAdministration');

describe('Tests', () => {

    describe('hiringEmployee', () => {

        it('Should hire  !', () => {
            expect(companyAdministration.hiringEmployee('Goshkata', 'Programmer', 5)).to.equal(`Goshkata was successfully hired for the position Programmer.`);

        });
        it('Should not hire beause of not enough years of expirience !', () => {
            expect(companyAdministration.hiringEmployee('Goshkata', 'Programmer', 1)).to.equal(`Goshkata is not approved for this position.`);

        });
        it('Should work with 3 year of expirience !', () => {
            expect(companyAdministration.hiringEmployee('Goshkata', 'Programmer', 3)).to.equal(`Goshkata was successfully hired for the position Programmer.`);

        });
        it('Should throw an Error !', () => {
            expect(() => companyAdministration.hiringEmployee('Peshkata', 'Teacher', 10)).to.throw(`We are not looking for workers for this position.`);
            expect(() => companyAdministration.hiringEmployee('Peshkata', 'policeman', 3)).to.throw(`We are not looking for workers for this position.`);
           
            

        });

    });
    describe('calculateSalary', () => {
        it('all tests', () => {
            expect(() => companyAdministration.calculateSalary(-1)).to.throw("Invalid hours");
            expect(() => companyAdministration.calculateSalary('12')).to.throw("Invalid hours");
            expect(() => companyAdministration.calculateSalary({})).to.throw("Invalid hours");

            expect(companyAdministration.calculateSalary(100)).to.equal(1500);
            expect(companyAdministration.calculateSalary(200)).to.equal(4000);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);


        });
    });
    describe('firedEmployee', () => {
        it('all tests', () => {
            expect(() => companyAdministration.firedEmployee({}, 2)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(['Ivan'], 6)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(['Ivan', 'Peshkata', 'Goshkata'], -5)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(['Ivan', 'Peshkata', 'Goshkata'], '12')).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee({}, '12')).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee([], [])).to.throw("Invalid input");

            expect(companyAdministration.firedEmployee(['Ivan', 'Peshkata', 'Goshkata'], 1)).to.equal('Ivan, Goshkata');
            expect(companyAdministration.firedEmployee(['Ivan', 'Peshkata',], 1)).to.equal('Ivan');




        });
    });


});