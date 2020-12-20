import AssertionFailedException from '../../Exceptions/AssertionFailedException';

/**
 * Determines if the value is greater or equal than given limit.
 * 
 * @param value 
 * @param limit
 */
const moreThanOrEqualTo = (value: number) => (limit: number) => {
    if (value < limit) {
        throw new AssertionFailedException(`Provided "${value}" is not greater or equal than "${limit}".`);
    }

    return true;
}


export default moreThanOrEqualTo;
