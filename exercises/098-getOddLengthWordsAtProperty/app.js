// Write your function here
function getOddLengthWordsAtProperty (obj, key) {
    if (!obj[key] || obj[key].length === 0 || !Array.isArray(obj[key])){
        return []
    }

    let arr = obj[key]
    let newArr = []

    arr.forEach(element => {
        if (element.length % 2 != 0){
            newArr.push(element)
        }
    });

    return newArr
}

let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']