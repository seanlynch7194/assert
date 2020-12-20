import AssertionFailedException from '../../Exceptions/AssertionFailedException';
import lessThan from './';

describe('lessThan', () => {
    it ('should return true if the value is less than the limit', () => {
        expect(lessThan(5)(10)).toBeTruthy();
        expect(lessThan(10)(20)).toBeTruthy();
        expect(lessThan(0)(1)).toBeTruthy();
        expect(lessThan(-10)(-5)).toBeTruthy();
    });

    it ('should throw an error if the value is more than the limit', () => {
        expect(() => {
            lessThan(10)(5);
        }).toThrow(AssertionFailedException);

        expect(() => {
            lessThan(1)(0);
        }).toThrow(AssertionFailedException);
    });
});
