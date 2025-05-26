// Write your function here
function countAllCharacters(str) {
    if (str.length === 0){
        return {}
    }
    
    let contador = {};
  
    for (let i = 0; i < str.length; i++) {
      let letra = str[i];
  
      if (contador[letra]) {
        contador[letra]++;
      } else {
        contador[letra] = 1;
      }
    }
  
    return contador;
  }

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}