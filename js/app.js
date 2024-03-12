console.log('prova di funzionamento')

//chiedere all'utente il suo nome

const nome = prompt('inserisci il tuo nome');
console.log(nome); // string

// chiudere all' utente il suo cognome

const cognome = prompt('inserisci il tuo cognome');
console.log(cognome); // string
// chiedere all'utente il suo colore preferito

const colore = prompt('il tuo colore preferito?');
console.log(colore); // string

//generare una password con i valori inseriti dall'utente più un numero

console.log(nome + cognome + 21)

//BONUS: generare un numero intero random (tipo tra 0 e 99) usando la funzione Math.random() e le relative funzioni di arrotondamento

console.log(nome + cognome + Math.random() )

// BONUS2 : il numero generato deve essere arrotondato a 2 decimali

// console.log(nome+cognome+ Math.random()*2 )