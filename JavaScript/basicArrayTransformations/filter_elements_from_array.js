/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++)
    {
        const value = fn(arr[i], i)
        // console.log(`value: ${value}`);
        if (value) // checks if true
        {
            newArray.push(arr[i]);
        }
    }

    return newArray;
};
