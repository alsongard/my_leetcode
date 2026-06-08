/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    // the following is using RestArguments which has the following rules:
    // rest argument should be last
    // should be followed by 3 dots
    // the rest parameter allows a function to access an indefinite number of arguments
    // there are no restriction on the number: can be finite
    return args.length;

};