let obj = {
    firstName: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27
}

function countNumberOfKeys(obj) {
    // your code here
    let contador = 0;
    for (let key in obj){
        contador++;
    }

    return contador;
}

let output = countNumberOfKeys(obj);
console.log(output); // --> 6
