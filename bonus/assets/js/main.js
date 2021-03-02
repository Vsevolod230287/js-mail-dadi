// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var player1 = Math.floor(Math.random() * 6) + 1;
var cpu = Math.floor(Math.random() * 6) + 1;

document.getElementById('giocatore').innerHTML = "Il punteggio del Giocatore: " + player1;
document.getElementById('computer').innerHTML = "Il punteggio del Computer: " + cpu;


// 1 player1 vincitore
// 2 computer vincitore
// 3 pari


if (player1 > cpu) {
  document.getElementById('partita').innerHTML = "Ha vinto Giocatore!"
} else if (player1 < cpu) {
  document.getElementById('partita').innerHTML = " Ha vinto il Computer!"
} else {
  document.getElementById('partita').innerHTML = "Pareggio!"
}
