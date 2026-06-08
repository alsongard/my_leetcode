/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let prevValue = 0;
    let initialValue = 0;
    let sum = 0;
    let  result = [];
    for (let i = 0; i < nums.length; i++)
    {
        if (i != 0)
        {
            prevValue = nums[i - 1]
        }
        sum = nums[i] + prevValue
        if (sum == target)
        {
            initialValue = nums[i]
            console.log(`Value for sum: ${target} is: ${prevValue} + ${initialValue}`);
            result.push(nums.indexOf(prevValue))
            result.push(nums.indexOf(initialValue))

        }
    }
    return result;
};