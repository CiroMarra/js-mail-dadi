// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!


//Lista di email da controllare 
const listEmail = ['giovannirossi@rossi.it', 'dark999@darkdark.com', 'fairytale@wizard.net', 'array@javascript.org', 'nonsopiùcosascrivere@zerofantasia.it', 'aero@mobile.it','forzaAscoli@nocalcio.io', 'nomercy@mercy.me', 
'gocciole@pavesi.it', 'poveroutente@ignaro.it'];
console.log(listEmail);
// Email dell'utente
const userEmail = prompt('Inserisci il tuo indirizzo email');
console.log(userEmail);

// lascia intendere che per il momento l'email
let emailFound = false;
// Fa scorrere la lista delle email
for(let i = 0; i < listEmail.length; ++i) {
    const thisEmail = listEmail[i];
    if (thisEmail === userEmail) {
        emailFound = true;
    }

}

    // Alla fine del ciclo se nella lista email viene trovata l'email dell'utente, scriverò 'Email trovata nella lista'
    if (emailFound === true) {
        alert('Email trovata nella lista');
    } else {
        // se nel caso alla fine del ciclo l'email non viene trovata nella lista stamperò  'Email non trovata nella lista'
        alert('Email non trovata nella lista');
 
    }

    console.log(emailFound === true);
