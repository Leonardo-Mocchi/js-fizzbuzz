/* Consegna:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

/* Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
In che ordine devo mettere le condizioni?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"  */


/* ################################################## */

//come mostro i multipli di 15 (5*3) diversi da quelli si dolo 3 o solo 5?

// creo un loop per generare i numeri da 1 a 100

// mostro in console prima la parola composta così da avere la priorità sulle singole

// mostro in console la parola Buzz se il numero è un multiplo di 5, ma se è un multiplo di 3 non vedo solo Buzz perché ho dato la priorità alla parola composta

//come per Buzz ma per i multipli di 3

// mostro nella console tutti gli altri valori possibili della variabile che non siano multipli né di 3 né di 5 

for (let i = 1; i <= 100; i++) { //creazione del loop

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz", i) //multipli di 15, ma mostro la competenza dell'operatore && , inoltre il codice sarà più facilmente modificabile in futuro
    } else if (i % 5 === 0) {
        console.log("Buzz", i)
    } else if (i % 3 === 0) {
        console.log("Fizz", i)
    } else {
        console.log(i);   //tutti gli altri valori di i
    }
}