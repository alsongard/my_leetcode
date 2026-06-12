function getLengthUniqueSubstring(myString) {
    let mySet = new Set();
    let leftPointer = 0;
    let max = 0;
    for (let r = 0; r < myString.length; r++) {
        while(mySet.has(myString[r])) {
            // delete character
            mySet.delete(myString[leftPointer]);
            leftPointer++;
        }

        mySet.add(myString[r]);
        max = Math.max(max, r - leftPointer + 1)
    }


    return max;
}
console.log(getLengthUniqueSubstring("geeksforgeeks"));