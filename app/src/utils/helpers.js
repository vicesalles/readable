import * as moment from 'moment';

/**
 * Generates a unique number. 
 * Got it from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
export const guid=()=> {
    const s4=()=> Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);     
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
  }
  

/**
 * It takes miliseconds and returns a readeable Date string.
 * @param number tStamp 
 * @return string Redeable date
 */
export const toDate = (tStamp) =>{

    return('MOMENT',moment(tStamp).format("MMMM Do YYYY, h:mm:ss a"));

}