import AssertionFailedException from '../../Exceptions/AssertionFailedException';

/**
 * Determines if the value is less than or equal to the given limit.
 *
 */
const lessThanOrEqualTo = (value: number) => (limit: number): boolean => {
    if (value <= limit) {
        return true;
    }

    throw new AssertionFailedException(`Provided "${value}" is not less than or equal to "${limit}".`);
}


export default lessThanOrEqualTo;
