function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);  // arr.length = 7 : 7 - 1 = 6 : high  0 + 6 = 6 / 2 = 3  target : 8
        // mid : index 3 whith  value 7 
        // target : 8 
        if (arr[mid] === target) { // this fails with target 8
            return mid; // Found
        } else if (arr[mid] < target) { // 7 < 8 true
            low = mid + 1; // Search right half  ; // changg low to mid + 1 ; 3 + 1 = 4 : return to condition  4 < 6 true  : get mid=  4 + 6 = 10 / 2 = 5 
            // arr[5] = 9 target = 8 9 < 8 : false go  to else
        } else {
            high = mid - 1; // Search left half ; // does run   high = mid - 1 : 5 - 1 = 4  high=4 ;  5 <= 4 / false
        }
    }
    
    return -1; // Not found ; value 8: target not found
}

// Example
const numbers = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(numbers, 7)); // Output: 3
console.log(binarySearch(numbers, 6)); // Output: -1   