import AssertionFailedException from '../../Exceptions/AssertionFailedException';
import greaterOrEqualThan from './';

describe('greaterOrEqualThan', () => {
    it ('should pass if value is greater than the limit', () => {
        expect(greaterOrEqualThan(10)(5)).toBeTruthy();
    });

    it ('should pass if value is equal to the limit', () => {
        expect(greaterOrEqualThan(10)(10)).toBeTruthy();
    });

    it ('should throw exception if value is less than the limit', () => {
        expect(() => {
            expect(greaterOrEqualThan(5)(10))
        }).toThrowError(AssertionFailedException);
    });
});
