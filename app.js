/* Inglese passo passo
   Tutta la logica dell'app.
   Il codice è scritto in modo semplice: funzioni con un nome, cicli for e if. */

var VERSIONE_APP = "1.0";
var CHIAVE_DATI = "inglese_passo_passo_dati";

// Giorni di attesa prima di rivedere un esercizio, per ogni "scatola" (da 0 a 7).
// Rispondi giusto: l'esercizio sale di una scatola. Sbagli: torna alla scatola 0.
var INTERVALLI = [1, 1, 3, 7, 14, 30, 60, 120];
var SCATOLA_MASSIMA = 7;

var ESERCIZI_MISTO = 15;          // esercizi in un allenamento misto
var MASSIMO_PER_LEZIONE_MISTO = 3; // di solito al massimo 3 esercizi della stessa lezione
var MASSIMO_RIPETIZIONI = 2;      // quante volte torna un esercizio sbagliato nella stessa sessione

var LIVELLI = [
  { codice: "A1", nome: "Le basi" },
  { codice: "A2", nome: "Il passato e il futuro" },
  { codice: "B1", nome: "Frasi più ricche" },
  { codice: "B2", nome: "Precisione" }
];

var CONSEGNE = {
  scrivi: "Completa la frase.",
  scegli: "Scegli la forma giusta.",
  errore: "Nella frase c'è un errore: tocca la parola sbagliata.",
  traduci: "Traduci in inglese.",
  ordina: "Tocca le parole nell'ordine giusto."
};

var ICONA_AUDIO = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
var ICONA_MICROFONO = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';

var dati = null;      // i progressi salvati sul telefono
var sessione = null;  // la sessione di esercizi in corso
var schermo = null;   // il contenitore dove disegno le pagine


/* ---------- Avvio ---------- */

function avvio() {
  schermo = document.getElementById("schermo");
  dati = caricaDati();
  for (var i = 0; i < LEZIONI.length; i++) {
    LEZIONI[i].numero = i + 1;
  }
  document.addEventListener("click", clicSuDocumento);
  window.addEventListener("hashchange", instrada);
  if ("speechSynthesis" in window) {
    // su alcuni telefoni le voci arrivano dopo qualche istante
    window.speechSynthesis.getVoices();
  }
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(function () {
      // senza service worker l'app funziona lo stesso, solo non offline
    });
  }
  instrada();
}

function instrada() {
  var indirizzo = location.hash;
  chiudiRegola();
  if (indirizzo.indexOf("#lezione/") === 0) {
    mostraLezione(indirizzo.substring(9));
  } else if (indirizzo === "#esercizi") {
    if (sessione === null) {
      mostraHome();
    } else if (sessione.finita) {
      mostraFineSessione();
    } else {
      mostraEsercizio();
    }
  } else if (indirizzo === "#metodo") {
    mostraPagina(PAGINA_METODO);
  } else if (indirizzo === "#tempi") {
    mostraPagina(PAGINA_TEMPI);
  } else if (indirizzo === "#impostazioni") {
    mostraImpostazioni();
  } else {
    mostraHome();
  }
}

function vaiA(indirizzo) {
  if (location.hash === indirizzo) {
    instrada();
  } else {
    location.hash = indirizzo;
  }
}

function disegna(html) {
  schermo.innerHTML = html;
  window.scrollTo(0, 0);
}

function el(id) {
  return document.getElementById(id);
}

// Rende sicuro un testo da mettere dentro l'HTML
function esc(testo) {
  var risultato = String(testo);
  risultato = risultato.split("&").join("&amp;");
  risultato = risultato.split("<").join("&lt;");
  risultato = risultato.split(">").join("&gt;");
  risultato = risultato.split('"').join("&quot;");
  risultato = risultato.split("'").join("&#39;");
  return risultato;
}


/* ---------- Date ---------- */

// Il numero del giorno di oggi (giorni passati dal 1970), secondo l'ora del telefono
function oggi() {
  var adesso = new Date();
  var giorno = Date.UTC(adesso.getFullYear(), adesso.getMonth(), adesso.getDate());
  return Math.floor(giorno / 86400000);
}

function dataDiOggiInTesto() {
  var adesso = new Date();
  var mese = String(adesso.getMonth() + 1);
  var giorno = String(adesso.getDate());
  if (mese.length === 1) {
    mese = "0" + mese;
  }
  if (giorno.length === 1) {
    giorno = "0" + giorno;
  }
  return adesso.getFullYear() + "-" + mese + "-" + giorno;
}


/* ---------- Salvataggio dei progressi ---------- */

function datiVuoti() {
  return {
    versione: 1,
    carte: {},
    lezioni: {},
    serie: { ultimoGiorno: -1, giorni: 0, record: 0 },
    storico: {},
    impostazioni: {
      accento: "en-GB",
      velocita: 0.9,
      perRipasso: 20,
      leggiCorrezione: false,
      soloTempi: false
    }
  };
}

function caricaDati() {
  var vuoti = datiVuoti();
  var testo = null;
  try {
    testo = localStorage.getItem(CHIAVE_DATI);
  } catch (errore) {
    testo = null;
  }
  if (testo === null) {
    return vuoti;
  }
  var letti = null;
  try {
    letti = JSON.parse(testo);
  } catch (errore) {
    return vuoti;
  }
  if (letti === null || typeof letti !== "object") {
    return vuoti;
  }
  completaDati(letti);
  return letti;
}

// Aggiunge i campi che mancano, così i dati salvati con versioni vecchie restano validi
function completaDati(letti) {
  var vuoti = datiVuoti();
  for (var chiave in vuoti) {
    if (letti[chiave] === undefined || letti[chiave] === null) {
      letti[chiave] = vuoti[chiave];
    }
  }
  for (var impostazione in vuoti.impostazioni) {
    if (letti.impostazioni[impostazione] === undefined) {
      letti.impostazioni[impostazione] = vuoti.impostazioni[impostazione];
    }
  }
}

function salvaDati() {
  try {
    localStorage.setItem(CHIAVE_DATI, JSON.stringify(dati));
    return true;
  } catch (errore) {
    return false;
  }
}


/* ---------- Lezioni e carte ---------- */

function trovaLezione(id) {
  for (var i = 0; i < LEZIONI.length; i++) {
    if (LEZIONI[i].id === id) {
      return LEZIONI[i];
    }
  }
  return null;
}

function idCarta(lezione, indice) {
  return lezione.id + ":" + indice;
}

function cartaDi(lezione, indice) {
  var carta = dati.carte[idCarta(lezione, indice)];
  if (carta === undefined) {
    return null;
  }
  return carta;
}

function lezioneIniziata(lezione) {
  for (var i = 0; i < lezione.esercizi.length; i++) {
    if (cartaDi(lezione, i) !== null) {
      return true;
    }
  }
  return false;
}

function lezioneCompletata(lezione) {
  var stato = dati.lezioni[lezione.id];
  if (stato === undefined) {
    return false;
  }
  return stato.completata === true;
}

// Da 0 a 1: quanto è consolidata la lezione (scatola 4 = ricordata dopo 1, 3 e 7 giorni)
function avanzamentoLezione(lezione) {
  var somma = 0;
  for (var i = 0; i < lezione.esercizi.length; i++) {
    var carta = cartaDi(lezione, i);
    if (carta !== null) {
      var punti = carta.scatola;
      if (punti > 4) {
        punti = 4;
      }
      somma = somma + punti;
    }
  }
  return somma / (4 * lezione.esercizi.length);
}

function prossimaLezione() {
  for (var i = 0; i < LEZIONI.length; i++) {
    if (!lezioneCompletata(LEZIONI[i])) {
      return LEZIONI[i];
    }
  }
  return null;
}

function lezioniStudiate() {
  var lista = [];
  for (var i = 0; i < LEZIONI.length; i++) {
    if (lezioneIniziata(LEZIONI[i])) {
      lista.push(LEZIONI[i]);
    }
  }
  return lista;
}

