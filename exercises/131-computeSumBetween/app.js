function computeSumBetween(num1, num2) {
    // your code here
    if (num1 > num2) return 0;

    let num = 0;

    for(let i = num1; i < num2; i++) num += i;

    return num;
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
