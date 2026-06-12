function mergeOverLap(arr) {
    let n = arr.length;
    let res = [];  

    arr.sort((a,b) => {
        // console.log(`a: ${a}`);
        // console.log(`b: ${b}`);
        return a[0] - b[0]; // in this it combines Timesort  and then  uses binary search for the rest of the values
    }); // using the sort( ) with a comparison expression: a - b: ascending ordern : updates the given array


    for (let i = 0; i < n; i++) { //n is length
        let start = arr[i][0]; //get always the first value in sub-array
        let end = arr[i][1]; // get the second value in sub-array
    
        if (res.length > 0 && res[res.length - 1][0] >= end) {
            continue;
        }

        for (let j = i + 1; j < n; j++) { // this functionality checks for overlapping by comparing arr[j][0]:Start value and arr[i][1]: end value 
            // they do overlap when end value is greater that the start valuem
            if (arr[j][0] <= end) {
                end = Math.max(end, arr[j][1]);
            }
        }
        // if only the start values of arr[j] is lesss than  arr[i][1]:end get the max[]

        res.push([start, end]);
    }
    return res;
}



const arr = [[7, 8], [1, 5], [2, 4], [4, 6]];


mergeOverLap(arr);
/*
[ [ 7, 8 ], [ 1, 5 ], [ 2, 4 ], [ 4, 6 ] ]
a: 1,5
b: 7,8 // after the comparison arr: [1,5], [7,8], [2,4], [4,6]]
a: 2,4 // binary search l0
b: 1,5
a: 2,4 // binary search l1 h1
b: 7,8
a: 2,4
b: 1,5
a: 4,6
b: 2,4
a: 4,6
b: 7,8
After sorting:
[ [ 1, 5 ], [ 2, 4 ], [ 4, 6 ], [ 7, 8 ] ]



in the for loop we have:
i = 0; 
start = arr[i][0]; // 1
end = arr[i][1]; // 5
    res.length == 0 



    inner for loop
    j = 1 ; i + 1 ;  j < n = true; execute block
        arr[j][0] <= end : 2 <= 5 : true execute block
            end = Math.max(5,4) : end = 5;

        if index 0  of the next  array is less than index 1 of first array(previous) then:
            get max(previousArray index 1, nextArray index 1)


res.push([start, end]) //PUSH: [[1,5]] 


i = 1;
start = arr[i][0] // 2
end = arr[i][1] // 4

res.length > 0 :  1 > 0
    res[res.length - 1][0] >= end  1 >= 4 : false
    exit if



*/