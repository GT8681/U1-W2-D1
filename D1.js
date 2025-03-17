/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
i principali datatype sono i seguenti: String-Nunber-boolean-null-Undefined.
String e' in pratica una parola, si mettono tra le virgolette.
Number sono dei caratteri sotto forma di numeri e si inseriscono direttamente.
i caratteri boolani sono due true e false.
poi ce null che sarebbe un valore uguale a zero che lo si impone dal programmatore,
mentre undefined e lo stesso risultato ma lo definisce dal sistema usato ed equivala a indefinito.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 let myName="Gianni";
 console.log(myName);


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let N1=12;
let N2=20;
console.log(N1+N2);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x=12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName="Toscano";
console.log(myName);
/*
const Name2="gt86";
console.log(Name2);
 
Name2="gianni86";
console.log(Name2);  D1.js:64 Uncaught TypeError: Assignment to constant variable.
at D1.js:64:6   */



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4-x);



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 ="john";
let name2 ="John";
let addConfer=name1 === name2;
console.log(addConfer);

/*let name3= name2.toLowerCase();
let name4= name1.toLowerCase();

console.log(name3 === name4);*/
let risultato=name1.toLowerCase()===name2.toLowerCase();
console.log(risultato);

/*let lowerCaseString = name2.toLoLowerCase();
console.log(lowerCaseString);

 /*let myString = "HeLLo WoRLD!"
let lowerCaseString = myString. toLowerCase(); */