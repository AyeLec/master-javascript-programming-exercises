function getLongestElement(arr) {
    if (arr.length === 0) return "";
  
    let masLarga = "";
  
    for (let palabra of arr) {
      if (palabra.length > masLarga.length) {
        masLarga = palabra;
      }
    }
  
    return masLarga;
  }

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
