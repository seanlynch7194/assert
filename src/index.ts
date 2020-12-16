import between from './functions/between';
import contains from './functions/contains';
import eq from './functions/eq';
import greaterOrEqualThan from './functions/greaterOrEqualThan';

const Assert = (value: any) => {

    return {
        between: between(value),
        contains: contains(value),
        eq: eq(value),
        greaterOrEqualThan,
    }
}

export default Assert;
