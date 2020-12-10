import AssertionFailedException from '../../Exceptions/AssertionFailedException';

/**
 * Assert that string contains a sequence of chars.
 * 
 * @param value 
 * @param needle
 */
const contains = (value: string, needle: string) => {
    if (!value.includes(needle)) {
        throw new AssertionFailedException(`Provided "${value}" does not contain "${needle}"`);
    }

    return true;
}


export default contains;
