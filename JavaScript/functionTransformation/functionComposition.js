/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function (x) {
        if (functions.length == 0) {
            return x; // this function returns x
        } else {
            const arrayLength = functions.length;
            let result = x;
            // loop through each function
            for(let i = arrayLength - 1; i >= 0; i--) {
                result = functions[i](result);
            }
            return result;
        }
    }
};


const applyOperations = compose([ x => x + 1, x => x * x, x => x+2])
console.log(applyOperations(10));