function carteDaRipassare() {
  var giorno = oggi();
  var lista = [];
  for (var i = 0; i < LEZIONI.length; i++) {
    var lezione = LEZIONI[i];
    for (var j = 0; j < lezione.esercizi.length; j++) {
      var carta = cartaDi(lezione, j);
      if (carta !== null && carta.scadenza <= giorno) {
        lista.push({ lezione: lezione, indice: j });
      }
    }
  }
  return lista;
}

// Aggiorna la scatola di un esercizio dopo la prima risposta della sessione
function aggiornaCarta(lezione, indice, giusta) {
  var id = idCarta(lezione, indice);
  var giorno = oggi();
  var carta = dati.carte[id];
  var nuova = false;
  if (carta === undefined) {
    carta = { scatola: 0, scadenza: giorno, viste: 0, giuste: 0, sbagliate: 0, ultima: giorno };
    dati.carte[id] = carta;
    nuova = true;
  }
  carta.viste = carta.viste + 1;
  if (giusta) {
    carta.giuste = carta.giuste + 1;
    // sale di scatola solo se era il suo giorno (o se è nuova):
    // rifarlo due volte nello stesso giorno non conta come ripasso distanziato
    if (nuova || carta.scadenza <= giorno) {
      carta.scatola = carta.scatola + 1;
      if (carta.scatola > SCATOLA_MASSIMA) {
        carta.scatola = SCATOLA_MASSIMA;
      }
      carta.scadenza = giorno + INTERVALLI[carta.scatola];
    }
  } else {
    carta.sbagliate = carta.sbagliate + 1;
    carta.scatola = 0;
    carta.scadenza = giorno + INTERVALLI[0];
  }
  carta.ultima = giorno;
}

function registraGiornoDiStudio() {
  var giorno = oggi();
  var serie = dati.serie;
  if (serie.ultimoGiorno !== giorno) {
    if (serie.ultimoGiorno === giorno - 1) {
      serie.giorni = serie.giorni + 1;
    } else {
      serie.giorni = 1;
    }
    serie.ultimoGiorno = giorno;
    if (serie.giorni > serie.record) {
      serie.record = serie.giorni;
    }
  }
  var data = dataDiOggiInTesto();
  if (dati.storico[data] === undefined) {
    dati.storico[data] = 0;
  }
  dati.storico[data] = dati.storico[data] + 1;
}

// I giorni di fila in cui hai studiato (0 se hai saltato ieri e oggi)
function serieAttuale() {
  var giorno = oggi();
  if (dati.serie.ultimoGiorno === giorno || dati.serie.ultimoGiorno === giorno - 1) {
    return dati.serie.giorni;
  }
  return 0;
}

function rispostePerOggi() {
  var numero = dati.storico[dataDiOggiInTesto()];
  if (numero === undefined) {
    return 0;
  }
  return numero;
}


/* ---------- Mescolare ---------- */

function mescola(lista) {
  for (var i = lista.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temporaneo = lista[i];
    lista[i] = lista[j];
    lista[j] = temporaneo;
  }
  return lista;
}

// Cerca di non mettere due esercizi della stessa lezione uno dopo l'altro
function separaStessaLezione(lista) {
  for (var i = 1; i < lista.length; i++) {
    if (lista[i].lezione === lista[i - 1].lezione) {
      for (var j = i + 1; j < lista.length; j++) {
        if (lista[j].lezione !== lista[i - 1].lezione) {
          var temporaneo = lista[i];
          lista[i] = lista[j];
          lista[j] = temporaneo;
          break;
        }
      }
    }
  }
  return lista;
}


/* ---------- Correzione delle risposte ---------- */

// Toglie maiuscole, punteggiatura, spazi doppi e sistema gli apostrofi del telefono
function normalizza(testo) {
  var risultato = String(testo).toLowerCase();
  var apostrofi = ["’", "‘", "`", "´", "ʼ"];
  for (var i = 0; i < apostrofi.length; i++) {
    risultato = risultato.split(apostrofi[i]).join("'");
  }
  var daTogliere = [".", ",", "!", "?", ";", ":", "\"", "“", "”", "(", ")", " ", "\n", "\t"];
  for (var j = 0; j < daTogliere.length; j++) {
    risultato = risultato.split(daTogliere[j]).join(" ");
  }
  var parole = risultato.split(" ");
  var pulite = [];
  for (var k = 0; k < parole.length; k++) {
    var parola = parole[k];
    // apostrofi rimasti all'inizio o alla fine (es. virgolette semplici)
    while (parola.length > 0 && parola.charAt(0) === "'") {
      parola = parola.substring(1);
    }
    while (parola.length > 1 && parola.charAt(parola.length - 1) === "'" && parola.charAt(parola.length - 2) !== "s") {
      parola = parola.substring(0, parola.length - 1);
    }
    if (parola !== "") {
      pulite.push(parola);
    }
  }
  return pulite.join(" ");
}

function finisceCon(parola, fine) {
  if (parola.length < fine.length) {
    return false;
  }
  return parola.substring(parola.length - fine.length) === fine;
}

function tagliaFine(parola, fine) {
  return parola.substring(0, parola.length - fine.length);
}

// Tutte le forme possibili di una parola con l'apostrofo: "doesn't" -> "does not"
// lato = "utente" oppure "soluzione": le forme ambigue ('s, 'd) si allargano solo
// per la risposta dell'utente, perché nella soluzione le scrivo sempre per intero.
function espandiParola(parola, lato) {
  if (parola === "won't") {
    return ["will not"];
  }
  if (parola === "can't" || parola === "cannot") {
    return ["can not"];
  }
  if (parola === "shan't") {
    return ["shall not"];
  }
  if (parola === "let's") {
    return ["let's", "let us"];
  }
  if (finisceCon(parola, "n't")) {
    return [tagliaFine(parola, "n't") + " not"];
  }
  if (finisceCon(parola, "'m")) {
    return [tagliaFine(parola, "'m") + " am"];
  }
  if (finisceCon(parola, "'re")) {
    return [tagliaFine(parola, "'re") + " are"];
  }
  if (finisceCon(parola, "'ve")) {
    return [tagliaFine(parola, "'ve") + " have"];
  }
  if (finisceCon(parola, "'ll")) {
    return [tagliaFine(parola, "'ll") + " will"];
  }
  if (lato === "utente" && finisceCon(parola, "'d")) {
    var base = tagliaFine(parola, "'d");
    return [parola, base + " would", base + " had"];
  }
  if (lato === "utente" && finisceCon(parola, "'s")) {
    var radice = tagliaFine(parola, "'s");
    return [parola, radice + " is", radice + " has"];
  }
  return [parola];
}

// Tutte le versioni di una frase con le forme contratte sciolte
function varianti(testo, lato) {
  var parole = normalizza(testo).split(" ");
  var versioni = [""];
  for (var i = 0; i < parole.length; i++) {
    var forme = espandiParola(parole[i], lato);
    var nuove = [];
    for (var j = 0; j < versioni.length; j++) {
      for (var k = 0; k < forme.length; k++) {
        if (nuove.length < 200) {
          if (versioni[j] === "") {
            nuove.push(forme[k]);
          } else {
            nuove.push(versioni[j] + " " + forme[k]);
          }
        }
      }
    }
    versioni = nuove;
  }
  return versioni;
}

function togliApostrofi(testo) {
  return testo.split("'").join("");
}

// Controlla una risposta. Restituisce { giusta: true/false, nota: "..." }
function controllaRisposta(risposta, giuste) {
  var esito = { giusta: false, nota: "" };
  if (normalizza(risposta) === "") {
    return esito;
  }
  var mie = varianti(risposta, "utente");
  for (var i = 0; i < giuste.length; i++) {
    var loro = varianti(giuste[i], "soluzione");
    for (var j = 0; j < mie.length; j++) {
      for (var k = 0; k < loro.length; k++) {
        if (mie[j] === loro[k]) {
          esito.giusta = true;
          return esito;
        }
      }
    }
  }
  // seconda prova: giusta, ma senza apostrofo (es. "doesnt" invece di "doesn't")
  var mia = togliApostrofi(normalizza(risposta));
  for (var g = 0; g < giuste.length; g++) {
    if (mia === togliApostrofi(normalizza(giuste[g]))) {
      esito.giusta = true;
      esito.nota = "Attento all'apostrofo: si scrive “" + giuste[g] + "”.";
      return esito;
    }
  }
  return esito;
}


