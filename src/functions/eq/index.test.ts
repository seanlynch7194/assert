import AssertionFailedException from '../../Exceptions/AssertionFailedException';
import eq from './';

describe('eq', () => {
    it ('should pass if values are equal', () => {
        expect(eq('thing')('thing')).toBeTruthy();
        expect(eq('ding')('ding')).toBeTruthy();
    });

    it ('should throw exception if values are not equal', () => {
        expect(() => {
            eq('ding')('dong');
        }).toThrowError(AssertionFailedException);
    });
});
