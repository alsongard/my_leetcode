/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let counter = 0;
    let result;

    console.log('fn');
    console.log(fn.toString());

    return function(...args){
        console.log(`args`);
        console.log(args);
        if (counter <= 0) {
            result = fn(...args);
            counter++;
            return result;
        } else {
            return undefined;
        } 

    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
