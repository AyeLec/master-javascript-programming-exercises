function getAllKeys(obj) {
  // your code here
  let claves = [];

  for (let key in obj) {
    claves.push(key);
  }

  return claves;
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
