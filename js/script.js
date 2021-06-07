// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
var pariODispari = prompt('Scegli un numero pari o dispari');
console.log(pariODispari);

var numUtente = parseInt(prompt('Inserisci numero da 1 a 5'));
console.log(numUtente);


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
var numeroPc = radomNumber(1,5);

function radomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(numeroPc);


// Sommiamo i due numeri. 
var somma = numUtente + numeroPc;
console.log(somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 


function pariDispari(risultato){

    if (risultato % 2 == 0){
        return 'pari';
    } else {
        return 'dispari';
    }

} 

// Dichiariamo chi ha vinto.

var vincitore = pariDispari(somma);
console.log(vincitore);