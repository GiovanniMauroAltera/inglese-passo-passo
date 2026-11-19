/* Controllo automatico delle lezioni e della correzione delle risposte.
   Si lancia dalla cartella dell'app con:  node controlli/controllo_contenuti.js
   Se tutto va bene stampa "Nessun problema". Con l'opzione --elenco scrive anche
   tutte le frasi corrette in controlli/elenco_frasi.txt, per rileggerle. */

var fs = require("fs");
var path = require("path");
var vm = require("vm");

var cartella = path.join(__dirname, "..");
var problemi = [];
var controlliFatti = 0;

function problema(dove, testo) {
  problemi.push(dove + ": " + testo);
}

function controlla(condizione, dove, testo) {
  controlliFatti = controlliFatti + 1;
  if (!condizione) {
    problema(dove, testo);
  }
}

// Carico i file dell'app in un ambiente finto (senza browser)
var ambiente = {
  LEZIONI: [],
  document: { addEventListener: function () {} },
  window: {},
  navigator: {},
  localStorage: { getItem: function () { return null; }, setItem: function () {} },
  console: console
};
vm.createContext(ambiente);
var files = ["lezioni/a1.js", "lezioni/a2.js", "lezioni/b1.js", "lezioni/b2.js", "pagine.js", "app.js"];
for (var f = 0; f < files.length; f++) {
  var codice = fs.readFileSync(path.join(cartella, files[f]), "utf8");
  vm.runInContext(codice, ambiente, { filename: files[f] });
}
var LEZIONI = ambiente.LEZIONI;
ambiente.dati = ambiente.datiVuoti();


/* ---------- 1. Prove sulla correzione delle risposte ---------- */

function deveAccettare(risposta, giuste, dove) {
  var esito = ambiente.controllaRisposta(risposta, giuste);
  controlla(esito.giusta, dove, "dovrebbe accettare \"" + risposta + "\" (giuste: " + giuste.join(" | ") + ")");
}

function deveRifiutare(risposta, giuste, dove) {
  var esito = ambiente.controllaRisposta(risposta, giuste);
  controlla(!esito.giusta, dove, "NON dovrebbe accettare \"" + risposta + "\" (giuste: " + giuste.join(" | ") + ")");
}

var prove = "prove di correzione";
deveAccettare("I'm cold", ["I am cold"], prove);
deveAccettare("I am cold", ["I'm cold"], prove);
deveAccettare("i’m COLD.", ["I am cold"], prove);
deveAccettare("  doesn't   drink ", ["doesn't drink"], prove);
deveAccettare("does not drink", ["doesn't drink"], prove);
deveAccettare("doesn’t drink", ["does not drink"], prove);
deveAccettare("He's been to Paris", ["He has been to Paris"], prove);
deveAccettare("She's tired", ["She is tired"], prove);
deveAccettare("I'd like a coffee", ["I would like a coffee"], prove);
deveAccettare("If I'd known", ["If I had known"], prove);
deveAccettare("I can't", ["I cannot"], prove);
deveAccettare("I can not", ["I can't"], prove);
deveAccettare("won't tell", ["will not tell"], prove);
deveAccettare("Marco's bag", ["Marco's bag"], prove);
deveAccettare("Yes I am", ["Yes, I am."], prove);
deveRifiutare("He has going", ["He is going"], prove);
deveRifiutare("work", ["works"], prove);
deveRifiutare("she work", ["she works"], prove);
deveRifiutare("", ["works"], prove);
deveRifiutare("have seen", ["saw"], prove);
deveRifiutare("I would have", ["I had"], prove);
// apostrofo dimenticato: accettata ma con una nota
var senzaApostrofo = ambiente.controllaRisposta("doesnt drink", ["doesn't drink"]);
controlla(senzaApostrofo.giusta && senzaApostrofo.nota !== "", prove, "\"doesnt\" dovrebbe essere accettato con una nota sull'apostrofo");


/* ---------- 2. Forme contratte e sciolte sulle risposte vere ---------- */

var CONTRAZIONI = [
  ["do not", "don't"], ["does not", "doesn't"], ["did not", "didn't"],
  ["is not", "isn't"], ["are not", "aren't"], ["was not", "wasn't"], ["were not", "weren't"],
  ["have not", "haven't"], ["has not", "hasn't"], ["had not", "hadn't"],
  ["will not", "won't"], ["would not", "wouldn't"], ["could not", "couldn't"],
  ["should not", "shouldn't"], ["must not", "mustn't"], ["cannot", "can't"],
  ["I am", "I'm"], ["you are", "you're"], ["we are", "we're"], ["they are", "they're"],
  ["it is", "it's"], ["he is", "he's"], ["she is", "she's"], ["that is", "that's"],
  ["I have", "I've"], ["you have", "you've"], ["we have", "we've"],
  ["I will", "I'll"], ["you will", "you'll"], ["we will", "we'll"],
  ["I would", "I'd"], ["I had", "I'd"], ["he has", "he's"], ["she has", "she's"]
];

