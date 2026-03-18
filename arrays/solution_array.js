/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sum = 0;
    let result = [];
    let myNewMap = new Map();

   for (let i = 0; i < nums.length; i++)
   {
        const complement = target - nums[i];
        if (myNewMap.has(complement)) // this methods returns Boolean: true key exist || false value key not exist  
        {
            console.log(`i:${i} , key: ${myNewMap.get(complement)}`)
            return [myNewMap.get(complement), i]
        }
        myNewMap.set(nums[i], i); // using value for the index on map to support has() check
   }
    // for (const item of nums)
    // {
    //     const complement = target - nums[item];
    //     if (myNewMap.has(complement)) // this methods returns Boolean: true key exist || false value key not exist  
    //     {
    //         console.log(`${item} , ${myNewMap.get(complement)}`)
    //         return [item, myNewMap.get(complement)]
    //     }
    // }

};