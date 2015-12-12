import {
    expect
} from 'chai';

import isArrowFunction from './../src/isArrowFunction';

describe('isArrowFunction()', () => {
    it('identifies when object is an arrow function', () => {
        expect(isArrowFunction(() => {})).to.equal(true);
    });

    it('identifies when object is not an arrow function', () => {
        expect(isArrowFunction(function () {})).to.equal(false);
    });
});
