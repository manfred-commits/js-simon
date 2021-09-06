// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// SEZIONE FUNZIONI

// funzione che genera un numero random tra due intervalli

function randomNumber(num1, num2){
    var result = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
    return result;
}

// /SEZIONE FUNZIONI






// SEZIONE PRINCIPALE DEL CODICE




// 1. alert() espone 5 numeri generati casualmente.

// 1.1 genero un array di numeri casuali (che non si ripetono)

var numeriCasuali = [];
var numGenerati = 0;
while(numeriCasuali.length<5){

    numGenerati = randomNumber(1,10);

    if(!numeriCasuali.includes(numGenerati)){

        numeriCasuali.push(numGenerati);
    }
}
console.log(numeriCasuali);

alert("I numeri generati da inserire, sono: "+numeriCasuali.join(", "));


// Da li parte un timer di 30 secondi.






// /SEZIONE PRINCIPALE DEL CODICE
