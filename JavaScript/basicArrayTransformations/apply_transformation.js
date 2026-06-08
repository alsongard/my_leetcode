/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let myArray = [];
    for (let i = 0; i < arr.length; i++)
    {
        const theValue = fn(arr[i], i);
        myArray.push(theValue);
    }
    return myArray;
};
