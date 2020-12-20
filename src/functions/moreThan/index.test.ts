import AssertionFailedException from '../../Exceptions/AssertionFailedException';
import moreThan from './';

describe('moreThan', () => {
    it ('should return true if the value is less than the limit', () => {
        expect(moreThan(10)(5)).toBeTruthy();
        expect(moreThan(20)(10)).toBeTruthy();
        expect(moreThan(1)(0)).toBeTruthy();
        expect(moreThan(-5)(-10)).toBeTruthy();
    });

    it ('should throw an error if the value is more than the limit', () => {
        expect(() => {
            moreThan(6)(12);
        }).toThrow(AssertionFailedException);

        expect(() => {
            moreThan(0)(1);
        }).toThrow(AssertionFailedException);
    });
});