function sostituisciParole(testo, da, a) {
  // sostituisce solo parole intere, senza badare alle maiuscole
  var parole = testo.split(" ");
  var pezziDa = da.split(" ");
  var risultato = [];
  var i = 0;
  var cambiato = false;
  while (i < parole.length) {
    var uguale = true;
    for (var k = 0; k < pezziDa.length; k++) {
      var parola = parole[i + k];
      if (parola === undefined || parola.toLowerCase() !== pezziDa[k].toLowerCase()) {
        uguale = false;
        break;
      }
    }
    if (uguale) {
      risultato.push(a);
      i = i + pezziDa.length;
      cambiato = true;
    } else {
      risultato.push(parole[i]);
      i = i + 1;
    }
  }
  if (!cambiato) {
    return null;
  }
  return risultato.join(" ");
}

function provaContrazioni(giusta, giuste, dove) {
  for (var c = 0; c < CONTRAZIONI.length; c++) {
    var lunga = CONTRAZIONI[c][0];
    var corta = CONTRAZIONI[c][1];
    var versione = sostituisciParole(giusta, lunga, corta);
    if (versione !== null) {
      deveAccettare(versione, giuste, dove + " (forma contratta)");
    }
    var sciolta = sostituisciParole(giusta, corta, lunga);
    if (sciolta !== null) {
      deveAccettare(sciolta, giuste, dove + " (forma sciolta)");
    }
  }
}


/* ---------- 3. Controllo di ogni lezione e di ogni esercizio ---------- */

var LIVELLI_VALIDI = ["A1", "A2", "B1", "B2"];
var TIPI_VALIDI = ["scrivi", "scegli", "errore", "traduci", "ordina"];
var idVisti = {};
var contaTipi = {};
var contaLivelli = {};
var totaleEsercizi = 0;
var elenco = [];

function contaPezzi(testo, pezzo) {
  return testo.split(pezzo).length - 1;
}

// Controlla che i tag HTML principali si aprano e si chiudano
function controllaHtml(html, dove) {
  var tag = ["div", "p", "table", "tr", "td", "th", "ul", "li", "span", "h2", "h3", "em", "strong", "small"];
  for (var t = 0; t < tag.length; t++) {
    var aperti = contaPezzi(html, "<" + tag[t] + ">") + contaPezzi(html, "<" + tag[t] + " ");
    var chiusi = contaPezzi(html, "</" + tag[t] + ">");
    controlla(aperti === chiusi, dove, "tag <" + tag[t] + "> aperti " + aperti + ", chiusi " + chiusi);
  }
}

// Nelle soluzioni le forme 's e 'd dopo un pronome vanno scritte per intero
// (es. "he is", "I would"), altrimenti la correzione potrebbe accettare forme sbagliate.
function controllaFormeAmbigue(testo, dove) {
  var pronomi = ["i", "you", "he", "she", "it", "we", "they", "that", "there", "what", "who", "where", "how", "here"];
  var parole = ambiente.normalizza(testo).split(" ");
  for (var p = 0; p < parole.length; p++) {
    for (var q = 0; q < pronomi.length; q++) {
      if (parole[p] === pronomi[q] + "'s" || parole[p] === pronomi[q] + "'d") {
        problema(dove, "nella soluzione \"" + testo + "\" scrivi per intero \"" + parole[p] + "\"");
      }
    }
  }
}

