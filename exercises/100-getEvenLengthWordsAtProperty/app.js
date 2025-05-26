function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key].length === 0 || !Array.isArray(obj[key])){
      return []
    }

    let arr = obj[key]
    let newArr = []

    arr.forEach(e => {
      if (e.length % 2 === 0){
        newArr.push(e)
      }}
    )

    return newArr
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
