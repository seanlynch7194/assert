import AssertionFailedException from '../../Exceptions/AssertionFailedException';

/**
 * Assert that string length is between min and max lengths or that the value is null
 * 
 * @param value 
 * @param lowerLimit 
 * @param upperLimit 
 */
const between = (value: number | null) => (lowerLimit: number, upperLimit: number) => {
    if (!value) {
        return true;
    }

    const rejectWithValue = reject(value, lowerLimit, upperLimit);

    if (value < lowerLimit) {
        rejectWithValue(); 
    }

    if (value > upperLimit) {
        rejectWithValue();
    }

    return true;
}

const reject = (value: number, lowerLimit: number, upperLimit: number) => {
    return () => {
        throw new AssertionFailedException(`Provided "${value}" is outwith ${lowerLimit} and ${upperLimit}`);
    }
}

export default between;