for (var l = 0; l < LEZIONI.length; l++) {
  var lezione = LEZIONI[l];
  var nome = "lezione " + (l + 1) + " (" + lezione.id + ")";
  controlla(typeof lezione.id === "string" && lezione.id !== "", nome, "manca l'id");
  controlla(idVisti[lezione.id] === undefined, nome, "id ripetuto");
  idVisti[lezione.id] = true;
  controlla(LIVELLI_VALIDI.indexOf(lezione.livello) !== -1, nome, "livello non valido: " + lezione.livello);
  controlla(typeof lezione.titolo === "string" && lezione.titolo !== "", nome, "manca il titolo");
  controlla(typeof lezione.sottotitolo === "string" && lezione.sottotitolo !== "", nome, "manca il sottotitolo");
  controlla(typeof lezione.spiegazione === "string" && lezione.spiegazione.length > 300, nome, "spiegazione mancante o troppo corta");
  controlla(typeof lezione.tempi === "boolean", nome, "manca il campo tempi (true/false)");
  controlla(lezione.esercizi.length >= 12, nome, "meno di 12 esercizi");
  controllaHtml(lezione.spiegazione, nome);
  if (contaLivelli[lezione.livello] === undefined) {
    contaLivelli[lezione.livello] = 0;
  }
  contaLivelli[lezione.livello] = contaLivelli[lezione.livello] + 1;
  elenco.push("");
  elenco.push("=== " + (l + 1) + ". " + lezione.titolo + " (" + lezione.livello + ")");

  for (var e = 0; e < lezione.esercizi.length; e++) {
    var es = lezione.esercizi[e];
    var dove = nome + ", esercizio " + (e + 1);
    totaleEsercizi = totaleEsercizi + 1;
    controlla(TIPI_VALIDI.indexOf(es.tipo) !== -1, dove, "tipo non valido: " + es.tipo);
    if (contaTipi[es.tipo] === undefined) {
      contaTipi[es.tipo] = 0;
    }
    contaTipi[es.tipo] = contaTipi[es.tipo] + 1;
    controlla(typeof es.perche === "string" && es.perche.length > 5, dove, "manca la spiegazione (perche)");

    if (es.tipo === "scrivi") {
      controlla(contaPezzi(es.frase, "___") === 1, dove, "la frase deve avere un solo ___");
      controlla(Array.isArray(es.giuste) && es.giuste.length > 0, dove, "mancano le risposte giuste");
      var parti = es.frase.split("___");
      var frasiIntere = [];
      for (var g = 0; g < es.giuste.length; g++) {
        controlla(es.giuste[g].trim() === es.giuste[g] && es.giuste[g] !== "", dove, "risposta vuota o con spazi: \"" + es.giuste[g] + "\"");
        controllaFormeAmbigue(es.giuste[g], dove);
        deveAccettare(es.giuste[g], es.giuste, dove);
        provaContrazioni(es.giuste[g], es.giuste, dove);
        frasiIntere.push(parti[0] + es.giuste[g] + parti[1]);
      }
      // anche la frase intera deve passare (come fa l'app)
      var tutte = es.giuste.concat(frasiIntere);
      deveAccettare(frasiIntere[0], tutte, dove + " (frase intera)");
      // il verbo dell'aiuto, se diverso dalle soluzioni, deve essere rifiutato
      if (es.aiuto && es.aiuto.indexOf(",") === -1 && es.aiuto.indexOf("/") === -1) {
        var accettato = false;
        for (var h = 0; h < es.giuste.length; h++) {
          if (ambiente.normalizza(es.giuste[h]) === ambiente.normalizza(es.aiuto)) {
            accettato = true;
          }
        }
        if (!accettato) {
          deveRifiutare(es.aiuto, tutte, dove + " (verbo dell'aiuto)");
        }
      }
      elenco.push("[scrivi] " + ambiente.fraseCorretta(es) + "    <- " + es.giuste.join(" / "));
    }

    if (es.tipo === "scegli") {
      controlla(Array.isArray(es.opzioni) && es.opzioni.length >= 2, dove, "servono almeno 2 opzioni");
      controlla(es.opzioni.indexOf(es.giusta) !== -1, dove, "la risposta giusta non è tra le opzioni");
      var visteOpzioni = {};
      for (var o = 0; o < es.opzioni.length; o++) {
        controlla(visteOpzioni[es.opzioni[o]] === undefined, dove, "opzione ripetuta: " + es.opzioni[o]);
        visteOpzioni[es.opzioni[o]] = true;
      }
      controlla(contaPezzi(es.frase, "___") <= 1, dove, "al massimo un ___");
      var piena = ambiente.fraseCorretta(es);
      controlla(piena.indexOf("—") === -1 && piena.indexOf("  ") === -1 && piena.indexOf("___") === -1, dove, "frase corretta sbagliata: " + piena);
      elenco.push("[scegli] " + piena + "    (tra: " + es.opzioni.join(", ") + ")");
    }

    if (es.tipo === "errore") {
      controlla(contaPezzi(es.frase, "[") === contaPezzi(es.frase, "]") && contaPezzi(es.frase, "[") >= 1, dove, "parentesi quadre mancanti o sbilanciate");
      var parole = ambiente.paroleErrore(es.frase);
      var sbagliate = 0;
      var ricostruita = [];
      for (var w = 0; w < parole.length; w++) {
        if (parole[w].sbagliata) {
          sbagliate = sbagliate + 1;
        }
        ricostruita.push(parole[w].testo);
      }
      var senzaParentesi = es.frase.split("[").join("").split("]").join("");
      controlla(sbagliate >= 1 && sbagliate < parole.length, dove, "parole sbagliate segnate: " + sbagliate + " su " + parole.length);
      controlla(ricostruita.join(" ") === senzaParentesi, dove, "le parole non ricompongono la frase");
      controlla(typeof es.corretta === "string" && es.corretta !== senzaParentesi, dove, "la frase corretta manca o è uguale a quella sbagliata");
      elenco.push("[errore] " + senzaParentesi + "  ->  " + es.corretta);
    }

    if (es.tipo === "traduci") {
      controlla(typeof es.italiano === "string" && es.italiano !== "", dove, "manca la frase italiana");
      controlla(Array.isArray(es.giuste) && es.giuste.length > 0, dove, "mancano le traduzioni giuste");
      for (var t = 0; t < es.giuste.length; t++) {
        controllaFormeAmbigue(es.giuste[t], dove);
        deveAccettare(es.giuste[t], es.giuste, dove);
        provaContrazioni(es.giuste[t], es.giuste, dove);
      }
      elenco.push("[traduci] " + es.italiano + "  ->  " + es.giuste.join(" | "));
    }

    if (es.tipo === "ordina") {
      var giusta = es.giusta;
      var ultimo = giusta.charAt(giusta.length - 1);
      controlla(ultimo === "?" || ultimo === "." || ultimo === "!", dove, "la frase deve finire con . ? oppure !");
      // rifaccio quello che fa l'app: tolgo il punto finale e metto minuscola la prima parola
      var corpo = giusta.substring(0, giusta.length - 1);
      var tessere = corpo.split(" ");
      controlla(tessere.length >= 3, dove, "troppo poche parole da riordinare");
      tessere[0] = ambiente.minuscolaIniziale(tessere[0]);
      var accettate = [giusta];
      if (es.altre) {
        for (var a = 0; a < es.altre.length; a++) {
          accettate.push(es.altre[a]);
        }
      }
      deveAccettare(tessere.join(" ") + ultimo, accettate, dove + " (riordino)");
      elenco.push("[ordina] " + giusta);
    }
  }
}

