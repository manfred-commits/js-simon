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

document.getElementById("invio").addEventListener("click",
function(){
    
        var timer=0;
        var numeriCasuali = [];
        var risultato= [];
        
        
        document.getElementById("risultato").innerHTML="";
        
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
        var inputNumber= document.getElementById("input");


        inputNumber.setAttribute("disabled", "");


        timer = setTimeout(function() {
                
                
                alert("Inserisci i numeri che ti ricordi");
                
                inputNumber.removeAttribute("disabled");
                
            }, 2000);
            
        var btnInvio= document.getElementById("invia");
        var contatore= document.getElementById("contatore");
        var numeriInseriti=[];

        // Dopo che sono stati inseriti i 5 numeri, 
        btnInvio.addEventListener("click", 
            function(){
                if(numeriInseriti.length<5 && document.getElementById("input").value>0 && !numeriInseriti.includes(parseInt(document.getElementById("input").value))){
                    numeriInseriti.push(parseInt(document.getElementById("input").value));
                    console.log(numeriInseriti);
                    contatore.innerHTML="<strong>Numeri inseriti: "+numeriInseriti.length+"</strong>";
                }else{
                    alert("Hai gi?? inserito 5 valori o il numero da te inserito non ?? valido");
                }
            }
        );
            


        // il software dice quanti e quali dei numeri da indovinare sono stati individuati.
            

        var btnTermina= document.getElementById("termina");

        btnTermina.addEventListener("click",
            function(){
                if(numeriInseriti.length==5){
                        
                    for(var i=0; i<=numeriInseriti.length; i++){
                    
                    
                        // se l'array numeriCasuali, generato al principio include, i numeri contenuti nell'array numeriInseriti e
                        // se non ?? vero che l'array risultato, (contenete i numeri che corrispondono ai numeriCasuali == a i numeri Inseriti)  contienre il numero che si sta inserendo(questo codice ?? per evitare ripetizioni):
                        // allora pusha il numero nell'array risultato;
                    
                        if(numeriCasuali.includes(numeriInseriti[i]) && !risultato.includes(numeriInseriti[i])){
                            risultato.push(numeriInseriti[i]);
                        }
                    
                    }

                    numeriInseriti=[];
                    console.log("Numeri inseriti dall'utente che combaciano con i numeri generati a caso: "+risultato.join(", "));
                    if(risultato.length!=0){
                        alert("I numeri indovinati sono: " + risultato.join(", ") +" il tuo punteggio ??: " + risultato.length);
                        document.getElementById("risultato").innerHTML="I numeri indovinati sono: " + risultato.join(", ") +"<br> Il tuo punteggio ??: " + risultato.length;
                
                    }else{
                        alert("Nessun numero ?? stato indovinato! \nIl tuo punteggio ?? 0 D;")
                        document.getElementById("risultato").innerHTML="Nessun numero ?? stato indovinato! <br>Il tuo punteggio ?? 0 D;";
                    }
                }else{
                    alert("Inserisci 5 numeri!");
                }


            }
        );




            // 
            // while(numeriInseriti.length<5){
            //     numeriInseriti.push(parseInt(prompt("Inserisci i numeri precedentemente visti: ")));
                
            // }
            // console.log(numeriInseriti);
        
        
            
            // 
        

    }
);













// /SEZIONE PRINCIPALE DEL CODICE
