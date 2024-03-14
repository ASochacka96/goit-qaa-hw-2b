// checkAge.test.js
const isAdult = require('../checkAge');

describe('Sprawdza, czy osoba o wieku: ', () => {
    it('20 lat jest pełnoletnia', () => {
        expect(isAdult(20)).toBe(true);
    });

    it('16 lat jest pełnoletnia', () => {
        expect(isAdult(16)).toBe(false);
    });

    it('18 lat jest pełnoletnia', () => {
        expect(isAdult(18)).toBe(true);
    });
});