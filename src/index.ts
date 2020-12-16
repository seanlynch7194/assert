import between from './functions/between';
import contains from './functions/contains';
import eq from './functions/eq';
import greaterOrEqualThan from './functions/greaterOrEqualThan';
import isIn from './functions/isIn';
import endsWith from './functions/endsWith';
import startsWith from './functions/startsWith';

const Assert = (value: any) => {

    return {
        between: between(value),
        contains: contains(value),
        eq: eq(value),
        greaterOrEqualThan: greaterOrEqualThan(value),
        isIn: isIn(value),
        endsWith: endsWith(value),
        startsWith: startsWith(value),
    }
}

export default Assert;
