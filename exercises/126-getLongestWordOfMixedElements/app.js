function getLongestWordOfMixedElements(arr) {
    // your code here
    if (arr.length === 0) return ""

    let soloStrings = arr.filter(e => typeof e === "string");

    if (soloStrings.length === 0) return "";
 
    let masLarga = soloStrings[0];

    for (let palabra of soloStrings) {
    if (palabra.length > masLarga.length) {
      masLarga = palabra;
    }
  }

  return masLarga;
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
