import between from './functions/between';
import contains from './functions/contains';
import eq from './functions/eq';
import moreThanOrEqualTo from './functions/moreThanOrEqualTo';
import lessThanOrEqualTo from './functions/lessThanOrEqualTo';
import isIn from './functions/isIn';
import endsWith from './functions/endsWith';
import startsWith from './functions/startsWith';
import lessThan from './functions/lessThan';
import uniqueValues from './functions/uniqueValues';
import moreThan from './functions/moreThan';

const Assert = (value: any) => {

    return {
        between: between(value),
        contains: contains(value),
        eq: eq(value),
        moreThanOrEqualTo: moreThanOrEqualTo(value),
        lessThanOrEqualTo: lessThanOrEqualTo(value),
        isIn: isIn(value),
        endsWith: endsWith(value),
        startsWith: startsWith(value),
        lessThan: lessThan(value),
        uniqueValues: uniqueValues(value),
        moreThan: moreThan(value),
    }
}

export default Assert;
