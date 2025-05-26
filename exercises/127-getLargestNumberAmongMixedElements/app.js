function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if (arr.length === 0) return 0

    let soloNumber = arr.filter(e => typeof e === "number");

    if (soloNumber.length === 0) return 0;
 
    let masGrande = soloNumber[0];

    for (let numero of soloNumber) {
    if (numero > masGrande) {
      masGrande = numero;
    }
  }

  return masGrande;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
