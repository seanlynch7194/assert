import AssertionFailedException from '../../Exceptions/AssertionFailedException';

/**
 * Determines if the value is less than given limit.
 * 
 */
const lessThan = (value: number) => (limit: number) => {
    if (value < limit) {
        return true;
    }

    throw new AssertionFailedException(`Provided "${value}" is not less than "${limit}".`);
}


export default lessThan;
