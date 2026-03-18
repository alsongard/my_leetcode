let myMap = new Map()

myMap.set(0, 1)
myMap.set(1, 2)
myMap.set(2, 3)
myMap.set(3, 4)

// console.log(myMap)

let myNewMap = new Map();
let result = []
let sum = 0
const getIndexForSum = (nums, target)=>
{
    for (let i = 0; i < nums.length; i++)
    {
        myNewMap.set(i, nums[i]);
    }
    console.log('myNewMap');
    console.log(myNewMap);
    myNewMap.forEach((value, key)=>{
        console.log(`key: ${key} \n ${value}`);
        for (const item in nums)
        {
            sum = value + item
            if (sum == target)
            {
                result.push(key)
            }
        }
    });
    return result;
}
getIndexForSum([10, 11, 12, 1], 9)