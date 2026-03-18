letters=[]

words="racecar"

rword=""

for(let i = 0; i < words.length; i++)
{
    console.log(`Index: ${i} | Value: ${words[i]}`);
    letters.push(words[i]);
}

for(let i = 0; i < words.length; i++)
{
    rword += letters.pop(i); // using the pop method removes and returns an item from an array
    console.log(`rword: ${rword}`)
}