/* ---------- Voce: ascoltare e parlare ---------- */

function scegliVoce() {
  if (!("speechSynthesis" in window)) {
    return null;
  }
  var voci = window.speechSynthesis.getVoices();
  var accento = dati.impostazioni.accento.toLowerCase();
  var ripiego = null;
  for (var i = 0; i < voci.length; i++) {
    var lingua = voci[i].lang.toLowerCase().split("_").join("-");
    if (lingua === accento) {
      return voci[i];
    }
    if (ripiego === null && lingua.indexOf("en") === 0) {
      ripiego = voci[i];
    }
  }
  return ripiego;
}

function parla(testo) {
  if (!("speechSynthesis" in window)) {
    return;
  }
  window.speechSynthesis.cancel();
  var frase = new SpeechSynthesisUtterance(testo);
  frase.lang = dati.impostazioni.accento;
  frase.rate = dati.impostazioni.velocita;
  var voce = scegliVoce();
  if (voce !== null) {
    frase.voice = voce;
  }
  window.speechSynthesis.speak(frase);
}

function pulsanteAudio(testo) {
  return '<button type="button" class="ascolta" data-testo="' + esc(testo) + '" aria-label="Ascolta">' + ICONA_AUDIO + '</button>';
}

// Aggiunge il pulsante "ascolta" a ogni esempio in inglese di una spiegazione
function aggiungiPulsantiAudio(contenitore) {
  var esempi = contenitore.querySelectorAll(".en");
  for (var i = 0; i < esempi.length; i++) {
    var testo = esempi[i].textContent;
    esempi[i].insertAdjacentHTML("afterend", pulsanteAudio(testo));
  }
}

function clicSuDocumento(evento) {
  var bottone = evento.target.closest(".ascolta");
  if (bottone !== null) {
    parla(bottone.getAttribute("data-testo"));
  }
}

function microfonoDisponibile() {
  if (window.SpeechRecognition || window.webkitSpeechRecognition) {
    return true;
  }
  return false;
}

// Ascolta dal microfono e scrive nel campo quello che hai detto
function usaMicrofono(campo, bottone) {
  var Riconoscimento = window.SpeechRecognition || window.webkitSpeechRecognition;
  var riconoscimento = new Riconoscimento();
  riconoscimento.lang = dati.impostazioni.accento;
  riconoscimento.interimResults = false;
  riconoscimento.maxAlternatives = 3;
  bottone.classList.add("in-ascolto");
  bottone.setAttribute("aria-label", "Ti sto ascoltando");
  el("stato-microfono").textContent = "Ti ascolto: parla in inglese.";

  riconoscimento.onresult = function (evento) {
    var alternative = [];
    var lista = evento.results[0];
    for (var i = 0; i < lista.length; i++) {
      alternative.push(lista[i].transcript);
    }
    campo.value = alternative[0];
    sessione.alternativeVoce = alternative;
    el("stato-microfono").textContent = "Ho capito questo. Correggi se serve, poi premi Controlla.";
  };
  riconoscimento.onerror = function (evento) {
    if (evento.error === "not-allowed" || evento.error === "service-not-allowed") {
      el("stato-microfono").textContent = "Il microfono è bloccato. Permetti l'accesso al microfono nelle impostazioni del browser, oppure usa la dettatura della tastiera.";
    } else if (evento.error === "no-speech") {
      el("stato-microfono").textContent = "Non ho sentito niente. Tocca il microfono e riprova.";
    } else {
      el("stato-microfono").textContent = "Il riconoscimento vocale non ha funzionato. Puoi usare la dettatura della tastiera.";
    }
  };
  riconoscimento.onend = function () {
    bottone.classList.remove("in-ascolto");
    bottone.setAttribute("aria-label", "Parla");
  };
  try {
    riconoscimento.start();
  } catch (errore) {
    bottone.classList.remove("in-ascolto");
  }
}


/* ---------- Conferma con doppio tocco (al posto di confirm, bloccato in alcuni browser) ---------- */

function confermaConDoppioTocco(bottone, testoConferma, azione) {
  var testoOriginale = bottone.textContent;
  var armato = false;
  var timer = null;
  bottone.addEventListener("click", function () {
    if (!armato) {
      armato = true;
      bottone.textContent = testoConferma;
      bottone.classList.add("da-confermare");
      timer = setTimeout(function () {
        armato = false;
        bottone.textContent = testoOriginale;
        bottone.classList.remove("da-confermare");
      }, 4000);
    } else {
      clearTimeout(timer);
      armato = false;
      bottone.textContent = testoOriginale;
      bottone.classList.remove("da-confermare");
      azione();
    }
  });
}


/* ---------- Pagina principale ---------- */

function mostraHome() {
  sessione = null;
  var daRipassare = carteDaRipassare().length;
  var prossima = prossimaLezione();
  var studiate = lezioniStudiate();
  var serie = serieAttuale();
  var html = "";

  html += '<header class="testata">';
  html += '<h1 class="marchio">Inglese passo passo</h1>';
  if (serie > 0) {
    var parolaGiorni = "giorni";
    if (serie === 1) {
      parolaGiorni = "giorno";
    }
    html += '<p class="serie"><strong>' + serie + '</strong> ' + parolaGiorni + ' di fila</p>';
  }
  html += '</header>';

  html += '<section class="oggi" aria-labelledby="titolo-oggi">';
  html += '<h2 id="titolo-oggi" class="sr-only">Oggi</h2>';

  if (daRipassare > 0) {
    var parolaFrasi = "frasi da ripassare";
    if (daRipassare === 1) {
      parolaFrasi = "frase da ripassare";
    }
    html += '<p class="riga-oggi">Oggi hai <strong>' + daRipassare + '</strong> ' + parolaFrasi + '.</p>';
    html += '<button type="button" class="primario largo" id="vai-ripasso">Ripassa adesso</button>';
  } else if (studiate.length > 0) {
    html += '<p class="riga-oggi">Niente da ripassare oggi. I ripassi tornano quando stai per dimenticare.</p>';
  } else {
    html += '<p class="riga-oggi">Si parte dalle basi: una spiegazione breve, poi gli esercizi.</p>';
    html += '<p class="nota-oggi">Il giorno dopo ritroverai le frasi nel ripasso, così restano in memoria.</p>';
  }

  if (prossima !== null) {
    var etichetta = "Inizia la lezione";
    if (lezioneIniziata(prossima)) {
      etichetta = "Continua la lezione";
    }
    var classe = "primario largo";
    if (daRipassare > 0) {
      classe = "secondario largo";
    }
    html += '<p class="prossima">Prossima lezione: <strong>' + prossima.numero + '. ' + esc(prossima.titolo) + '</strong></p>';
    html += '<button type="button" class="' + classe + '" id="vai-lezione">' + etichetta + '</button>';
  } else {
    html += '<p class="prossima">Hai fatto tutte le lezioni. Continua con i ripassi e l\'allenamento misto.</p>';
  }

  if (studiate.length >= 2) {
    html += '<button type="button" class="secondario largo" id="vai-misto">Allenamento misto</button>';
    html += '<label class="opzione-piccola"><input type="checkbox" id="solo-tempi"';
    if (dati.impostazioni.soloTempi) {
      html += ' checked';
    }
    html += '> Solo tempi verbali</label>';
  }
  var risposteOggi = rispostePerOggi();
  if (risposteOggi > 0) {
    html += '<p class="nota-oggi">Oggi hai risposto a ' + risposteOggi + ' esercizi.</p>';
  }
  html += '</section>';

  html += '<section class="percorso" aria-labelledby="titolo-percorso">';
  html += '<h2 id="titolo-percorso">Il percorso</h2>';
  for (var l = 0; l < LIVELLI.length; l++) {
    var livello = LIVELLI[l];
    html += '<h3 class="livello"><span class="codice-livello">' + livello.codice + '</span> ' + livello.nome + '</h3>';
    html += '<ol class="elenco-lezioni">';
    for (var i = 0; i < LEZIONI.length; i++) {
      var lezione = LEZIONI[i];
      if (lezione.livello === livello.codice) {
        html += rigaLezione(lezione, prossima);
      }
    }
    html += '</ol>';
  }
  html += '</section>';

  html += '<nav class="piede" aria-label="Altre pagine">';
  html += '<a href="#tempi">Tutti i tempi verbali</a>';
  html += '<a href="#metodo">Come funziona il metodo</a>';
  html += '<a href="#impostazioni">Impostazioni e copia dei dati</a>';
  html += '</nav>';

  disegna(html);

  if (el("vai-ripasso") !== null) {
    el("vai-ripasso").addEventListener("click", avviaRipasso);
  }
  if (el("vai-lezione") !== null) {
    el("vai-lezione").addEventListener("click", function () {
      vaiA("#lezione/" + prossima.id);
    });
  }
  if (el("vai-misto") !== null) {
    el("vai-misto").addEventListener("click", avviaMisto);
    el("solo-tempi").addEventListener("change", function () {
      dati.impostazioni.soloTempi = el("solo-tempi").checked;
      salvaDati();
    });
  }
}

