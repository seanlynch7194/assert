import AssertionFailedException from '../../Exceptions/AssertionFailedException';
import isIn from './';

describe('isIn', () => {
    it ('should return true if the array includes the target value', () => {
        expect(isIn('sean')(['sean', 'callum'])).toBeTruthy();
    });

    it ('should throw exception if value is not in the array', () => {
        expect(() => {
            expect(isIn('sean')(['Cat']))
        }).toThrowError(AssertionFailedException);
    });

    it ('should throw exception the array is empty', () => {
        expect(() => {
            expect(isIn('Jamie')([]));
        }).toThrowError(AssertionFailedException);
    });
});
