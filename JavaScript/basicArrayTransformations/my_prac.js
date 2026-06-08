var filter = function (arr, fn) 
{
	let filteredArr = [];

	for (let i = 0; i < arr.length; i++) 
	{
		if (fn(arr[i], i)=== true) 
		{
        		filteredArr.push(arr[i])
    		}	
	}
	return filteredArr;
};
function greaterThan10(n) { return n > 10; }

const myArray=[12, 13, 2, 5, 8, 7]

console.log(filter(myArray, greaterThan10));
