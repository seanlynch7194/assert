import AssertionFailedException from '../../Exceptions/AssertionFailedException';

/**
 * Assert that values in array are unique.
 * 
 * @param value 
 */
const uniqueValues = <T>(value: Array<T>) => (): boolean => {
    value.map((item, index, origin) => {
        if (origin.indexOf(item) !== index) {
            throw new AssertionFailedException(`Value "${origin[index]}" occurs more than once in array`);
        }
    });

    return true;
}

export default uniqueValues;
