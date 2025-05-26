function listAllValues(obj) {
  // your code here
  let valores = [];

  for (let key in obj) {
    valores.push(obj[key]); 
  }

  return valores;
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
