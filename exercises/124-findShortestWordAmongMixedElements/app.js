function findShortestWordAmongMixedElements(arr) {
    // your code here
    if (arr.length === 0) return ""

    let soloStrings = arr.filter(e => typeof e === "string");

    if (soloStrings.length === 0) return "";
 
    let masCorta = soloStrings[0];

    for (let palabra of soloStrings) {
    if (palabra.length < masCorta.length) {
      masCorta = palabra;
    }
  }

  return masCorta;
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
