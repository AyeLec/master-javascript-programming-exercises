function average(arr) {
  // your code here
  if (arr.length === 0) return 0; 
  return sum(arr) / arr.length;
}

function sum(arr) {
  // your code here
  return arr.reduce((n, e) => n + e, 0);
}

console.log(average([1, 2])); // --> 1.5
