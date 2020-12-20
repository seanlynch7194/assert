import AssertionFailedException from '../../Exceptions/AssertionFailedException';
import moreThanOrEqualTo from './';

describe('moreThanOrEqualTo', () => {
    it ('should pass if value is greater than the limit', () => {
        expect(moreThanOrEqualTo(10)(5)).toBeTruthy();
    });

    it ('should pass if value is equal to the limit', () => {
        expect(moreThanOrEqualTo(10)(10)).toBeTruthy();
    });

    it ('should throw exception if value is less than the limit', () => {
        expect(() => {
            expect(moreThanOrEqualTo(5)(10))
        }).toThrowError(AssertionFailedException);
    });
});
