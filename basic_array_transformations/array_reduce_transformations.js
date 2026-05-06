/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {

    console.log(`init @ Beginning: ${init}`);
    let val;
    if (nums.length == 0)
    {
        return init;
    }  
    for (let i = 0; i < nums.length; i++)
    {
        val = fn(init , nums[i]);
        // console.log(`This is val: ${val}`);
        init = val;
        // console.log(`this is init after reassignment: ${init}`);
    }
    return val;
};
