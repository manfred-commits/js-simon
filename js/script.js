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

var numGenerati = 0;
var timer;

document.getElementById("invio").addEventListener("click",
function(){
    
    
    var numeriCasuali = [];
    var numeriInseriti=[];
    var risultato= [];


        while(numeriCasuali.length<5){
        
            numGenerati = randomNumber(1,10);
        
            if(!numeriCasuali.includes(numGenerati)){
        
                numeriCasuali.push(numGenerati);
            }
        }
        console.log(numeriCasuali);
        
        alert("I numeri generati da inserire, sono: "+numeriCasuali.join(", "));


        // Da li parte un timer di 30 secondi.
        // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

        timer = setTimeout(function() {
            
            // Dopo che sono stati inseriti i 5 numeri, 
            while(numeriInseriti.length<5){
                numeriInseriti.push(parseInt(prompt("Inserisci i numeri precedentemente visti: ")));
                
            }
            console.log(numeriInseriti);
        
           
            
            // il software dice quanti e quali dei numeri da indovinare sono stati individuati.
            for(var i=0; i<=numeriInseriti.length; i++){
        
        
                // se l'array numeriCasuali, generato al principio include, i numeri contenuti nell'array numeriInseriti e
                // se non è vero che l'array risultato, (contenete i numeri che corrispondono ai numeriCasuali == a i numeri Inseriti)  contienre il numero che si sta inserendo(questo codice è per evitare ripetizioni):
                // allora pusha il numero nell'array risultato;
        
                if(numeriCasuali.includes(numeriInseriti[i]) && !risultato.includes(numeriInseriti[i])){
                    risultato.push(numeriInseriti[i]);
                }
        
            }
            console.log("Numeri inseriti dall'utente che combaciano con i numeri generati a caso: "+risultato.join(", "));
            if(risultato.length!=0){
                alert("I numeri indovinati sono: " + risultato.join(", ") +" il tuo punteggio è: " + risultato.length);
                document.getElementById("risultato").innerHTML="I numeri indovinati sono: " + risultato.join(", ") +"<br> Il tuo punteggio è: " + risultato.length;

            }else{
                alert("Nessun numero è stato indovinato! \nIl tuo punteggio è 0 D;")
                document.getElementById("risultato").innerHTML="Nessun numero è stato indovinato! <br>Il tuo punteggio è 0 D;";
            }
        
        }, 2000);

    }
);













// /SEZIONE PRINCIPALE DEL CODICE
