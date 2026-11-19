/* Service worker: fa funzionare l'app anche senza internet.
   Prima prova a scaricare la versione nuova; se non c'è rete usa la copia salvata. */

var NOME_CACHE = "inglese-passo-passo-3";

var FILE_DELL_APP = [
  "./",
  "./index.html",
  "./stile.css?v=3",
  "./app.js?v=3",
  "./pagine.js?v=3",
  "./lezioni/a1.js?v=3",
  "./lezioni/a2.js?v=3",
  "./lezioni/b1.js?v=3",
  "./lezioni/b2.js?v=3",
  "./manifest.json",
  "./icone/icona-192.png",
  "./icone/icona-512.png"
];

self.addEventListener("install", function (evento) {
  evento.waitUntil(
    caches.open(NOME_CACHE).then(function (cache) {
      return cache.addAll(FILE_DELL_APP);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function (evento) {
  evento.waitUntil(
    caches.keys().then(function (nomi) {
      var cancellazioni = [];
      for (var i = 0; i < nomi.length; i++) {
        if (nomi[i] !== NOME_CACHE) {
          cancellazioni.push(caches.delete(nomi[i]));
        }
      }
      return Promise.all(cancellazioni);
    })
  );
  self.clients.claim();
});

function eUnCarattere(indirizzo) {
  return indirizzo.indexOf("https://fonts.googleapis.com/") === 0 || indirizzo.indexOf("https://fonts.gstatic.com/") === 0;
}

self.addEventListener("fetch", function (evento) {
  var richiesta = evento.request;
  if (richiesta.method !== "GET") {
    return;
  }
  var indirizzo = richiesta.url;

  // i caratteri di Google non cambiano: prima la copia salvata
  if (eUnCarattere(indirizzo)) {
    evento.respondWith(
      caches.match(richiesta).then(function (salvata) {
        if (salvata) {
          return salvata;
        }
        return fetch(richiesta).then(function (risposta) {
          var copia = risposta.clone();
          caches.open(NOME_CACHE).then(function (cache) {
            cache.put(richiesta, copia);
          });
          return risposta;
        });
      })
    );
    return;
  }

  if (indirizzo.indexOf(self.location.origin) !== 0) {
    return;
  }

  // i file dell'app: prima la rete (per avere sempre l'ultima versione), poi la copia.
  // "no-cache" obbliga il browser a chiedere al sito se il file è cambiato,
  // invece di usare per 10 minuti la copia vecchia che tiene in memoria.
  evento.respondWith(
    fetch(new Request(richiesta, { cache: "no-cache" })).then(function (risposta) {
      if (risposta.ok) {
        var copia = risposta.clone();
        caches.open(NOME_CACHE).then(function (cache) {
          cache.put(richiesta, copia);
        });
      }
      return risposta;
    }).catch(function () {
      return caches.match(richiesta).then(function (salvata) {
        if (salvata) {
          return salvata;
        }
        return caches.match("./index.html");
      });
    })
  );
});
