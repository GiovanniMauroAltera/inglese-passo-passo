# Inglese passo passo

Un'app per imparare bene la grammatica inglese partendo dalle basi, pensata per chi parla italiano. Si usa dal telefono, è gratuita, funziona anche senza internet e non chiede nessun account.

**Apri l'app:** https://giovannimauroaltera.github.io/inglese-passo-passo/

## Cosa c'è dentro

- 29 lezioni divise in quattro livelli (A1, A2, B1, B2): dal verbo *to be* fino al periodo ipotetico del terzo tipo, al discorso indiretto e alle trappole tipiche per gli italiani.
- 482 esercizi di cinque tipi: completare la frase, scegliere la forma giusta, trovare l'errore, tradurre (anche a voce) e mettere le parole in ordine.
- Una spiegazione breve in italiano per ogni lezione, con gli esempi da ascoltare e il riquadro «Errori da italiani».
- Il ripasso di ogni giorno, che ti ripropone le frasi poco prima che tu le dimentichi.
- L'allenamento misto, che mescola gli argomenti (si può limitare ai soli tempi verbali).
- Una scheda con tutti i tempi verbali in una pagina.

## Il metodo

L'app mette insieme le tecniche che negli studi hanno funzionato meglio:

1. **Prima la regola, spiegata chiaramente** (Norris e Ortega 2000; Spada e Tomita 2010).
2. **Mettersi alla prova invece di rileggere**: quasi tutti gli esercizi chiedono di scrivere (Karpicke e Roediger 2008; Dunlosky e altri 2013).
3. **Correzione subito, con il perché** (Li 2010; Lyster e Saito 2010).
4. **Ripassi distanziati**: ogni frase torna dopo 1, 3, 7, 14, 30, 60 e 120 giorni; se sbagli, torna il giorno dopo.
5. **Argomenti mescolati** per imparare a scegliere il tempo giusto (Nakata e Suzuki 2019; Pan e altri 2025).

Le fonti complete sono nella pagina «Come funziona il metodo» dell'app, e il progetto iniziale è in [PROGETTO.md](PROGETTO.md).

## Come metterla sul telefono

- **Android (Chrome):** apri il link, tocca i tre puntini in alto a destra e poi «Aggiungi a schermata Home» (o «Installa app»).
- **iPhone (Safari):** apri il link, tocca il pulsante Condividi e poi «Aggiungi alla schermata Home».

Così si apre come una normale app, a schermo intero, e funziona anche offline.

## Dove finiscono i progressi

Restano solo sul telefono, nella memoria del browser. Nessuno li vede e non vanno su internet. Ogni tanto conviene usare «Salva una copia» nelle impostazioni: se cambi telefono o cancelli i dati del browser, con «Ripristina una copia» li recuperi.

Su iPhone l'app aggiunta alla schermata Home e Safari hanno due memorie separate, quindi conviene usare sempre la stessa.

## Come è fatta

È un sito statico, senza server: HTML, CSS e JavaScript, scritto in modo semplice (funzioni con un nome, cicli for e if).

- `index.html`, `stile.css`, `app.js`: la pagina, la grafica e la logica.
- `lezioni/a1.js`, `a2.js`, `b1.js`, `b2.js`: le spiegazioni e gli esercizi di ogni livello.
- `pagine.js`: le pagine «Come funziona il metodo» e «Tutti i tempi verbali».
- `sw.js` e `manifest.json`: servono per l'uso offline e per installarla sul telefono.
- `controlli/controllo_contenuti.js`: il controllo automatico.

### Modificare o aggiungere esercizi

Gli esercizi nuovi vanno aggiunti **in fondo** a ogni lezione, perché i progressi sono salvati in base alla posizione dell'esercizio. Dopo ogni modifica si lancia il controllo:

```
node controlli/controllo_contenuti.js
```

Il controllo verifica ogni lezione e ogni esercizio: che le risposte giuste vengano accettate anche nelle forme contratte (*don't* e *do not*), che i verbi sbagliati vengano rifiutati e che i ripassi seguano gli intervalli giusti. Con `--elenco` scrive anche tutte le frasi corrette in un file da rileggere.
