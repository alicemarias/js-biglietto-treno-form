// var visibilita BIGLIETTO
var sezioneTicket =  document.getElementById('ticket');

// bottoni FORM
var buttonGenera = document.getElementById('form-genera');
var buttonAnnulla = document.getElementById('form-annulla');
// elementi form
var formNome = document.getElementById('form-nome');
var formKm = document.getElementById('form-km');
var formEta = document.getElementById('form-eta');

// ELEMENTI BIGLIETTO
var ticketNome = document.getElementById('ticket-nome');
var ticketCosto = document.getElementById('ticket-costo');
var ticketOfferta = document.getElementById('ticket-offerta');
var ticketCp = document.getElementById('ticket-cp');
var ticketCarrozza = document.getElementById('ticket-carrozza');

var formKmValue;
var formEtaValue;

//PULSANTE GENERA
buttonGenera.addEventListener('click',
  function() {
    formKmValue = formKm.value;
    formEtaValue = formEta.value;

    // calcolo prezzo ticket
    var prezzo = (formKmValue * 0.21);
    // calcolo offerte
    var offerta = 'Ticket standard';
    // calcolo sconti
    if(formEtaValue == 'minorenne') {
      prezzo = (prezzo - (prezzo * 20 / 100));
      offerta= 'Sconto minorenni';
    } else if (formEtaValue == 'over') {
      prezzo = (prezzo - (prezzo * 40 / 100));
      offerta= 'Sconto over 65';
    }
    // compilo elementi ticket
    ticketNome.innerHTML = formNome.value;
    // costo ticket ricorda che questa parte deve andare sempre dopo i calcoli altrimenti ti da undefined
    ticketCosto.innerHTML = prezzo.toFixed(2) + 'euro';
    // offerta ticket
    ticketOfferta.innerHTML = offerta;

    // calcolo cp
    ticketCp.innerHTML = Math.floor(Math.random() * 100);
    ticketCarrozza.innerHTML = Math.floor(Math.random() * 100);

    // mostro ticket
    sezioneTicket.className = 'show';
  }

);

//pulsante annulla
buttonAnnulla.addEventListener('click',
  function() {
    //annullamento nome
    formNome.value = '';
    ticketNome.innerHTML = '';
    // annullamento km
    formKm.value= '';

    //annullamento eta
    formEta.value= 'minorenne';

    // annullamento costo biglietto
    ticketCosto.innerHTML = '';

    // annullamento offerta
    ticketOfferta.innerHTML = '';
    // annnulla cp
    ticketCp.innerHTML = '';
    // annulla carrozza
    ticketCarrozza.innerHTML = '';
  }

);
