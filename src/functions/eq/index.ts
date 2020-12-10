import AssertionFailedException from '../../Exceptions/AssertionFailedException';

/**
 * Assert that two values are equal.
 * 
 * @param value 
 * @param value2
 */
const eq = (value: string, value2: string) => {
    if (value !== value2) {
        throw new AssertionFailedException(`Provided "${value}" does not equal expected value "${value2}"`);
    }

    return true;
}


export default eq;
