# Progetto dell'app "Inglese passo passo"

## 1. Cosa dice la ricerca (e cosa ne prendo)

Ho cercato gli studi più solidi su come si impara la grammatica di una seconda lingua. Ecco i risultati, con quello che ne ricavo per l'app.

| Risultato | Studi | Cosa fa l'app |
|---|---|---|
| Spiegare la regola in modo esplicito funziona meglio che lasciarla "scoprire" da soli, sia per le regole semplici sia per quelle complesse, e aiuta anche l'uso spontaneo. | Norris & Ortega 2000 (meta-analisi, 49 campioni); Spada & Tomita 2010 (meta-analisi, 41 studi) | Ogni lezione inizia con una spiegazione breve e chiara in italiano, con tabelle ed esempi. |
| Recuperare dalla memoria (fare esercizi, "mettersi alla prova") fissa molto più che rileggere. È una delle due tecniche di studio più efficaci in assoluto. | Karpicke & Roediger 2008 (Science); Dunlosky et al. 2013 | Quasi tutti gli esercizi chiedono di **scrivere** la risposta, non solo di riconoscerla. |
| La correzione serve, e quella esplicita con la spiegazione della regola aiuta di più per le cose difficili (articoli, periodo ipotetico). | Li 2010; Lyster & Saito 2010 (meta-analisi) | Dopo ogni risposta: giusto/sbagliato subito, la frase corretta e il **perché**. |
| Distribuire lo studio nel tempo (ripassi distanziati) è l'altra tecnica più efficace. Per la grammatica, però, gli studi non sono d'accordo sulla distanza ideale tra un ripasso e l'altro. | Dunlosky et al. 2013; Suzuki & DeKeyser 2017; Kasprowicz et al. 2019; Bird 2010 | Ripasso quotidiano con intervalli che crescono (1, 3, 7, 14, 30, 60, 120 giorni). Se sbagli, l'esercizio torna presto. Niente promesse di intervalli "magici". |
| Mescolare esercizi di argomenti diversi (interleaving) aiuta a ricordare a lungo **quale tempo verbale scegliere**. È stato dimostrato proprio sui tempi verbali inglesi e su quelli delle lingue romanze. | Nakata & Suzuki 2019 (tempi inglesi); Pan et al. 2025 (4 esperimenti) | Prima si impara un argomento alla volta (lezione), poi i ripassi e l'"Allenamento misto" mescolano tutto. |
| Una regola diventa automatica in tre fasi: la capisci, la usi con attenzione, la usi tanto finché diventa automatica. | DeKeyser (Skill Acquisition Theory) | Ogni lezione segue le tre fasi: **Capire → Esercitarsi → Ripassare e parlare**. |
| Gli italiani fanno errori tipici perché trasferiscono l'italiano: present perfect al posto del past simple (dal passato prossimo), "I live here since 2010" (dal "da"), articoli in più o in meno, "people is". | Franceschi 2010 (studenti universitari italiani) e materiali didattici | Ogni lezione ha il riquadro "Attenzione, errori da italiani" ed esercizi "trova l'errore". |
| Le difficoltà "utili" (dover produrre, dover scegliere) fanno fatica ma fanno imparare di più. | Suzuki, Nakata & DeKeyser 2019 | Pochi esercizi a scelta multipla, molti da scrivere, traduzioni e frasi da dire a voce. |

Ordine degli argomenti: segue i livelli europei (A1 → A2 → B1 → B2), come nell'English Grammar Profile di Cambridge, che descrive quando gli studenti veri iniziano a usare ogni struttura.

## 2. Come funziona l'app

**Schermata principale**
- Il "Ripasso di oggi" con il numero di esercizi da ripassare.
- Il pulsante "Prossima lezione".
- L'"Allenamento misto" (tutti gli argomenti già studiati mescolati).
- Il percorso diviso per livelli, con una barra di avanzamento per ogni lezione.
- I giorni di fila in cui hai studiato.

**Una lezione**
1. *Capire*: spiegazione, tabella, esempi (con il pulsante per ascoltarli) e gli errori tipici degli italiani.
2. *Esercitarsi*: 12–20 esercizi, dai più facili ai più difficili. Quelli sbagliati tornano alla fine della sessione finché non li fai giusti.
3. Alla fine: punteggio, elenco degli errori con la correzione. Gli esercizi entrano nel ripasso.

**Tipi di esercizio**
- *Scrivi*: completa la frase con la forma giusta (es. "She ___ (live) here since 2019").
- *Scegli*: scelta tra 2–4 opzioni, solo dove serve distinguere (since/for, say/tell).
- *Trova l'errore*: tocchi la parola sbagliata, poi vedi la frase corretta.
- *Traduci*: dall'italiano all'inglese, scrivendo o **parlando** col microfono.
- *Riordina*: tocchi le parole nell'ordine giusto (ordine delle domande, degli avverbi).

**Correzione delle risposte**
- Non conta maiuscole, spazi, punto finale e apostrofi "storti" della tastiera del telefono.
- "I'm" e "I am", "doesn't" e "does not", "he's been" e "he has been" valgono uguale.
- Se la tua risposta è giusta ma diversa da quelle previste, c'è il pulsante "Era giusta anche la mia".

**Ripasso (ripetizione distanziata)**
- Ogni esercizio ha una "scatola" da 0 a 7. Se rispondi giusto sale di una scatola e torna dopo più giorni (1, 3, 7, 14, 30, 60, 120). Se sbagli torna alla scatola 1 e lo rivedi domani.
- Il ripasso di oggi mescola gli argomenti e propone 20 esercizi alla volta.

**Voce**
- Ascolto: ogni esempio e ogni frase corretta si può ascoltare (sintesi vocale del telefono, inglese britannico o americano a scelta).
- Parlato: nelle traduzioni c'è il microfono, se il telefono lo supporta. Puoi anche usare la dettatura della tastiera.

**Dati e privacy**
- Tutto resta sul telefono (memoria del browser). Nessun account, nessun server, gratis.
- C'è "Salva una copia" / "Ripristina una copia" per non perdere i progressi.

## 3. Scelte tecniche

- Sito statico (HTML, CSS, JavaScript) su GitHub Pages: gratis, nessun server.
- Installabile sul telefono come app ("Aggiungi a schermata Home") e funziona anche **senza internet** (service worker).
- JavaScript scritto in modo semplice: funzioni con un nome, cicli for e if.
- I contenuti stanno in file separati per livello (`lezioni/a1.js`, `a2.js`, `b1.js`, `b2.js`), così si possono correggere e ampliare.
- Controlli automatici (`controlli/`) che verificano tutti gli esercizi e la correzione delle risposte.

## 4. Elenco delle lezioni

**A1 – Le basi**: to be · present simple · present continuous · simple o continuous? · articoli · contabili e non numerabili · fare domande

**A2 – Il passato e il futuro**: past simple · past continuous · present perfect · present perfect o past simple? · for, since e present perfect continuous · il futuro · comparativi e superlativi · preposizioni in, on, at

**B1 – Frasi più ricche**: past perfect · used to · obbligo e consiglio (must, have to, should) · can, could, be able to · periodo ipotetico 0 e 1 · periodo ipotetico 2 · -ing o to + verbo · forma passiva · pronomi relativi

**B2 – Precisione**: periodo ipotetico 3 e wish · discorso indiretto · deduzioni (must, might, can't) · future continuous e future perfect · trappole per italiani
