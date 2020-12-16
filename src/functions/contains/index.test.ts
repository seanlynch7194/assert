import AssertionFailedException from '../../Exceptions/AssertionFailedException';
import contains from './';

describe('contains', () => {
    it ('should pass if value contains the needle at the end', () => {
        expect(contains('hello world')('world')).toBeTruthy();
    });

    it ('should pass if value contains the needle at the start', () => {
        expect(contains('hello world')('hello')).toBeTruthy();
    });

    it ('should pass if value contains the needle in the middle', () => {
        expect(contains('hello world')('lo w')).toBeTruthy();
    });

    it ('should throw exception if value does not contain the needle', () => {
        expect(() => {
            contains(`Frankly, my dear, I don't give a damn.`)('Gone With the Wind');
        }).toThrowError(AssertionFailedException);
    });
});
