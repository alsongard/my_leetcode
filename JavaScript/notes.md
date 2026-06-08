# 1. Closures
A closure is a special environment in which after the parent function finishes executing, because one or more of it's variable are being accessed by another function within it, this variable is set in a special environment called closure. 

```js

const createCounter = function(x) {
    return function() {
        return x++;
    }
}

const counter  = createCounter(10);
console.log(counter()); //11
console.log(counter()); // 12
console.log(counter());  // 13
```




# 2. function Transformation

1. **Function Composition**  
function composition is a functional programming feature that enables the combination of multiple functions into a single function. 
The functions are evaluated from right to left, with the first function output being used as the input for the second function. 

Syntax:
```js
const applyOperations = compose(function1, function2, function3);
const result = applyOperation(someValue);
```



**Implicit return on arrow functions**
Arrow functions can implicitly return some  value without setting the return statement.
The below arrow functoins are said to have a concise body. 
```js
const sum = () => a + b;
const multiply = (a, b)=> a * b;
const person = (name, age)=> ({
    name: name,
    age: age
}) // when using an object set it within the paranthesis to avoid confusion
```

However when a callback function has curly braces: ``{}`` one must set the return statement(explicitly) otherwise no return value is returned. 
```js
const sum = (a, b) => {return a + b;}
const multiply = () => {
    return 6 * 5;
}

const divide = (a, c) => {
    return a / c;
}
```


in function_composition 
```js
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) { 
    return function (x) {
        if (functions.length == 0) {
            return x; // this function returns x
        } else {
            const arrayLength = functions.length;
            let result = x;
            // loop through each function
            for(let i = arrayLength - 1; i >= 0; i--) {
                result = functions[i](result);
            }
            return result;
        }
    }
};

const applyOperations = compose([ x => x + 1, x => x * x, x => x+2])
console.log(applyOperations(10));
```



**2.Rest Parameters**
[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent  variadic functions in JavaScript.
```js
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    // the following is using RestArguments which has the following rules:
    // rest argument should be last
    // should be followed by 3 dots
    // the rest parameter allows a function to access an indefinite number of arguments
    // there are no restriction on the number: can be finite
    return args.length;

};
```

Rules: 
- rest argument should be last
- should be followed by 3 dots


**Allow Once Function Call**
```js
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let counter = 0;
    let result;

    console.log('fn');
    console.log(fn.toString());

    return function(...args){
        console.log(`args`);
        console.log(args);
        if (counter == 0) {
            result = fn(...args);
            counter++;
            return result;
        } else {
            return undefined;
        } 

    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

```
In the above we have the following:
- ``once`` : this is a higher order function which takes a function as an argument and returns a function
- when we execute once:
    ```js
    const sum = (a, b, c) => a + b + c; 
    
    let onceFn = once(sum);
    ```
The following is executed:
> - ``sum`` is passed to ``fn``  

>   - ``counter`` and ``result`` are initialized with counter being ``0`` and result ``undefined``.  

> - finally we have the returned function: ``return function(..args)``. args are Rest parameters.

This is then assigned to onceFn.
Now from the above we know onceFn is the returned function , we execute it: ``onceFn(1, 2, 3);``
Within onceFn() we have:


> - ``if`` statement  
access to variables counter, result and fn:``sum`` all which are stored in a closure environment.   
if counter is equal to zero execute block otherwise return ``undefined``.  
In the execute block we have:  
``fn(..args)``: remember ``onceFn`` is the returned function and we passed arguments : 1, 2, 3  
fn is sum with : 1,2, 3 arguments: ``(a, b, c) => a + b + c`` ; // implicit return   
the result of sum is assigned to result variable: 3  
counter is incremented  
return result; // 3

if we have another call on ``onceFn(2, 3, 4)``; this will result in undefined as we have counter set to 1



## Memorized function
Memorized is a technique in programming that aids in reducing expensive operations. How? When a function call /operation is expensive the result is stored together with it's input. When the same function/operation is called with the same inputs instead of running the operation/function we take the results only. 

**JSON.stringify**  
The JSON.stringify() static method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
```js
> console.log(JSON.stringify({x: 5, y:6}));
{"x":5,"y":6}
```


**Maps**