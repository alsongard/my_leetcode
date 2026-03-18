function MyCustomSet()
{
    const collection = []; // using a custom set
    
    // has() value: check if value exists
    this.check = (value)=>{
        // console.log(`Index of: ${collection.indexOf(value)}`)
        if (collection.indexOf(value) === -1) // indexOf returns : -1 == undefined if value does not exist
        {
            console.log( `Value ${value} does not exists`);
            return false;
        }
        else 
        {
            console.log(`Value: ${value} exists!`);
            return true;
        }
    }

    // returns the values of the entire set
    this.getValues = ()=>{
        return collection;
    }

    // remove item from set
    this.remove = (value)=>{
        //splice(index, number_of_items_2_remove)
        // get index first
        if (this.check(value))
        {
            const index = collection.indexOf(value);
            const removedItem = this.collection.splice(index, 1) ;
            return removedItem;
        }
        console.log(`Value: ${value} does not exist`);
        return  false;
    }


    // return size of set
    this.size = ()=>{
        return collection.length;
    }


    // add item to set: check if value exist if exist return (exit) otherwise add
    this.add = (value)=>{
        if (this.check(value)) // this.check(value) returns true if exist and false if not exist
        {
            console.log(`Value ${value} already exists`);
            return false;
        }
        else
        {
            collection.push(value);
            return true;
        }
    }

    // combine 2 sets and return the union
    // remember when using .add() in set if value exist it's not added
    this.union = (otherSet)=>{
        const unionSet = new MyCustomSet();
        const firstSet = this.getValues();
        const secondSet = otherSet.getValues()

        firstSet.forEach((item)=>{
            unionSet.add(item); // add to unionSet
        })
        secondSet.forEach((item)=>{
            unionSet.add(item)
        })

        return unionSet; 
        
    }
    // intersection : check which values occur in both sets: currentSet: this.getValues and otherSet
    this.intersection = (otherSet)=>{
        const secondSet = otherSet.getValues();
        const currentSet = this.getValues();
        const intersectionSet = new MyCustomSet();

        secondSet.forEach((value)=>{
            if (currentSet.check(value)) // if exists in currentSet
            {
                intersectionSet.add(value);
            }
        })

        return intersectionSet;
    }

    // returns the difference between 2 sets
    this.difference = (otherSet)=>{
        const currentSetValues = this.getValues();
        const differenceSet = new MyCustomSet();
        currentSetValues.forEach((value)=>{
            if (!otherSet.check(value))
            {
                differenceSet.add(value)
            }
        })
        return differenceSet;
    }

    // subset checks if otherSet is subsect of currentSet: all values in otherSet exist in currentSet
    // we use every() which check for each value in otherSet exists in currectSet
    this.subset = (otherSet)=>{
        return this.getValues().every((value)=>{
            return otherSet.check(value)
        })
    }
}



const mySet = new MyCustomSet();
const testingSet = new MyCustomSet();
console.log(mySet.size());
console.log(testingSet.add("a"));
console.log(testingSet.add("b"));
console.log(testingSet.add("c"));

mySet.add("a");
mySet.add("b");
console.log(`mySet size: ${mySet.size()} || mySet values: ${mySet.getValues()} `)

console.log(`Is mySet subset of TestingSet: ${mySet.subset(testingSet)}`);