import AssertionFailedException from '../../Exceptions/AssertionFailedException';

/**
 * Assert that string begins with a sequence of chars.
 * 
 * @param value 
 */
const startsWith = (value: string) => (needle: string): boolean => {
    if (!value.startsWith(needle)) {
        throw new AssertionFailedException(`"${value}" doesn't start with "${needle}"`);
    };

    return true;
}

export default startsWith;
