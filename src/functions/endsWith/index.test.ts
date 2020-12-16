import AssertionFailedException from '../../Exceptions/AssertionFailedException';
import endsWith from './';

describe('endsWith', () => {
    it ('should return true if the value ends with the needle', () => {
        expect(endsWith('Sean Lynch')('Lynch')).toBeTruthy();
    });

    it ('should return true if the value starts and ends with the needle', () => {
        expect(endsWith('Socks')('Socks')).toBeTruthy();
    });

    it ('should throw an error if the value doesnt end with the needle', () => {
        expect(() => {
            endsWith('Too old, too fucking blind')('john daniels');
        }).toThrow(AssertionFailedException);

        expect(() => {
            endsWith('Too old, too fucking blind')('Too old');
        }).toThrow(AssertionFailedException);
    });
});
