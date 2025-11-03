//logica pura
const numeros = [10, 23, 56, 2, 13];

let maiorNumero = 0;

for (let i = 0; i < numeros.length; i++) {
    if(maiorNumero < numeros[i]) {
        maiorNumero = numeros[i]
    }
}

console.log(maiorNumero)

//metodo nativo

// console.log(Math.max(...numeros))