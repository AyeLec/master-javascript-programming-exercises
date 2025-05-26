function findShortestElement(arr) {
    // your code here
    if (arr.length === 0) return "";
  
    let masCorta = arr[0];
  
    for (let palabra of arr) {
      if (palabra.length < masCorta.length) {
        masCorta = palabra;
      }
    }
  
    return masCorta;
  }


let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'