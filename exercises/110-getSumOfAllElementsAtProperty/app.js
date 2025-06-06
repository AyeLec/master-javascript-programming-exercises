function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key].length === 0 || !Array.isArray(obj[key])){
        return 0
    }
    
    return obj[key].reduce((acum, e) => acum + e, 0);
    
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