function rigaLezione(lezione, prossima) {
  var percentuale = Math.round(avanzamentoLezione(lezione) * 100);
  var stato = "";
  var classe = "riga-lezione";
  if (lezioneCompletata(lezione)) {
    classe += " fatta";
    stato = percentuale + "% consolidata";
  } else if (lezioneIniziata(lezione)) {
    stato = "iniziata";
  } else {
    stato = "da fare";
  }
  if (prossima !== null && prossima.id === lezione.id) {
    classe += " corrente";
  }
  var html = '<li class="' + classe + '"><a href="#lezione/' + lezione.id + '">';
  html += '<span class="numero">' + lezione.numero + '</span>';
  html += '<span class="testi"><span class="titolo-lezione">' + esc(lezione.titolo) + '</span>';
  html += '<span class="sottotitolo">' + esc(lezione.sottotitolo) + '</span></span>';
  html += '<span class="stato"><span class="barretta" aria-hidden="true"><span style="width:' + percentuale + '%"></span></span>';
  html += '<span class="testo-stato">' + stato + '</span></span>';
  html += '</a></li>';
  return html;
}


/* ---------- Pagina di una lezione ---------- */

function mostraLezione(id) {
  var lezione = trovaLezione(id);
  if (lezione === null) {
    vaiA("#home");
    return;
  }
  var html = '<a class="indietro" href="#home">Indietro</a>';
  html += '<article class="lezione">';
  html += '<p class="dove">Livello ' + lezione.livello + ', lezione ' + lezione.numero + ' di ' + LEZIONI.length + '</p>';
  html += '<h1>' + esc(lezione.titolo) + '</h1>';
  html += '<p class="sottotitolo-grande">' + esc(lezione.sottotitolo) + '</p>';
  html += '<div class="spiegazione" id="spiegazione">' + lezione.spiegazione + '</div>';
  html += '</article>';
  html += '<div class="fine-lezione">';
  if (lezioneCompletata(lezione)) {
    html += '<p>Hai già fatto questa lezione. Consolidata al ' + Math.round(avanzamentoLezione(lezione) * 100) + '%: rifarla ora non cambia i ripassi, ma ti allena.</p>';
  }
  html += '<button type="button" class="primario largo" id="inizia-esercizi">Fai gli esercizi (' + lezione.esercizi.length + ')</button>';
  html += '</div>';
  disegna(html);
  aggiungiPulsantiAudio(el("spiegazione"));
  el("inizia-esercizi").addEventListener("click", function () {
    avviaLezione(lezione);
  });
}

function mostraPagina(contenuto) {
  var html = '<a class="indietro" href="#home">Indietro</a>';
  html += '<article class="lezione pagina" id="pagina">' + contenuto + '</article>';
  disegna(html);
  aggiungiPulsantiAudio(el("pagina"));
}


/* ---------- Rivedere la regola durante gli esercizi ---------- */

function mostraRegola(lezione) {
  chiudiRegola();
  var html = '<div class="velo" id="velo-regola">';
  html += '<div class="foglio-regola" role="dialog" aria-modal="true" aria-labelledby="titolo-regola">';
  html += '<div class="testa-regola"><h2 id="titolo-regola">' + esc(lezione.titolo) + '</h2>';
  html += '<button type="button" class="secondario" id="chiudi-regola">Chiudi</button></div>';
  html += '<div class="spiegazione" id="testo-regola">' + lezione.spiegazione + '</div>';
  html += '</div></div>';
  document.body.insertAdjacentHTML("beforeend", html);
  aggiungiPulsantiAudio(el("testo-regola"));
  document.body.classList.add("bloccato");
  el("chiudi-regola").addEventListener("click", chiudiRegola);
  el("chiudi-regola").focus();
}

function chiudiRegola() {
  var velo = el("velo-regola");
  if (velo !== null) {
    velo.parentNode.removeChild(velo);
  }
  document.body.classList.remove("bloccato");
}


/* ---------- Avvio delle sessioni ---------- */

function avviaLezione(lezione) {
  var voci = [];
  for (var i = 0; i < lezione.esercizi.length; i++) {
    voci.push({ lezione: lezione, indice: i });
  }
  iniziaSessione("lezione", lezione.titolo, voci, lezione);
}

function avviaRipasso() {
  var tutte = mescola(carteDaRipassare());
  var voci = [];
  for (var i = 0; i < tutte.length && i < dati.impostazioni.perRipasso; i++) {
    voci.push(tutte[i]);
  }
  if (voci.length === 0) {
    vaiA("#home");
    return;
  }
  iniziaSessione("ripasso", "Ripasso di oggi", separaStessaLezione(voci), null);
}

function avviaMisto() {
  var studiate = lezioniStudiate();
  var adatte = [];
  for (var i = 0; i < studiate.length; i++) {
    if (!dati.impostazioni.soloTempi || studiate[i].tempi === true) {
      adatte.push(studiate[i]);
    }
  }
  if (adatte.length === 0) {
    adatte = studiate;
  }
  var tutte = [];
  for (var l = 0; l < adatte.length; l++) {
    for (var j = 0; j < adatte[l].esercizi.length; j++) {
      tutte.push({ lezione: adatte[l], indice: j });
    }
  }
  mescola(tutte);
  // con poche lezioni studiate ne prendo di più da ognuna, per arrivare a ESERCIZI_MISTO
  var massimo = Math.ceil(ESERCIZI_MISTO / adatte.length);
  if (massimo < MASSIMO_PER_LEZIONE_MISTO) {
    massimo = MASSIMO_PER_LEZIONE_MISTO;
  }
  var voci = [];
  var contatori = {};
  for (var k = 0; k < tutte.length && voci.length < ESERCIZI_MISTO; k++) {
    var id = tutte[k].lezione.id;
    if (contatori[id] === undefined) {
      contatori[id] = 0;
    }
    if (contatori[id] < massimo) {
      contatori[id] = contatori[id] + 1;
      voci.push(tutte[k]);
    }
  }
  var titolo = "Allenamento misto";
  if (dati.impostazioni.soloTempi) {
    titolo = "Allenamento misto: tempi verbali";
  }
  iniziaSessione("misto", titolo, separaStessaLezione(voci), null);
}

