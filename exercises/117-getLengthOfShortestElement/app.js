function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length === 0){
        return 0
    }

    return Math.min(...arr.map(e => e.length));
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
