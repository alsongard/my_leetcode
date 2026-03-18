// Set has no duplicate values
// Values have no particular order

// pass an array to new Set() function
const letters  = new Set(["a", "b", "c"]);
console.log(letters); // Set(3) { 'a', 'b', 'c' }


// add variables to a set we use: setName.add('value')
letters.add("dd");


console.log(letters); // Set(4) { 'a', 'b', 'c', 'dd' }