function avviaErrori() {
  var voci = [];
  for (var i = 0; i < sessione.sbagliate.length; i++) {
    voci.push({ lezione: sessione.sbagliate[i].lezione, indice: sessione.sbagliate[i].indice });
  }
  iniziaSessione("errori", "Ripeti gli errori", mescola(voci), null);
}

function iniziaSessione(tipo, titolo, voci, lezione) {
  var coda = [];
  for (var i = 0; i < voci.length; i++) {
    coda.push({ lezione: voci[i].lezione, indice: voci[i].indice, primaVolta: true, ripetizioni: 0 });
  }
  sessione = {
    tipo: tipo,
    titolo: titolo,
    lezione: lezione,
    coda: coda,
    posizione: 0,
    totali: coda.length,
    giusteAlPrimo: 0,
    sbagliate: [],
    esito: null,
    esitoMostratoAlle: 0,
    finita: false,
    ordina: null,
    alternativeVoce: []
  };
  vaiA("#esercizi");
}


/* ---------- Un esercizio ---------- */

function voceCorrente() {
  return sessione.coda[sessione.posizione];
}

function esercizioCorrente() {
  var voce = voceCorrente();
  return voce.lezione.esercizi[voce.indice];
}

function fattiFinora() {
  var fatti = 0;
  for (var i = 0; i < sessione.posizione; i++) {
    if (sessione.coda[i].primaVolta) {
      fatti = fatti + 1;
    }
  }
  return fatti;
}

function mostraEsercizio() {
  if (sessione.posizione >= sessione.coda.length) {
    concludiSessione();
    return;
  }
  var voce = voceCorrente();
  var esercizio = esercizioCorrente();
  sessione.esito = null;
  sessione.alternativeVoce = [];

  var fatti = fattiFinora();
  var percentuale = Math.round((fatti / sessione.totali) * 100);
  var html = '<div class="barra-sessione">';
  html += '<button type="button" class="chiudi" id="chiudi-sessione">Esci</button>';
  html += '<div class="avanzamento" role="progressbar" aria-valuemin="0" aria-valuemax="' + sessione.totali + '" aria-valuenow="' + fatti + '"><span style="width:' + percentuale + '%"></span></div>';
  html += '<span class="conteggio">' + fatti + '/' + sessione.totali + '</span>';
  html += '</div>';

  html += '<div class="esercizio">';
  html += '<p class="da-dove">' + esc(voce.lezione.titolo);
  if (!voce.primaVolta) {
    html += ' <span class="di-nuovo">di nuovo</span>';
  }
  html += '</p>';
  var consegna = CONSEGNE[esercizio.tipo];
  if (esercizio.consegna) {
    consegna = esercizio.consegna;
  }
  html += '<p class="consegna">' + esc(consegna) + '</p>';

  if (esercizio.tipo === "scrivi") {
    html += htmlScrivi(esercizio);
  } else if (esercizio.tipo === "scegli") {
    html += htmlScegli(esercizio);
  } else if (esercizio.tipo === "errore") {
    html += htmlErrore(esercizio);
  } else if (esercizio.tipo === "traduci") {
    html += htmlTraduci(esercizio);
  } else if (esercizio.tipo === "ordina") {
    html += htmlOrdina(esercizio);
  }
  html += '<div id="riquadro-esito" aria-live="polite"></div>';
  html += '</div>';
  disegna(html);

  el("chiudi-sessione").addEventListener("click", function () {
    vaiA("#home");
  });

  if (esercizio.tipo === "scrivi" || esercizio.tipo === "traduci") {
    collegaCampoDiTesto(esercizio);
  } else if (esercizio.tipo === "scegli") {
    collegaScegli(esercizio);
  } else if (esercizio.tipo === "errore") {
    collegaErrore(esercizio);
  } else if (esercizio.tipo === "ordina") {
    collegaOrdina();
  }
}

// Mette una parola al posto di ___. Il trattino "—" vuol dire "niente" (es. nessun articolo)
function riempiBuco(frase, parola) {
  if (parola === "—") {
    var senza = frase.split("___ ").join("");
    senza = senza.split(" ___").join("");
    return senza.split("___").join("");
  }
  return frase.split("___").join(parola);
}

// La frase completa e corretta di un esercizio
function fraseCorretta(esercizio) {
  if (esercizio.tipo === "scrivi") {
    var parti = esercizio.frase.split("___");
    return parti[0] + esercizio.giuste[0] + parti[1];
  }
  if (esercizio.tipo === "scegli") {
    if (esercizio.frase.indexOf("___") !== -1) {
      return riempiBuco(esercizio.frase, esercizio.giusta);
    }
    return esercizio.giusta;
  }
  if (esercizio.tipo === "errore") {
    return esercizio.corretta;
  }
  if (esercizio.tipo === "traduci") {
    return esercizio.giuste[0];
  }
  return esercizio.giusta;
}

// Scrivi: completa la frase
function htmlScrivi(esercizio) {
  var parti = esercizio.frase.split("___");
  var lunghezza = 4;
  for (var i = 0; i < esercizio.giuste.length; i++) {
    if (esercizio.giuste[i].length > lunghezza) {
      lunghezza = esercizio.giuste[i].length;
    }
  }
  var html = '<p class="frase quaderno">' + esc(parti[0]);
  html += '<span class="buco" id="buco"><input id="risposta" class="campo-buco" type="text" style="width:' + (lunghezza + 2) + 'ch" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" aria-label="La tua risposta"></span>';
  if (esercizio.aiuto) {
    html += ' <span class="aiuto">(' + esc(esercizio.aiuto) + ')</span>';
  }
  html += esc(parti[1]) + '</p>';
  html += '<div class="azioni"><button type="button" class="primario largo" id="controlla">Controlla</button></div>';
  return html;
}

// Traduci: dall'italiano all'inglese, scrivendo o parlando
function htmlTraduci(esercizio) {
  var html = '<p class="italiano">' + esc(esercizio.italiano) + '</p>';
  html += '<div class="campo-traduzione">';
  html += '<textarea id="risposta" class="campo-lungo" rows="2" autocomplete="off" autocapitalize="sentences" autocorrect="off" spellcheck="false" enterkeyhint="done" placeholder="Scrivi in inglese" aria-label="La tua traduzione"></textarea>';
  if (microfonoDisponibile()) {
    html += '<button type="button" class="microfono" id="microfono" aria-label="Parla">' + ICONA_MICROFONO + '</button>';
  }
  html += '</div>';
  html += '<p class="stato-microfono" id="stato-microfono"></p>';
  html += '<div class="azioni"><button type="button" class="primario largo" id="controlla">Controlla</button></div>';
  return html;
}

function collegaCampoDiTesto(esercizio) {
  var campo = el("risposta");
  campo.focus();
  campo.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
      evento.preventDefault();
      if (sessione.esito === null) {
        controllaCampoDiTesto(esercizio);
      }
    }
  });
  el("controlla").addEventListener("click", function () {
    controllaCampoDiTesto(esercizio);
  });
  if (el("microfono") !== null) {
    el("microfono").addEventListener("click", function () {
      usaMicrofono(campo, el("microfono"));
    });
  }
}

function controllaCampoDiTesto(esercizio) {
  var campo = el("risposta");
  var risposta = campo.value;
  if (normalizza(risposta) === "") {
    campo.focus();
    return;
  }
  var giuste = [];
  for (var i = 0; i < esercizio.giuste.length; i++) {
    giuste.push(esercizio.giuste[i]);
  }
  if (esercizio.tipo === "scrivi") {
    // vale anche se hai scritto tutta la frase invece della sola parte mancante
    var parti = esercizio.frase.split("___");
    for (var j = 0; j < esercizio.giuste.length; j++) {
      giuste.push(parti[0] + esercizio.giuste[j] + parti[1]);
    }
  }
  var esito = controllaRisposta(risposta, giuste);
  // con il microfono provo anche le altre cose che il telefono ha capito
  if (!esito.giusta) {
    for (var k = 0; k < sessione.alternativeVoce.length; k++) {
      var altra = controllaRisposta(sessione.alternativeVoce[k], giuste);
      if (altra.giusta) {
        esito = altra;
        campo.value = sessione.alternativeVoce[k];
        risposta = campo.value;
        break;
      }
    }
  }
  campo.readOnly = true;
  campo.blur();
  el("controlla").remove();
  if (esercizio.tipo === "scrivi") {
    correggiBuco(risposta, esercizio, esito.giusta);
  } else if (esito.giusta) {
    campo.classList.add("giusto");
  } else {
    campo.classList.add("sbagliato");
  }
  mostraEsito(esito.giusta, risposta, esito.nota, true);
}

