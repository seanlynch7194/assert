import AssertionFailedException from '../../Exceptions/AssertionFailedException';
import uniqueValues from './';

describe('uniqueValues', () => {
    it ('should return true if all values are unique', () => {
        expect(uniqueValues(['sean', 'paige', 'keira'])()).toBeTruthy();
    });

    it ('should return true if the array is empty', () => {
        expect(uniqueValues([])()).toBeTruthy();
    });

    it ('should throw an exception if there is a non unique value in the array', () => {
        expect(() => {
            uniqueValues(['sean', 'sean', 'paige', 'keira'])();
        }).toThrow(AssertionFailedException);
    });
});
