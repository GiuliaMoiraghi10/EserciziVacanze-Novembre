console.log('Esercizi vacanze')

// Dato un array di numeri interi, restituire un array con solo i numeri pari

// const array = [1, 3, 5, 2, 10, 6, 4, 9]

// const isEven = array.filter((num) => num % 2 === 0)
// console.log(isEven)

// Dato un array di numeri interi, creare una funzione che sia in grado di restituire un nuovo array 
// con solo i numeri pari o solo i numeri dispari (su richiesta dell'utente)

// Creare array di numeri
// const numbers = [1, 3, 5, 2, 10, 6, 4, 9]

// Chiedere all'utente se vuole vedere numeri pari o dispari
// const questionUser = prompt('Vuoi i numeri pari o dispari?')

// let pari = numbers.filter((numeriPari) => numeriPari % 2 === 0)
// let dispari = numbers.filter((numeriDispari) => numeriDispari % 2 === 1)

// function answerUser(questionUser) {

//     if (questionUser === 'Pari') {
//         console.log(`Questi sono i numeri pari: ${pari}`)
//     } else {
//         console.log(`Questi sono i numeri dispari: ${dispari}`)
//     }
// }


// Data una stringa, restituire la versione in alfabeto farfallino (le vocali 
// devono essere trasformate in questo modo: a -> afa, e -> efe, i -> ifi, o -> ofo, u- > ufu)

const nome = 'Giulia'

let nomeFarfallino = nome.replace('Giulia', 'Gifiufulifiafa')
console.log(nomeFarfallino)


// Dati un numero intero e un array di numeri interi, creare una funzione che sia in grado di 
// restituire un nuovo array contenente solo i numeri divisibili per il numero intero specificato

const numero = 5;
const array = [1, 3, 5, 2, 10, 6, 4, 9];


function filtraDivisibili(num, arr) {
    return arr.filter(element => element % num === 0);
}

const risultato = filtraDivisibili(numero, array);
console.log(risultato);

