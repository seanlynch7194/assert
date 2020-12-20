import AssertionFailedException from '../../Exceptions/AssertionFailedException';
import lessThanOrEqualTo from './';

describe('lessThanOrEqualTo', () => {
    it ('should pass if value is less than the limit', () => {
        expect(lessThanOrEqualTo(5)(10)).toBeTruthy();
    });

    it ('should pass if value is equal to the limit', () => {
        expect(lessThanOrEqualTo(10)(10)).toBeTruthy();
    });

    it ('should throw exception if value is more than the limit', () => {
        expect(() => {
            expect(lessThanOrEqualTo(10)(5))
        }).toThrowError(AssertionFailedException);
    });
});
