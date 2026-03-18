const Stack = function ()
{
    this.count = 0;
    this.storage = {};

    // push: adds item to stack:top of stack
    this.push = (value)=>{
        this.storage[this.count] = value;
        this.count++;
    }

    // pop: removes the top element in the stack: last inserted
    this.pop = ()=>{
        if (this.count == 0)
        {
            // nothing to remove
            return undefined
        }
        else
        {
            this.count--;
            const result = this.storage[this.count]
            delete this.storage[this.count]
            return result
        }
    }


    // peek: returns the current value
    this.peek = ()=>{
        if (this.count == 0)
        {
            return "empty stack"
        }
        return this.storage[this.count -1];
    }

    // size: returns the size of the stack
    this.size = ()=>{
        return this.count ;
    }

}

const myStack = new Stack();
console.log(myStack.size());
console.log(myStack.push("FreeCodeCamp"));
console.log(myStack.push("LeetCode"));
console.log(myStack.push("MoofiDevops"));