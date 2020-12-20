import AssertionFailedException from '../../Exceptions/AssertionFailedException';

/**
 * Determines if the value is more than given limit.
 * 
 */
const moreThan = (value: number) => (limit: number) => {
    if (value > limit) {
        return true;
    }

    throw new AssertionFailedException(`Provided "${value}" is not more than "${limit}".`);
}


export default moreThan;