/* ---------- 4. Ripassi distanziati ---------- */

var giornoFinto = 20000;
ambiente.oggi = function () {
  return giornoFinto;
};
ambiente.dati = ambiente.datiVuoti();
var primaLezione = LEZIONI[0];
var srs = "ripassi distanziati";
ambiente.aggiornaCarta(primaLezione, 0, true);
var carta = ambiente.dati.carte[primaLezione.id + ":0"];
controlla(carta.scatola === 1 && carta.scadenza === giornoFinto + 1, srs, "nuova giusta: scatola 1, domani (ho " + carta.scatola + ", +" + (carta.scadenza - giornoFinto) + ")");
ambiente.aggiornaCarta(primaLezione, 0, true);
controlla(carta.scatola === 1, srs, "rifatta giusta lo stesso giorno non deve salire");
giornoFinto = giornoFinto + 1;
ambiente.aggiornaCarta(primaLezione, 0, true);
controlla(carta.scatola === 2 && carta.scadenza === giornoFinto + 3, srs, "giusta al ripasso: scatola 2, tra 3 giorni");
giornoFinto = giornoFinto + 3;
ambiente.aggiornaCarta(primaLezione, 0, true);
controlla(carta.scatola === 3 && carta.scadenza === giornoFinto + 7, srs, "scatola 3, tra 7 giorni");
giornoFinto = giornoFinto + 7;
ambiente.aggiornaCarta(primaLezione, 0, false);
controlla(carta.scatola === 0 && carta.scadenza === giornoFinto + 1, srs, "sbagliata: scatola 0, domani");
controlla(carta.viste === 5 && carta.giuste === 4 && carta.sbagliate === 1, srs, "contatori viste/giuste/sbagliate");
for (var s = 0; s < 12; s++) {
  giornoFinto = carta.scadenza;
  ambiente.aggiornaCarta(primaLezione, 0, true);
}
controlla(carta.scatola === 7 && carta.scadenza === giornoFinto + 120, srs, "la scatola massima è 7, ogni 120 giorni");
var daRipassare = ambiente.carteDaRipassare();
controlla(daRipassare.length === 0, srs, "oggi non deve esserci niente da ripassare");
giornoFinto = carta.scadenza;
controlla(ambiente.carteDaRipassare().length === 1, srs, "il giorno della scadenza la carta torna nel ripasso");

/* ---------- Risultato ---------- */

console.log("Lezioni: " + LEZIONI.length + " (" + JSON.stringify(contaLivelli) + ")");
console.log("Esercizi: " + totaleEsercizi + " " + JSON.stringify(contaTipi));
console.log("Controlli eseguiti: " + controlliFatti);
if (process.argv.indexOf("--elenco") !== -1) {
  fs.writeFileSync(path.join(__dirname, "elenco_frasi.txt"), elenco.join("\n"), "utf8");
  console.log("Elenco delle frasi scritto in controlli/elenco_frasi.txt");
}
if (problemi.length === 0) {
  console.log("Nessun problema.");
} else {
  console.log("PROBLEMI TROVATI: " + problemi.length);
  for (var n = 0; n < problemi.length; n++) {
    console.log(" - " + problemi[n]);
  }
  process.exitCode = 1;
}