// Il momento della penna rossa: la tua risposta sbarrata e sopra quella giusta
function correggiBuco(risposta, esercizio, giusta) {
  var buco = el("buco");
  if (giusta) {
    buco.innerHTML = '<span class="scritto giusto">' + esc(risposta.trim()) + '</span>';
  } else {
    buco.innerHTML = '<span class="correzione-rossa"><s class="scritto sbagliato">' + esc(risposta.trim()) + '</s><span class="sopra">' + esc(esercizio.giuste[0]) + '</span></span>';
  }
}

// Scegli: una tra più opzioni
function htmlScegli(esercizio) {
  var frase = esercizio.frase;
  var html = "";
  if (frase.indexOf("___") !== -1) {
    var parti = frase.split("___");
    html += '<p class="frase quaderno">' + esc(parti[0]) + '<span class="buco" id="buco"><span class="vuoto">&nbsp;</span></span>' + esc(parti[1]) + '</p>';
  } else {
    html += '<p class="frase quaderno">' + esc(frase) + '</p>';
  }
  var opzioni = mescola(esercizio.opzioni.slice());
  html += '<div class="opzioni" id="opzioni">';
  for (var i = 0; i < opzioni.length; i++) {
    html += '<button type="button" class="opzione" data-valore="' + esc(opzioni[i]) + '">' + esc(opzioni[i]) + '</button>';
  }
  html += '</div>';
  return html;
}

function collegaScegli(esercizio) {
  var bottoni = document.querySelectorAll("#opzioni .opzione");
  for (var i = 0; i < bottoni.length; i++) {
    bottoni[i].addEventListener("click", sceltaOpzione);
  }
}

function sceltaOpzione(evento) {
  if (sessione.esito !== null) {
    return;
  }
  var esercizio = esercizioCorrente();
  var scelta = evento.currentTarget.getAttribute("data-valore");
  var giusta = scelta === esercizio.giusta;
  var bottoni = document.querySelectorAll("#opzioni .opzione");
  for (var i = 0; i < bottoni.length; i++) {
    var valore = bottoni[i].getAttribute("data-valore");
    bottoni[i].disabled = true;
    if (valore === esercizio.giusta) {
      bottoni[i].classList.add("giusto");
    } else if (valore === scelta) {
      bottoni[i].classList.add("sbagliato");
    }
  }
  if (el("buco") !== null) {
    if (giusta) {
      el("buco").innerHTML = '<span class="scritto giusto">' + esc(scelta) + '</span>';
    } else {
      el("buco").innerHTML = '<span class="correzione-rossa"><s class="scritto sbagliato">' + esc(scelta) + '</s><span class="sopra">' + esc(esercizio.giusta) + '</span></span>';
    }
  }
  mostraEsito(giusta, scelta, "", false);
}

// Trova l'errore: le parole tra parentesi quadre sono quelle sbagliate
function paroleErrore(frase) {
  var pezzi = frase.split(" ");
  var parole = [];
  var dentro = false;
  for (var i = 0; i < pezzi.length; i++) {
    var pezzo = pezzi[i];
    if (pezzo === "") {
      continue;
    }
    var finisce = false;
    if (pezzo.indexOf("[") !== -1) {
      dentro = true;
      pezzo = pezzo.split("[").join("");
    }
    if (pezzo.indexOf("]") !== -1) {
      finisce = true;
      pezzo = pezzo.split("]").join("");
    }
    parole.push({ testo: pezzo, sbagliata: dentro });
    if (finisce) {
      dentro = false;
    }
  }
  return parole;
}

function htmlErrore(esercizio) {
  var parole = paroleErrore(esercizio.frase);
  var html = '<p class="frase quaderno parole-toccabili" id="parole-errore">';
  for (var i = 0; i < parole.length; i++) {
    html += '<button type="button" class="parola" data-indice="' + i + '">' + esc(parole[i].testo) + '</button> ';
  }
  html += '</p>';
  return html;
}

function collegaErrore(esercizio) {
  var bottoni = document.querySelectorAll("#parole-errore .parola");
  for (var i = 0; i < bottoni.length; i++) {
    bottoni[i].addEventListener("click", toccataParola);
  }
}

function toccataParola(evento) {
  if (sessione.esito !== null) {
    return;
  }
  var esercizio = esercizioCorrente();
  var parole = paroleErrore(esercizio.frase);
  var indice = Number(evento.currentTarget.getAttribute("data-indice"));
  var giusta = parole[indice].sbagliata;
  var bottoni = document.querySelectorAll("#parole-errore .parola");
  for (var i = 0; i < bottoni.length; i++) {
    bottoni[i].disabled = true;
    if (parole[i].sbagliata) {
      bottoni[i].classList.add("errore-trovato");
    }
    if (i === indice && !giusta) {
      bottoni[i].classList.add("tocco-sbagliato");
    }
  }
  var toccata = parole[indice].testo;
  var nota = "";
  if (!giusta) {
    nota = "Hai toccato “" + toccata + "”, ma l'errore era altrove (segnato in rosso).";
  }
  mostraEsito(giusta, "", nota, false);
}

// Riordina: tocca le parole nell'ordine giusto
function minuscolaIniziale(parola) {
  if (parola === "I" || parola.indexOf("I'") === 0) {
    return parola;
  }
  return parola.charAt(0).toLowerCase() + parola.substring(1);
}

function htmlOrdina(esercizio) {
  var testo = esercizio.giusta;
  var finale = "";
  var ultimo = testo.charAt(testo.length - 1);
  if (ultimo === "?" || ultimo === "." || ultimo === "!") {
    finale = ultimo;
    testo = testo.substring(0, testo.length - 1);
  }
  var parole = testo.split(" ");
  parole[0] = minuscolaIniziale(parole[0]);
  var ordine = [];
  for (var i = 0; i < parole.length; i++) {
    ordine.push(i);
  }
  // mescolo finché l'ordine non è diverso da quello giusto
  for (var tentativo = 0; tentativo < 10; tentativo++) {
    mescola(ordine);
    var diverso = false;
    for (var j = 0; j < ordine.length; j++) {
      if (parole[ordine[j]] !== parole[j]) {
        diverso = true;
      }
    }
    if (diverso) {
      break;
    }
  }
  sessione.ordina = { parole: parole, ordine: ordine, scelte: [], finale: finale };
  var html = '<div class="riga-ordina" id="riga-ordina" aria-label="La tua frase"></div>';
  html += '<div class="parole-ordina" id="parole-ordina"></div>';
  html += '<div class="azioni"><button type="button" class="primario largo" id="controlla" disabled>Controlla</button></div>';
  return html;
}

function collegaOrdina() {
  disegnaOrdina();
  el("controlla").addEventListener("click", controllaOrdina);
}

