import * as moment from 'moment';
import * as _ from 'lodash';

/**
 * Generates a unique number. 
 * Got it from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
export const guid = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
}


/**
 * It takes miliseconds and returns a readeable Date string.
 * @param number tStamp 
 * @return string Redeable date
 */
export const toDate = (tStamp) => {

    return ('MOMENT', moment(tStamp).format("MMMM Do YYYY, h:mm:ss a"));

}

/**
 * 
 * @param array array Target Array
 * @param string filter Value to sort by
 * @param string direction ASC/DESC
 * @param int n Number of items to return. Default: 0 (that means all of them)
 */
export const filter = (array, filter, direction, n = 0) => {

    let d = direction === 'up' ? 'asc' : 'desc';
    let result = _.orderBy(array, [filter], d);

    if (n === 0) {

        return result;

    } else {

        return result.filter((el, i) => i+1 <= n)

    }

}