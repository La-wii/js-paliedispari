// Chiedere all’utente di inserire una parola. 

var parolaUtente = prompt('Inserisci una parola');


// Creare una funzione per capire se la parola inserita è palindroma


function parolaInversa(word){
    var parolaInversa = '';

    // console.log(word);
    for (var i = word.length - 1; i >= 0; i--){
        parolaInversa = parolaInversa + word[i];
    }

    return parolaInversa;
}


var risultato = parolaInversa(parolaUtente);
// console.log(risultato + ' questo é il valore');



if (parolaUtente == risultato){
    console.log('La parola é palindroma');
} else {
    console.log('La parola non è palindroma');
}

// console.log(parolaInversa(parolaUtente));