function disegnaOrdina() {
  var stato = sessione.ordina;
  var riga = "";
  for (var i = 0; i < stato.scelte.length; i++) {
    var indice = stato.scelte[i];
    riga += '<button type="button" class="tessera scelta" data-posizione="' + i + '">' + esc(stato.parole[indice]) + '</button>';
  }
  if (stato.scelte.length === 0) {
    riga = '<span class="guida-ordina">Tocca le parole qui sotto: la frase si forma qui.</span>';
  } else if (stato.finale !== "") {
    riga += '<span class="punto-finale">' + stato.finale + '</span>';
  }
  el("riga-ordina").innerHTML = riga;

  var restanti = "";
  for (var j = 0; j < stato.ordine.length; j++) {
    var numero = stato.ordine[j];
    var usata = stato.scelte.indexOf(numero) !== -1;
    restanti += '<button type="button" class="tessera" data-numero="' + numero + '"';
    if (usata) {
      restanti += ' disabled';
    }
    restanti += '>' + esc(stato.parole[numero]) + '</button>';
  }
  el("parole-ordina").innerHTML = restanti;

  var daScegliere = el("parole-ordina").querySelectorAll(".tessera");
  for (var k = 0; k < daScegliere.length; k++) {
    daScegliere[k].addEventListener("click", sceltaTessera);
  }
  var scelte = el("riga-ordina").querySelectorAll(".tessera");
  for (var m = 0; m < scelte.length; m++) {
    scelte[m].addEventListener("click", toltaTessera);
  }
  el("controlla").disabled = stato.scelte.length !== stato.parole.length;
}

function sceltaTessera(evento) {
  if (sessione.esito !== null) {
    return;
  }
  var numero = Number(evento.currentTarget.getAttribute("data-numero"));
  sessione.ordina.scelte.push(numero);
  disegnaOrdina();
}

function toltaTessera(evento) {
  if (sessione.esito !== null) {
    return;
  }
  var posizione = Number(evento.currentTarget.getAttribute("data-posizione"));
  sessione.ordina.scelte.splice(posizione, 1);
  disegnaOrdina();
}

function controllaOrdina() {
  var esercizio = esercizioCorrente();
  var stato = sessione.ordina;
  var parole = [];
  for (var i = 0; i < stato.scelte.length; i++) {
    parole.push(stato.parole[stato.scelte[i]]);
  }
  var risposta = parole.join(" ") + stato.finale;
  var giuste = [esercizio.giusta];
  if (esercizio.altre) {
    for (var j = 0; j < esercizio.altre.length; j++) {
      giuste.push(esercizio.altre[j]);
    }
  }
  var esito = controllaRisposta(risposta, giuste);
  el("controlla").remove();
  var tessere = document.querySelectorAll(".tessera");
  for (var k = 0; k < tessere.length; k++) {
    tessere[k].disabled = true;
  }
  if (esito.giusta) {
    el("riga-ordina").classList.add("giusto");
  } else {
    el("riga-ordina").classList.add("sbagliato");
  }
  mostraEsito(esito.giusta, risposta, "", false);
}


/* ---------- Esito di una risposta ---------- */

function mostraEsito(giusta, risposta, nota, siPuoContestare) {
  var esercizio = esercizioCorrente();
  var voce = voceCorrente();
  sessione.esito = { giusta: giusta, risposta: risposta, contestata: false };
  sessione.esitoMostratoAlle = Date.now();
  var corretta = fraseCorretta(esercizio);

  var classeEsito = "esito-sbagliato";
  var titoloEsito = "Non proprio";
  if (giusta) {
    classeEsito = "esito-giusto";
    titoloEsito = "Giusto";
  }
  var html = '<div class="esito ' + classeEsito + '">';
  html += '<p class="titolo-esito">' + titoloEsito + '</p>';
  html += '<p class="frase-corretta"><span>' + esc(corretta) + '</span>' + pulsanteAudio(corretta) + '</p>';
  if (esercizio.tipo === "traduci" && esercizio.giuste.length > 1) {
    html += '<p class="altre-forme">Va bene anche: ';
    for (var i = 1; i < esercizio.giuste.length; i++) {
      if (i > 1) {
        html += ' / ';
      }
      html += esc(esercizio.giuste[i]);
    }
    html += '</p>';
  }
  if (esercizio.tipo === "scrivi" && esercizio.giuste.length > 1) {
    html += '<p class="altre-forme">Risposte accettate: ' + esc(esercizio.giuste.join(" / ")) + '</p>';
  }
  if (nota !== "") {
    html += '<p class="nota">' + esc(nota) + '</p>';
  }
  if (esercizio.perche) {
    html += '<p class="perche">' + esc(esercizio.perche) + '</p>';
  }
  html += '<div class="azioni-esito">';
  if (!giusta && siPuoContestare) {
    html += '<button type="button" class="testuale" id="era-giusta">La mia risposta era giusta</button>';
  }
  html += '<button type="button" class="testuale" id="rivedi-regola">Rivedi la regola</button>';
  html += '</div>';
  html += '<button type="button" class="primario largo" id="avanti">Avanti</button>';
  html += '</div>';
  el("riquadro-esito").innerHTML = html;

  el("avanti").addEventListener("click", avanti);
  el("rivedi-regola").addEventListener("click", function () {
    mostraRegola(voce.lezione);
  });
  if (el("era-giusta") !== null) {
    el("era-giusta").addEventListener("click", contestaEsito);
  }
  el("avanti").focus({ preventScroll: true });
  el("riquadro-esito").scrollIntoView({ behavior: "smooth", block: "nearest" });
  if (dati.impostazioni.leggiCorrezione) {
    parla(corretta);
  }
}

// Se la tua risposta era giusta ma diversa da quelle previste
function contestaEsito() {
  sessione.esito.giusta = true;
  sessione.esito.contestata = true;
  var riquadro = el("riquadro-esito").querySelector(".esito");
  riquadro.classList.remove("esito-sbagliato");
  riquadro.classList.add("esito-giusto");
  riquadro.querySelector(".titolo-esito").textContent = "Segnata come giusta";
  el("era-giusta").remove();
  var campo = el("risposta");
  if (campo !== null) {
    campo.classList.remove("sbagliato");
    campo.classList.add("giusto");
  }
}

function avanti() {
  // protezione dal doppio tocco: se la correzione è appena comparsa, non salto avanti
  if (Date.now() - sessione.esitoMostratoAlle < 350) {
    return;
  }
  var voce = voceCorrente();
  var giusta = sessione.esito.giusta;
  if (voce.primaVolta) {
    aggiornaCarta(voce.lezione, voce.indice, giusta);
    if (giusta) {
      sessione.giusteAlPrimo = sessione.giusteAlPrimo + 1;
    } else {
      sessione.sbagliate.push({ lezione: voce.lezione, indice: voce.indice, risposta: sessione.esito.risposta });
    }
  }
  if (!giusta && voce.ripetizioni < MASSIMO_RIPETIZIONI) {
    // l'esercizio sbagliato torna qualche passo più avanti, finché non lo fai giusto
    var copia = { lezione: voce.lezione, indice: voce.indice, primaVolta: false, ripetizioni: voce.ripetizioni + 1 };
    var dove = sessione.posizione + 4;
    if (dove > sessione.coda.length) {
      dove = sessione.coda.length;
    }
    sessione.coda.splice(dove, 0, copia);
  }
  registraGiornoDiStudio();
  salvaDati();
  sessione.posizione = sessione.posizione + 1;
  mostraEsercizio();
}


/* ---------- Fine della sessione ---------- */

function concludiSessione() {
  sessione.finita = true;
  if (sessione.tipo === "lezione") {
    var stato = dati.lezioni[sessione.lezione.id];
    if (stato === undefined) {
      stato = {};
      dati.lezioni[sessione.lezione.id] = stato;
    }
    stato.completata = true;
    stato.giusteAlPrimo = sessione.giusteAlPrimo;
    stato.totali = sessione.totali;
    salvaDati();
  }
  mostraFineSessione();
}

