import {
    expect
} from 'chai';

import isFunction from './../src/isFunction';

describe('isFunction()', () => {
    it('identifies when object is a function', () => {
        expect(isFunction(function () {})).to.equal(true, 'regular function');
        expect(isFunction(() => {})).to.equal(true, 'arrow function');
    });

    it('identifies when object is not a function', () => {
        expect(isFunction(null)).to.equal(false, 'null');
        expect(isFunction({})).to.equal(false, '{}');
    });
});
