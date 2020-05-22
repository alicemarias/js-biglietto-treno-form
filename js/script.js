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

var formKmValue;
var formEtaValue;

//PULSANTE GENERA
buttonGenera.addEventListener('click',
  function() {
    formKmValue = formKm.value;
    formEtaValue = formEta.value;

    //  compilo elementi ticket
    ticketNome.innerHTML = formNome.value;

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
      // costo ticket
      ticketCosto.innerHTML = prezzo + 'euro';
      // offerta ticket 
      ticketOfferta.innerHTML = offerta;

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
  }

);