function mostraFineSessione() {
  var html = '<div class="fine-sessione">';
  html += '<h1>' + esc(sessione.titolo) + '</h1>';
  html += '<p class="punteggio"><strong>' + sessione.giusteAlPrimo + '</strong> su ' + sessione.totali + ' giuste al primo colpo</p>';

  if (sessione.tipo === "lezione") {
    html += '<p>Gli esercizi di questa lezione entrano nel ripasso: li ritroverai domani, poi tra 3 giorni, una settimana e così via. Ogni volta che li ricordi, il ripasso successivo arriva più tardi.</p>';
  } else if (sessione.tipo === "ripasso") {
    var restano = carteDaRipassare().length;
    if (restano > 0) {
      html += '<p>Restano ancora ' + restano + ' frasi da ripassare oggi.</p>';
    } else {
      html += '<p>Ripasso di oggi finito.</p>';
    }
  }

  if (sessione.sbagliate.length > 0) {
    html += '<h2>Da ricordare</h2><ul class="lista-errori">';
    for (var i = 0; i < sessione.sbagliate.length; i++) {
      var errore = sessione.sbagliate[i];
      var esercizio = errore.lezione.esercizi[errore.indice];
      var corretta = fraseCorretta(esercizio);
      html += '<li><span class="frase-errore">' + esc(corretta) + '</span>' + pulsanteAudio(corretta);
      if (esercizio.perche) {
        html += '<span class="perche-errore">' + esc(esercizio.perche) + '</span>';
      }
      html += '</li>';
    }
    html += '</ul>';
  }

  html += '<div class="azioni-fine">';
  if (sessione.tipo === "ripasso" && carteDaRipassare().length > 0) {
    html += '<button type="button" class="primario largo" id="altro-ripasso">Continua il ripasso</button>';
  }
  if (sessione.sbagliate.length > 0) {
    html += '<button type="button" class="secondario largo" id="ripeti-errori">Ripeti gli errori</button>';
  }
  var prossima = prossimaLezione();
  if (sessione.tipo === "lezione" && prossima !== null) {
    html += '<button type="button" class="primario largo" id="prossima">Prossima lezione: ' + esc(prossima.titolo) + '</button>';
  }
  html += '<button type="button" class="secondario largo" id="torna-home">Torna all\'inizio</button>';
  html += '</div></div>';
  disegna(html);

  if (el("altro-ripasso") !== null) {
    el("altro-ripasso").addEventListener("click", avviaRipasso);
  }
  if (el("ripeti-errori") !== null) {
    el("ripeti-errori").addEventListener("click", avviaErrori);
  }
  if (el("prossima") !== null) {
    el("prossima").addEventListener("click", function () {
      vaiA("#lezione/" + prossima.id);
    });
  }
  el("torna-home").addEventListener("click", function () {
    vaiA("#home");
  });
}


/* ---------- Impostazioni ---------- */

function opzioneRadio(nome, valore, etichetta, attuale) {
  var html = '<label class="scelta-radio"><input type="radio" name="' + nome + '" value="' + valore + '"';
  if (String(attuale) === String(valore)) {
    html += ' checked';
  }
  html += '> ' + etichetta + '</label>';
  return html;
}

function mostraImpostazioni() {
  var imp = dati.impostazioni;
  var html = '<a class="indietro" href="#home">Indietro</a>';
  html += '<article class="lezione pagina impostazioni">';
  html += '<h1>Impostazioni</h1>';

  html += '<fieldset><legend>Accento della voce</legend>';
  html += opzioneRadio("accento", "en-GB", "Britannico", imp.accento);
  html += opzioneRadio("accento", "en-US", "Americano", imp.accento);
  html += '</fieldset>';

  html += '<fieldset><legend>Velocità della voce</legend>';
  html += opzioneRadio("velocita", "0.75", "Lenta", imp.velocita);
  html += opzioneRadio("velocita", "0.9", "Un po\' lenta", imp.velocita);
  html += opzioneRadio("velocita", "1", "Normale", imp.velocita);
  html += '</fieldset>';
  html += '<button type="button" class="secondario" id="prova-voce">Prova la voce</button>';
  html += '<label class="opzione-piccola"><input type="checkbox" id="leggi-correzione"';
  if (imp.leggiCorrezione) {
    html += ' checked';
  }
  html += '> Leggi ad alta voce la frase corretta dopo ogni risposta</label>';

  html += '<fieldset><legend>Frasi per ogni ripasso</legend>';
  html += opzioneRadio("perRipasso", "10", "10", imp.perRipasso);
  html += opzioneRadio("perRipasso", "20", "20", imp.perRipasso);
  html += opzioneRadio("perRipasso", "30", "30", imp.perRipasso);
  html += '</fieldset>';

  html += '<h2>I tuoi progressi</h2>';
  html += '<p>I progressi restano solo su questo telefono, nella memoria del browser. Salva ogni tanto una copia: se cambi telefono o cancelli i dati del browser, la puoi ripristinare.</p>';
  html += '<p class="nota-piccola">Su iPhone, l\'app aggiunta alla schermata Home e Safari hanno memorie separate: usa sempre la stessa.</p>';
  html += '<div class="azioni-colonna">';
  html += '<button type="button" class="secondario largo" id="esporta">Salva una copia</button>';
  html += '<label class="secondario largo bottone-file">Ripristina una copia<input type="file" id="importa" accept=".json,application/json"></label>';
  html += '<button type="button" class="pericolo largo" id="azzera">Cancella tutti i progressi</button>';
  html += '</div>';
  html += '<p class="messaggio" id="messaggio-dati" aria-live="polite"></p>';
  html += '<p class="nota-piccola">Versione ' + VERSIONE_APP + '. ' + LEZIONI.length + ' lezioni, ' + contaEsercizi() + ' esercizi.</p>';
  html += '</article>';
  disegna(html);

  var radio = document.querySelectorAll(".impostazioni input[type=radio]");
  for (var i = 0; i < radio.length; i++) {
    radio[i].addEventListener("change", cambiaImpostazione);
  }
  el("leggi-correzione").addEventListener("change", function () {
    dati.impostazioni.leggiCorrezione = el("leggi-correzione").checked;
    salvaDati();
  });
  el("prova-voce").addEventListener("click", function () {
    parla("Hello! I have been learning English step by step.");
  });
  el("esporta").addEventListener("click", esportaDati);
  el("importa").addEventListener("change", importaDati);
  confermaConDoppioTocco(el("azzera"), "Tocca ancora per cancellare tutto", function () {
    dati = datiVuoti();
    salvaDati();
    el("messaggio-dati").textContent = "Progressi cancellati.";
  });
}

function cambiaImpostazione(evento) {
  var campo = evento.currentTarget;
  if (campo.name === "accento") {
    dati.impostazioni.accento = campo.value;
  } else if (campo.name === "velocita") {
    dati.impostazioni.velocita = Number(campo.value);
  } else if (campo.name === "perRipasso") {
    dati.impostazioni.perRipasso = Number(campo.value);
  }
  salvaDati();
}

function contaEsercizi() {
  var totale = 0;
  for (var i = 0; i < LEZIONI.length; i++) {
    totale = totale + LEZIONI[i].esercizi.length;
  }
  return totale;
}

function esportaDati() {
  var testo = JSON.stringify(dati, null, 1);
  var file = new Blob([testo], { type: "application/json" });
  var collegamento = document.createElement("a");
  collegamento.href = URL.createObjectURL(file);
  collegamento.download = "inglese-passo-passo-copia-" + dataDiOggiInTesto() + ".json";
  document.body.appendChild(collegamento);
  collegamento.click();
  document.body.removeChild(collegamento);
  el("messaggio-dati").textContent = "Copia salvata nei download.";
}

function importaDati(evento) {
  var file = evento.currentTarget.files[0];
  if (!file) {
    return;
  }
  var lettore = new FileReader();
  lettore.onload = function () {
    var letti = null;
    try {
      letti = JSON.parse(lettore.result);
    } catch (errore) {
      letti = null;
    }
    if (letti === null || typeof letti !== "object" || letti.carte === undefined) {
      el("messaggio-dati").textContent = "Questo file non è una copia di Inglese passo passo.";
      return;
    }
    completaDati(letti);
    dati = letti;
    salvaDati();
    el("messaggio-dati").textContent = "Copia ripristinata: " + Object.keys(dati.carte).length + " esercizi nei ripassi.";
  };
  lettore.readAsText(file);
}


document.addEventListener("DOMContentLoaded", avvio);
