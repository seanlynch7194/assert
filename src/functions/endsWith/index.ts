import AssertionFailedException from '../../Exceptions/AssertionFailedException';

const endsWith = (value: string) => (needle: string): boolean => {
    if (!value.endsWith(needle)) {
        throw new AssertionFailedException(`"${value}" doesn't end with "${needle}"`);
    };

    return true;
}

export default endsWith;
