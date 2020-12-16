import AssertionFailedException from '../../Exceptions/AssertionFailedException';

/**
 * Assert that string ends with a sequence of chars.
 * 
 * @param value 
 */
const endsWith = (value: string) => (needle: string): boolean => {
    if (!value.endsWith(needle)) {
        throw new AssertionFailedException(`"${value}" doesn't end with "${needle}"`);
    };

    return true;
}

export default endsWith;
