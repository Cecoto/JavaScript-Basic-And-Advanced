let expect = require('chai').expect;
function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
describe('testing chars in a string', () => {
    it('first parameter will not be a string', () => {
        expect(lookupChar([],2)).to.equal(undefined);
     });

    it('second parameter will not be a number', () => { 
        expect(lookupChar('asd',{})).to.equal(undefined);

    });
    it('second parameter will not be a  valid number', () => { 
        expect(lookupChar('asd',0.656757)).to.equal(undefined);

    });

    it('both params are valid but the index is out of range', () => { 
        expect(lookupChar('string',10)).to.equal('Incorrect index');
    });

    it('both params are valid but the index is negative', () => { 
        expect(lookupChar('string',-5)).to.equal('Incorrect index');
    });
   
    it('when both params are correct should return the char on that index', () => {
        expect(lookupChar('string',2)).to.equal('r');
    
     });

});
