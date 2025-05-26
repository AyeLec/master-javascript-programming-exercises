// Write your function here
function keep (arr, keeper) {
    return arr.filter(elemento => elemento === keeper);
}

let output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]