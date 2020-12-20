import between from './functions/between';
import contains from './functions/contains';
import eq from './functions/eq';
import moreThanOrEqualTo from './functions/moreThanOrEqualTo';
import isIn from './functions/isIn';
import endsWith from './functions/endsWith';
import startsWith from './functions/startsWith';
import lessThan from './functions/lessThan';

const Assert = (value: any) => {

    return {
        between: between(value),
        contains: contains(value),
        eq: eq(value),
        moreThanOrEqualTo: moreThanOrEqualTo(value),
        isIn: isIn(value),
        endsWith: endsWith(value),
        startsWith: startsWith(value),
        lessThan: lessThan(value),
    }
}

export default Assert;
