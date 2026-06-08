/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let callCount = 0;
    let cache = new Map();

    return function(...args) {   
        //...args is a Rest parameter and it will be in an array : [2, 3] but inthe funciton call it will be memFn(1,2)

        console.log(`input given`);
        console.log(args);

        for(const itemInArg of args) {
            console.log(`this is itemInArg ${itemInArg}`);
        }

        const key = JSON.stringify(args); 
        console.log('this is key: key is string from JSON.stringify(args)');
        console.log(key);


        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        console.log('when cache has no key');
        console.log(cache);
        callCount++;

        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

function sum (a, b) {
    console.log('in sum:')
    console.log('a');
    console.log(a)

    console.log('b');
    console.log(b);

    // console.log(`a: ${a} + b : ${b} = ${a + b} `)
    return a + b;
}


const memFn = memoize(sum);
let result = memFn(2,2);


console.log(`Result`);
console.log(result);

result = memFn(2,2);
console.log(`Result`);
console.log(result);


result = memFn(1,2);
console.log(`Result`);
console.log(result);