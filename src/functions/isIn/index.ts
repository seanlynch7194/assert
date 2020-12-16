import AssertionFailedException from '../../Exceptions/AssertionFailedException';

/**
 * Assert that value is in array.
 * 
 * @param value 
 */
const isIn = <T>(value: T) => (source: Array<T>): boolean => {
    if (!source.includes(value)) {
        throw new AssertionFailedException(`${value} is not in array`);
    }

    return true;
}

export default isIn;
