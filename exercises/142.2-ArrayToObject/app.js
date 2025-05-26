function fromListToObject(array) {
  // your code here
  let resultado = {}
  
  array.forEach(par => {
    let clave = par[0];   
    let valor = par[1];   
    resultado[clave] = valor; 
  });

  return resultado;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
