function getLengthOfLongestElement(arr) {
    // Your code here
    if (arr.length === 0){
        return 0
    }

    return Math.max(...arr.map(e => e.length));
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
