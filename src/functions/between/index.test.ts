import AssertionFailedException from '../../Exceptions/AssertionFailedException';
import between from './';

describe('between', () => {
    it ('should pass if value is between min and max', () => {
        expect(between(5, 1, 10)).toBeTruthy();
    });

    it ('should throw exception if value is outwith min', () => {
        expect(() => {
            between(1, 5, 10);
        }).toThrowError(AssertionFailedException);
    });

    it ('should throw exception if value is outwith max', () => {
        expect(() => {
            between(11, 5, 10);
        }).toThrowError(AssertionFailedException);
    });

    it ('should pass if the value is null', () => {
        expect(between(null, 1, 3)).toBeTruthy();
    })
});
