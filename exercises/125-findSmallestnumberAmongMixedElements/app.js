function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if (arr.length === 0) return 0

    let soloNumber = arr.filter(e => typeof e === "number");

    if (soloNumber.length === 0) return 0;
 
    let masChico = soloNumber[0];

    for (let numero of soloNumber) {
    if (numero < numero) {
      masChico = palabra;
    }
  }

  return masChico;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
