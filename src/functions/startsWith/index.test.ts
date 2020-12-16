import AssertionFailedException from '../../Exceptions/AssertionFailedException';
import startsWith from './';

describe('startsWith', () => {
    it ('should return true if the value starts with the needle', () => {
        expect(startsWith('Sean Lynch')('Sean')).toBeTruthy();
    });

    it ('should return true if the value starts and ends with the needle', () => {
        expect(startsWith('Socks')('Socks')).toBeTruthy();
    });

    it ('should throw an error if the value doesnt start with the needle', () => {
        expect(() => {
            startsWith('Too old, too fucking blind')('John daniels');
        }).toThrow(AssertionFailedException);

        expect(() => {
            startsWith('Too old, too fucking blind')('blind');
        }).toThrow(AssertionFailedException);
    });
});
