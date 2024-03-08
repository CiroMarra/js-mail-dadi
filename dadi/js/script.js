// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// chiedere a l'utente un numero da 1 a 6.

const numeroUtente = Math.floor(Math.random() * 6) +1;
// genera un numero da 1 a 6 per il computer.
const numeroComputer = Math.floor(Math.random() * 6) +1;

console.log("Il giocatore tira " + numeroUtente);

console.log("il computer tira " + numeroComputer);

// Stabilire chi ha vinto tra l'utente e il computer.

if (numeroUtente > numeroComputer) {
    console.log("L'utente ha vinto");
} else if (numeroUtente < numeroComputer) {
    console.log ("Il computer ha vinto");
} else {
    console.log ("Avete Pareggiato");
}

