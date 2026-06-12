function memoize(fn) {
    let callCount = 0;
    let cache = new Map()
    
    let givenFn = fn;
    return function(...args) {
        console.log('this is args');
        console.log(args);
        console.log(`typeOf(args) : ${typeof(args)}`)
        console.log(`Check if args is an array: ${Array.isArray(args)}`);


        // WHAT DOES json.Stringify() do
        const key = JSON.stringify(args);
        console.log("key");
        console.log(key);
    }
}

function sum(a, b) {
    return a + b;
}


console.log("---------------------------------")
console.log("---------------------------------")

const memFn = memoize(sum) // 5
memFn(2,2);




console.log("---------------------------------")
console.log("---------------------------------")


memFn(2,2);