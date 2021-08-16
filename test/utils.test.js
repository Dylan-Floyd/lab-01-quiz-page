import { countsAsAYes } from '../utils.js';

const test = QUnit.test;

test('countsAsAYes("yes") returns true', (expect) => {
    const expected = true;
    
    const actual = countsAsAYes('yes');

    expect.equal(actual, expected);
});

test('countsAsAYes("Yes") returns true', (expect) => {
    const expected = true;
    
    const actual = countsAsAYes('Yes');

    expect.equal(actual, expected);
});

test('countsAsAYes("no") returns false', (expect) => {
    const expected = false;
    
    const actual = countsAsAYes('no');

    expect.equal(actual, expected);
});

test('countsAsAYes("No") returns false', (expect) => {
    const expected = false;
    
    const actual = countsAsAYes('No');

    expect.equal(actual, expected);
});

test('countsAsAYes("asdf") returns false', (expect) => {
    const expected = false;
    
    const actual = countsAsAYes('asdf');

    expect.equal(actual, expected);
});