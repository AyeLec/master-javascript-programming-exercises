function transformFirstAndLast(array) {
  // your code here
  let primero = array[0];
  let ultimo = array[array.length - 1];

  let resultado = {};
  resultado[primero] = ultimo;

  return resultado;
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
