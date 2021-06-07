
// Chiedere all’utente di inserire una parola. 

var parolaUtente = prompt('Inserisci una parola');
console.log(parolaUtente);  

var parolaDivisa = parolaUtente.split('');
console.log(parolaDivisa);

var parolaDivisa = parolaDivisa.reverse();
console.log(parolaDivisa);

var parolaInvertita = parolaDivisa.join('');
console.log(parolaInvertita);

// senza funzione si può fare così

// if(parolaUtente == parolaInvertita){
//     console.log('la parola è palindroma');
// } else {
//     console.log('la parola non è palindroma');
// }

// Creare una funzione per capire se la parola inserita è palindroma

var parolaInversa = invertiParola(parolaUtente); 

if(parolaUtente == parolaInversa){
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}
  
function invertiParola(str){
  var strInversa = str.split('').reverse().join('');  
  return strInversa;
}


