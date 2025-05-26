function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key].length === 0 || !Array.isArray(obj[key])){
      return []
    }

    let arr = obj[key]
    let newArr = arr.map(e => e * e);

    return newArr
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
