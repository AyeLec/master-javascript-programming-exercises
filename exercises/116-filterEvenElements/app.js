function filterEvenElements(arr) {
    // your code here
    if (arr.length === 0){
        return []
    }

    return arr.filter(e => e % 2 === 0)
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
