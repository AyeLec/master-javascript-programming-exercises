function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if(!obj[key] || obj[key].length === 0 || !Array.isArray(obj[key])){
    return 0
  }

  let arr = obj[key]
  let suma = 0

  arr.forEach(e => {
    suma += e
  }
  )

  promedio = suma/arr.length
  return promedio

}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  