function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let short = Math.min(word1.length, word2.length, word3.length);
    if (word1.length === short) {
        return word1;
      } else if (word2.length === short) {
        return word2;
      } else {
        return word3;
      }
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
