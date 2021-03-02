// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
var listMail = ["cerne@gmail.com", "seba@hotmail.it", "conte@gmail.com", "max@virgilio.it"];
var userMail = prompt("Inserisci la tua mail.");

var soldier = false;

for (i = 0; i < listMail.length; i++) {
  if (userMail === listMail[i]) {
    soldier = true;
  }
}

if(soldier) {
  document.getElementById('accesso').innerHTML = "La sua Mail e nella lista, quindi può accedere.";
} else {
  document.getElementById('accesso').innerHTML = "Accesso Negato. La Mail inserita non è nella lista. ";
}
