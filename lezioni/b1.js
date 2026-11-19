/* Livello B1: frasi più ricche.
   Regola per chi modifica: aggiungi i nuovi esercizi SOLO in fondo a ogni lezione. */

LEZIONI.push({
  id: "past-perfect",
  livello: "B1",
  tempi: true,
  titolo: "Past perfect",
  sottotitolo: "Prima di un altro passato: I had already left",
  spiegazione: `
<h2>Le forme</h2>
<p><strong>had + participio passato</strong>, uguale per tutte le persone. <em>I had (I'd) left, she hadn't left, Had you left?</em></p>

<h2>Quando si usa</h2>
<p>Per un'azione successa <strong>prima</strong> di un'altra azione passata. Corrisponde al nostro trapassato prossimo («era già partito»).</p>
<p class="es"><span class="en">When I arrived at the station, the train had already left.</span><span class="it">Quando sono arrivato in stazione, il treno era già partito.</span></p>
<p>Confronta:</p>
<p class="es"><span class="en">When I arrived, the train left.</span><span class="it">Quando sono arrivato, il treno è partito (prima arrivo io, poi parte il treno).</span></p>
<p>Spesso si usa con <em>already, just, never ... before, by the time</em>. Dopo <em>before</em> e <em>after</em> l'ordine è già chiaro e spesso basta il past simple.</p>

<h2>«Era la prima volta che...»</h2>
<p class="es"><span class="en">It was the first time I had seen the sea.</span><span class="it">Era la prima volta che vedevo il mare.</span></p>

<h2>Past perfect continuous</h2>
<p><strong>had been + -ing</strong>: un'attività che è durata fino a un momento del passato.</p>
<p class="es"><span class="en">She was tired because she had been working all day.</span><span class="it">Era stanca perché aveva lavorato tutto il giorno.</span></p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">When I got home, my wife already went out.</span><span class="si en">When I got home, my wife had already gone out.</span></p>
<p class="coppia"><span class="no">It was the first time I saw the sea.</span><span class="si en">It was the first time I had seen the sea.</span></p>
<p class="coppia"><span class="no">I had went</span><span class="si en">I had gone</span></p>
</div>
`,
  esercizi: [
    { tipo: "scrivi", frase: "When we got to the cinema, the film had already ___.", aiuto: "start", giuste: ["started"], perche: "Had + participio: il film era cominciato prima del nostro arrivo." },
    { tipo: "scrivi", frase: "She was nervous because she ___ on a plane before.", aiuto: "never fly", giuste: ["had never flown"], perche: "Esperienza prima di un momento passato: had never + participio (flown)." },
    { tipo: "scrivi", frase: "I couldn't pay because I ___ my wallet at home.", aiuto: "leave", giuste: ["had left"], perche: "Aveva lasciato il portafoglio prima di dover pagare: past perfect." },
    { tipo: "scrivi", frase: "By the time the police arrived, the thieves ___.", aiuto: "escape", giuste: ["had escaped"], perche: "By the time + passato: l'azione precedente va al past perfect." },
    { tipo: "scrivi", frase: "He was tired because he ___ all night.", aiuto: "drive, continuous", giuste: ["had been driving"], perche: "Attività durata fino a un momento passato: had been + -ing." },
    { tipo: "scegli", frase: "When I arrived at the party, Anna ___ home, so I didn't see her.", opzioni: ["had gone", "went"], giusta: "had gone", perche: "Anna era andata via prima del mio arrivo: past perfect." },
    { tipo: "scegli", frase: "When I arrived at the party, Anna ___ me a drink.", opzioni: ["gave", "had given"], giusta: "gave", perche: "Prima arrivo, poi mi dà da bere: azioni in sequenza, past simple." },
    { tipo: "scegli", frase: "It was the first time I ___ snow.", opzioni: ["had seen", "saw", "have seen"], giusta: "had seen", perche: "It was the first time + past perfect." },
    { tipo: "scegli", frase: "I didn't recognise him because I ___ him before.", opzioni: ["had never met", "never met", "have never met"], giusta: "had never met", perche: "Prima di quel momento passato: had never met." },
    { tipo: "errore", frase: "When I got home, my brother [already ate] all the pizza.", corretta: "When I got home, my brother had already eaten all the pizza.", perche: "L'azione è avvenuta prima del mio arrivo: had already eaten." },
    { tipo: "errore", frase: "I realised I [have forgotten] my keys.", corretta: "I realised I had forgotten my keys.", perche: "Nel racconto al passato, l'azione precedente va al past perfect." },
    { tipo: "errore", frase: "She told me she [had went] to the doctor.", corretta: "She told me she had gone to the doctor.", perche: "Dopo had serve il participio: gone." },
    { tipo: "ordina", giusta: "Had you ever been there before?", perche: "Had + you + ever + participio." },
    { tipo: "traduci", italiano: "Quando sono arrivato, la lezione era già cominciata.", giuste: ["When I arrived, the lesson had already started.", "When I arrived, the lesson had already begun.", "When I arrived, the class had already started.", "When I got there, the lesson had already started."], perche: "Era già cominciata = had already started." },
    { tipo: "traduci", italiano: "Non avevo mai mangiato niente di così buono.", giuste: ["I had never eaten anything so good.", "I had never eaten anything so delicious.", "I had never eaten anything as good."], perche: "Avevo mai mangiato = had never eaten." }
  ]
});

LEZIONI.push({
  id: "used-to",
  livello: "B1",
  tempi: true,
  titolo: "used to, be used to, get used to",
  sottotitolo: "Abitudini passate e cose a cui sei abituato",
  spiegazione: `
<h2>used to + verbo: l'imperfetto delle abitudini</h2>
<p>Per abitudini o situazioni del passato che <strong>adesso non ci sono più</strong>.</p>
<p class="es"><span class="en">I used to play football.</span><span class="it">Giocavo a calcio (ora non più).</span></p>
<p class="es"><span class="en">We used to live in Rome.</span><span class="it">Abitavamo a Roma.</span></p>
<p>Negativa e domanda con did, e <em>use</em> senza la d: <em>I didn't use to like it. Did you use to smoke?</em></p>

<h2>would per le azioni ripetute</h2>
<p>Nei racconti si usa anche <strong>would</strong> per azioni che si ripetevano. Solo azioni, non stati.</p>
<p class="es"><span class="en">Every Sunday we would go to the beach.</span><span class="it">Ogni domenica andavamo al mare.</span></p>
<p>Per gli stati solo used to: <em>I used to have long hair</em> (non «I would have»).</p>

<h2>be used to e get used to: essere abituato, abituarsi</h2>
<p>Qui <em>to</em> è una preposizione: dopo va un nome o un verbo con <strong>-ing</strong>.</p>
<p class="es"><span class="en">I'm used to getting up early.</span><span class="it">Sono abituato ad alzarmi presto.</span></p>
<p class="es"><span class="en">I'm getting used to driving on the left.</span><span class="it">Mi sto abituando a guidare a sinistra.</span></p>

<h2>Abitudini di adesso</h2>
<p>Al presente non esiste «I use to»: si usa <em>usually</em> + present simple.</p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">I use to get up at 7.</span><span class="si en">I usually get up at 7.</span></p>
<p class="coppia"><span class="no">I'm used to get up early.</span><span class="si en">I'm used to getting up early.</span></p>
<p class="coppia"><span class="no">I didn't used to smoke.</span><span class="si en">I didn't use to smoke.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scrivi", frase: "I ___ smoke, but I stopped five years ago.", aiuto: "abitudine passata", giuste: ["used to"], perche: "Abitudine passata che non c'è più: used to." },
    { tipo: "scrivi", frase: "Did you ___ play an instrument when you were a kid?", aiuto: "used to", giuste: ["use to"], perche: "Dopo did: use to (senza d)." },
    { tipo: "scrivi", frase: "She ___ like vegetables, but now she loves them.", aiuto: "used to, negativa", giuste: ["didn't use to", "did not use to"], perche: "Negativa: didn't use to." },
    { tipo: "scrivi", frase: "I'm used to ___ in a noisy city.", aiuto: "live", giuste: ["living"], perche: "Be used to + -ing." },
    { tipo: "scrivi", frase: "It took me months to get used to ___ on the left.", aiuto: "drive", giuste: ["driving"], perche: "Get used to + -ing." },
    { tipo: "scegli", frase: "I usually ___ to work by bike.", opzioni: ["go", "use to go", "am used to go"], giusta: "go", perche: "Abitudine di adesso: usually + present simple." },
    { tipo: "scegli", frase: "When I was little, my grandmother ___ tell me a story every night.", opzioni: ["would", "was", "used"], giusta: "would", perche: "Azione ripetuta nel passato: would + verbo (o used to)." },
    { tipo: "scegli", frase: "I ___ have a beard, but I shaved it off.", opzioni: ["used to", "would"], giusta: "used to", perche: "Avere la barba è uno stato: solo used to." },
    { tipo: "scegli", frase: "Don't worry, you'll soon ___ the cold weather.", opzioni: ["get used to", "use to", "be use to"], giusta: "get used to", perche: "Abituarsi = get used to." },
    { tipo: "errore", frase: "I [use to] go to the gym every day.", corretta: "I usually go to the gym every day.", perche: "Al presente non esiste «use to»: si dice usually." },
    { tipo: "errore", frase: "I'm not used to [work] at night.", corretta: "I'm not used to working at night.", perche: "Be used to + -ing." },
    { tipo: "errore", frase: "We [didn't used to] have a car.", corretta: "We didn't use to have a car.", perche: "Dopo didn't: use to, senza d." },
    { tipo: "ordina", giusta: "Did you use to live in Rome?", perche: "Did + you + use to + verbo." },
    { tipo: "traduci", italiano: "Da piccolo giocavo sempre a calcio.", giuste: ["When I was a child, I always played football.", "When I was little, I always played football.", "As a child, I always played football.", "When I was a child, I used to play football all the time.", "When I was little, I used to play football all the time.", "As a child, I used to play football all the time.", "When I was a kid, I always played football."], perche: "Abitudine passata: past simple o used to, non past continuous." },
    { tipo: "traduci", italiano: "Non sono abituato a questo freddo.", giuste: ["I am not used to this cold.", "I am not used to this cold weather."], perche: "Essere abituato = be used to + nome." }
  ]
});

LEZIONI.push({
  id: "obbligo",
  livello: "B1",
  tempi: false,
  titolo: "Obbligo e consiglio: must, have to, should",
  sottotitolo: "Devo, non devi, non c'è bisogno, dovresti",
  spiegazione: `
<h2>Le forme</h2>
<div class="scorri"><table class="tabella">
<tr><th>Forma</th><th>Significato</th><th>Esempio</th></tr>
<tr><td class="f">must</td><td>obbligo sentito da chi parla, regole scritte</td><td class="f">I must call my mum.</td></tr>
<tr><td class="f">have to</td><td>obbligo che viene da fuori (regole, lavoro)</td><td class="f">I have to wear a uniform at work.</td></tr>
<tr><td class="f">mustn't</td><td><strong>divieto</strong>: non devi assolutamente</td><td class="f">You mustn't smoke here.</td></tr>
<tr><td class="f">don't have to</td><td><strong>non è necessario</strong>: puoi, ma non serve</td><td class="f">You don't have to come.</td></tr>
<tr><td class="f">should / shouldn't</td><td>consiglio: dovresti / non dovresti</td><td class="f">You should see a doctor.</td></tr>
</table></div>

<div class="regola">La grande trappola: in italiano «non devi» vale per tutti e due i casi. In inglese <strong>mustn't</strong> = è vietato, <strong>don't have to</strong> = non serve.</div>
<p class="es"><span class="en">You mustn't tell anyone.</span><span class="it">Non devi dirlo a nessuno (è vietato).</span></p>
<p class="es"><span class="en">You don't have to pay. It's free.</span><span class="it">Non devi pagare (non serve), è gratis.</span></p>

<h2>Must non ha passato né futuro</h2>
<p>Al passato e al futuro si usa have to: <em>Yesterday I had to work. Tomorrow I'll have to get up early.</em></p>

<h2>Come si costruiscono i modali</h2>
<p><em>must, should, can</em> non prendono la -s e non vogliono <em>to</em> dopo: <em>He must go</em> (non «he musts», non «must to go»). <em>Have to</em> invece è un verbo normale: <em>she has to, does she have to?</em></p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">I must to go.</span><span class="si en">I must go.</span></p>
<p class="coppia"><span class="no">He musts study.</span><span class="si en">He must study.</span></p>
<p class="coppia"><span class="no">Yesterday I must work.</span><span class="si en">Yesterday I had to work.</span></p>
<p class="coppia"><span class="no">You mustn't come if you're busy.</span><span class="si en">You don't have to come if you're busy.</span></p>
<p class="coppia"><span class="no">You should to rest.</span><span class="si en">You should rest.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scegli", frase: "You ___ park here. It's forbidden.", opzioni: ["mustn't", "don't have to"], giusta: "mustn't", perche: "È vietato: mustn't." },
    { tipo: "scegli", frase: "It's Sunday, so I ___ get up early.", opzioni: ["don't have to", "mustn't"], giusta: "don't have to", perche: "Non è necessario: don't have to." },
    { tipo: "scegli", frase: "Yesterday I ___ work until 10 p.m.", opzioni: ["had to", "must", "musted"], giusta: "had to", perche: "Must non ha il passato: had to." },
    { tipo: "scegli", frase: "You look tired. You ___ go to bed earlier.", opzioni: ["should", "must to", "should to"], giusta: "should", perche: "Consiglio: should + verbo, senza to." },
    { tipo: "scegli", frase: "Students ___ wear a uniform at this school. It's a rule.", opzioni: ["have to", "should", "don't have to"], giusta: "have to", perche: "Regola esterna: have to." },
    { tipo: "scrivi", frase: "She ___ work on Saturdays. It's her day off.", aiuto: "have to, negativa", giuste: ["doesn't have to", "does not have to"], perche: "Non è necessario: doesn't have to (she)." },
    { tipo: "scrivi", frase: "I ___ take the bus tomorrow because my car is at the mechanic's.", aiuto: "have to, futuro", giuste: ["will have to"], perche: "Futuro di have to: will have to." },
    { tipo: "scrivi", frase: "You ___ tell anyone. It's a secret!", aiuto: "must, negativa", giuste: ["mustn't", "must not"], perche: "Divieto: mustn't." },
    { tipo: "scrivi", frase: "Did you ___ pay for the tickets?", aiuto: "have to", giuste: ["have to"], perche: "Domanda al passato: Did you have to...?" },
    { tipo: "errore", frase: "I must [to] finish this report today.", corretta: "I must finish this report today.", perche: "Dopo must non va to." },
    { tipo: "errore", frase: "She [musts] study harder.", corretta: "She must study harder.", perche: "I modali non prendono la -s." },
    { tipo: "errore", frase: "Last year I [must] work every weekend.", corretta: "Last year I had to work every weekend.", perche: "Al passato: had to." },
    { tipo: "errore", frase: "You [mustn't] come to the meeting if you're busy. It's optional.", corretta: "You don't have to come to the meeting if you're busy. It's optional.", perche: "Non è vietato, è facoltativo: don't have to." },
    { tipo: "traduci", italiano: "Non devi preoccuparti, va tutto bene.", giuste: ["You do not have to worry, everything is fine.", "You do not need to worry, everything is fine.", "Do not worry, everything is fine.", "You should not worry, everything is fine.", "You do not have to worry, everything is OK.", "You do not need to worry, everything is OK."], perche: "Non serve preoccuparsi: don't have to / don't need to." },
    { tipo: "traduci", italiano: "Dovresti parlare con il tuo capo.", giuste: ["You should talk to your boss.", "You should speak to your boss.", "You should talk with your boss.", "You ought to talk to your boss."], perche: "Consiglio: should." }
  ]
});

LEZIONI.push({
  id: "can-could",
  livello: "B1",
  tempi: false,
  titolo: "can, could, be able to",
  sottotitolo: "Saper fare, riuscire, chiedere",
  spiegazione: `
<h2>Can</h2>
<p>Abilità (<em>I can swim</em> = so nuotare), possibilità, permesso e richieste informali (<em>Can you help me?</em>).</p>
<p class="es"><span class="en">Can you drive?</span><span class="it">Sai guidare? (non «Do you know drive?»)</span></p>

<h2>Could</h2>
<ul>
<li>Abilità generale nel passato: <em>I could read when I was four.</em></li>
<li>Richieste più gentili: <em>Could you open the door, please?</em></li>
<li>Possibilità: <em>It could rain later.</em></li>
</ul>

<h2>Be able to: dove can non arriva</h2>
<p>Can non ha futuro, present perfect né infinito. Lì si usa <strong>be able to</strong>.</p>
<p class="es"><span class="en">I'll be able to help you tomorrow.</span><span class="it">Potrò aiutarti domani.</span></p>
<p class="es"><span class="en">I haven't been able to sleep.</span><span class="it">Non sono riuscito a dormire.</span></p>
<p class="es"><span class="en">I'd like to be able to speak Chinese.</span><span class="it">Mi piacerebbe saper parlare cinese.</span></p>

<h2>Riuscire una volta: was able to, managed to</h2>
<p>Per <strong>una singola occasione</strong> in cui sei riuscito a fare qualcosa non si usa could, ma <em>was able to</em> o <em>managed to</em>. Al negativo <em>couldn't</em> va sempre bene.</p>
<p class="es"><span class="en">The exam was hard, but I managed to finish it.</span><span class="it">L'esame era difficile, ma sono riuscito a finirlo.</span></p>
<p class="es"><span class="en">I couldn't open the door.</span><span class="it">Non sono riuscito ad aprire la porta.</span></p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">I will can help you.</span><span class="si en">I'll be able to help you.</span></p>
<p class="coppia"><span class="no">Do you know swim?</span><span class="si en">Can you swim?</span></p>
<p class="coppia"><span class="no">He can to play.</span><span class="si en">He can play.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scegli", frase: "___ you speak German?", opzioni: ["Can", "Do", "Know"], giusta: "Can", perche: "Saper fare qualcosa: Can you...?" },
    { tipo: "scegli", frase: "I hope I ___ come to your party next week.", opzioni: ["will be able to", "will can", "can to"], giusta: "will be able to", perche: "Can non ha il futuro: will be able to." },
    { tipo: "scegli", frase: "When I was six, I ___ ride a bike.", opzioni: ["could", "can", "was able"], giusta: "could", perche: "Abilità generale nel passato: could." },
    { tipo: "scegli", frase: "The exam was hard, but I ___ finish it in time.", opzioni: ["managed to", "could"], giusta: "managed to", perche: "Singola occasione riuscita: managed to (o was able to), non could." },
    { tipo: "scegli", frase: "___ you pass me the salt, please?", opzioni: ["Could", "Must", "Should"], giusta: "Could", perche: "Richiesta gentile: Could you...?" },
    { tipo: "scrivi", frase: "I haven't ___ sleep for two nights.", aiuto: "be able to", giuste: ["been able to"], perche: "Present perfect di be able to: have been able to." },
    { tipo: "scrivi", frase: "I'm sorry, I ___ come tomorrow.", aiuto: "can, negativa", giuste: ["can't", "cannot"], perche: "Negativa di can: can't / cannot." },
    { tipo: "scrivi", frase: "She ___ find her passport, so she missed the flight.", aiuto: "can, passato negativo", giuste: ["couldn't", "could not"], perche: "Al negativo couldn't va bene anche per una singola occasione." },
    { tipo: "errore", frase: "I'll [can] help you tomorrow.", corretta: "I'll be able to help you tomorrow.", perche: "Can non ha il futuro: will be able to." },
    { tipo: "errore", frase: "[Do] you [know] swim?", corretta: "Can you swim?", perche: "Sapere fare qualcosa: Can you...?" },
    { tipo: "errore", frase: "He can [to] play the piano.", corretta: "He can play the piano.", perche: "Dopo can non va to." },
    { tipo: "ordina", giusta: "Could you help me with this?", perche: "Richiesta gentile: Could + you + verbo." },
    { tipo: "traduci", italiano: "Sai guidare?", giuste: ["Can you drive?"], perche: "Saper fare = can." },
    { tipo: "traduci", italiano: "Non riesco a trovare le chiavi.", giuste: ["I can't find my keys.", "I can't find the keys."], perche: "Non riuscire (adesso) = can't." },
    { tipo: "traduci", italiano: "Potresti parlare più lentamente?", giuste: ["Could you speak more slowly?", "Could you talk more slowly?", "Can you speak more slowly?"], perche: "Richiesta gentile: Could you...? Più lentamente = more slowly." }
  ]
});

LEZIONI.push({
  id: "condizionale-1",
  livello: "B1",
  tempi: true,
  titolo: "Periodo ipotetico 0 e 1",
  sottotitolo: "If it rains, I'll stay at home (e when, as soon as)",
  spiegazione: `
<h2>Tipo 0: cose sempre vere</h2>
<p><strong>If + present, present</strong></p>
<p class="es"><span class="en">If you heat ice, it melts.</span><span class="it">Se scaldi il ghiaccio, si scioglie.</span></p>

<h2>Tipo 1: possibile nel futuro</h2>
<p><strong>If + present, will + verbo</strong></p>
<p class="es"><span class="en">If it rains tomorrow, I'll stay at home.</span><span class="it">Se domani piove, resto a casa.</span></p>
<div class="regola">Dopo <strong>if</strong> non si usa mai <strong>will</strong>, anche se parli del futuro: <em>If it rains</em>, non «If it will rain».</div>
<p>Al posto di will puoi usare un imperativo, can, may, might: <em>If you see Tom, tell him to call me.</em></p>
<p><strong>unless</strong> = if not, a meno che: <em>I'll go unless it rains.</em></p>

<h2>Quando, appena, prima che: stessa regola</h2>
<p>Con <em>when, as soon as, before, after, until</em> riferiti al futuro si usa il <strong>present</strong>, non will. In italiano invece usiamo il futuro («quando arriverò»).</p>
<p class="es"><span class="en">I'll call you when I arrive.</span><span class="it">Ti chiamerò quando arriverò.</span></p>
<p class="es"><span class="en">As soon as I finish, I'll come.</span><span class="it">Appena finisco, vengo.</span></p>
<p>Se la frase con if va per prima, ci va la virgola: <em>If I have time, I'll call you.</em></p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">If it will rain, I'll stay at home.</span><span class="si en">If it rains, I'll stay at home.</span></p>
<p class="coppia"><span class="no">When I will arrive, I'll call you.</span><span class="si en">When I arrive, I'll call you.</span></p>
<p class="coppia"><span class="no">I'll wait until you will come.</span><span class="si en">I'll wait until you come.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scrivi", frase: "If it ___ tomorrow, we'll stay at home.", aiuto: "rain", giuste: ["rains"], perche: "Dopo if: present, non will." },
    { tipo: "scrivi", frase: "If you ___ hard, you'll pass the exam.", aiuto: "study", giuste: ["study"], perche: "Dopo if: present." },
    { tipo: "scrivi", frase: "If you heat water to 100 degrees, it ___.", aiuto: "boil", giuste: ["boils"], perche: "Tipo 0, una cosa sempre vera: present + present." },
    { tipo: "scrivi", frase: "I'll call you when I ___ home.", aiuto: "get", giuste: ["get"], perche: "Dopo when (futuro): present." },
    { tipo: "scrivi", frase: "If I see Marta, I ___ her the news.", aiuto: "tell", giuste: ["will tell"], perche: "L'altra metà della frase: will + verbo." },
    { tipo: "scrivi", consegna: "Scrivi la parola che vuol dire «a meno che».", frase: "We won't go out ___ the weather improves.", giuste: ["unless"], perche: "Unless = if not, a meno che." },
    { tipo: "scrivi", frase: "As soon as I ___ this, I'll help you.", aiuto: "finish", giuste: ["finish", "have finished"], perche: "Dopo as soon as (futuro): present (o present perfect)." },
    { tipo: "scegli", frase: "If you ___ me, I'll tell you a secret.", opzioni: ["help", "will help", "helped"], giusta: "help", perche: "Dopo if: present." },
    { tipo: "scegli", frase: "I'll wait here until you ___ back.", opzioni: ["come", "will come", "came"], giusta: "come", perche: "Dopo until (futuro): present." },
    { tipo: "scegli", frase: "If you don't hurry, you ___ the train.", opzioni: ["will miss", "miss", "missed"], giusta: "will miss", perche: "Conseguenza futura: will." },
    { tipo: "errore", frase: "If it [will be] sunny, we'll go to the beach.", corretta: "If it is sunny, we'll go to the beach.", perche: "Dopo if non si usa will." },
    { tipo: "errore", frase: "When I [will finish] university, I want to travel.", corretta: "When I finish university, I want to travel.", perche: "Dopo when riferito al futuro: present." },
    { tipo: "errore", frase: "Call me as soon as you [will arrive].", corretta: "Call me as soon as you arrive.", perche: "Dopo as soon as: present." },
    { tipo: "ordina", giusta: "What will you do if you lose your job?", altre: ["If you lose your job, what will you do?"], perche: "Will nella domanda principale, present dopo if." },
    { tipo: "traduci", italiano: "Se ho tempo, ti chiamo stasera.", giuste: ["If I have time, I will call you tonight.", "If I have time, I will call you this evening.", "If I have time, I will phone you tonight.", "I will call you tonight if I have time."], perche: "If + present, will + verbo." },
    { tipo: "traduci", italiano: "Quando arriverò a Londra, ti scriverò.", giuste: ["When I arrive in London, I will write to you.", "When I get to London, I will write to you.", "When I arrive in London, I will text you.", "When I get to London, I will text you.", "When I arrive in London, I will message you.", "When I get to London, I will message you."], perche: "Quando arriverò = when I arrive (present), non «when I will arrive»." }
  ]
});

LEZIONI.push({
  id: "condizionale-2",
  livello: "B1",
  tempi: true,
  titolo: "Periodo ipotetico 2",
  sottotitolo: "If I were rich... (immaginario, adesso)",
  spiegazione: `
<h2>La forma</h2>
<p><strong>If + past simple, would + verbo</strong></p>
<p>Per situazioni <strong>immaginarie</strong>, improbabili o non vere adesso. In italiano: congiuntivo imperfetto + condizionale.</p>
<p class="es"><span class="en">If I had more money, I would buy a house.</span><span class="it">Se avessi più soldi, comprerei una casa.</span></p>
<div class="regola">Il past simple dopo if <strong>non</strong> parla del passato: è il nostro congiuntivo. E dopo if non va mai would: <em>If I had</em>, non «If I would have».</div>

<h2>If I were you</h2>
<p>Con be si usa <strong>were</strong> per tutte le persone (nel parlato si sente anche <em>was</em>). <em>If I were you</em> = se fossi in te, per dare consigli.</p>
<p class="es"><span class="en">If I were you, I'd talk to him.</span><span class="it">Se fossi in te, gli parlerei.</span></p>

<h2>Could e might</h2>
<p class="es"><span class="en">If I spoke French, I could work in Paris.</span><span class="it">Se parlassi francese, potrei lavorare a Parigi.</span></p>

<h2>Tipo 1 o tipo 2?</h2>
<p class="es"><span class="en">If I win the lottery, I'll travel.</span><span class="it">Se vinco (ci credo, è possibile)...</span></p>
<p class="es"><span class="en">If I won the lottery, I'd travel.</span><span class="it">Se vincessi (lo immagino)...</span></p>

<h2>Il condizionale italiano = would</h2>
<p class="es"><span class="en">Would you like a coffee?</span><span class="it">Vorresti un caffè?</span></p>
<p>Dopo would il verbo va senza to: <em>I would like</em>, non «I would to like».</p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">If I would have money, I would buy it.</span><span class="si en">If I had money, I would buy it.</span></p>
<p class="coppia"><span class="no">If I knew, I will tell you.</span><span class="si en">If I knew, I would tell you.</span></p>
<p class="coppia"><span class="no">I would to go.</span><span class="si en">I would go.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scrivi", frase: "If I ___ more time, I would learn Japanese.", aiuto: "have", giuste: ["had"], perche: "Dopo if (immaginario): past simple." },
    { tipo: "scrivi", frase: "If she lived closer, we ___ each other more often.", aiuto: "see", giuste: ["would see"], perche: "L'altra metà: would + verbo." },
    { tipo: "scrivi", frase: "If I ___ you, I'd talk to him.", aiuto: "be", giuste: ["were", "was"], perche: "If I were you (were è la forma più corretta, was si sente nel parlato)." },
    { tipo: "scrivi", frase: "What ___ you do if you lost your job?", aiuto: "will / would", giuste: ["would"], perche: "Situazione immaginaria (lost): would." },
    { tipo: "scrivi", frase: "If we ___ a car, we could go to the mountains.", aiuto: "have", giuste: ["had"], perche: "Dopo if: past simple." },
    { tipo: "scrivi", frase: "I ___ that jacket if it weren't so expensive.", aiuto: "buy", giuste: ["would buy"], perche: "Would + verbo nella parte senza if." },
    { tipo: "scegli", frase: "If I ___ the answer, I would tell you.", opzioni: ["knew", "would know", "know"], giusta: "knew", perche: "Dopo if: past simple, mai would." },
    { tipo: "scegli", frase: "If it ___ cheaper, more people would buy it.", opzioni: ["were", "would be", "is"], giusta: "were", perche: "Dopo if (immaginario): were." },
    { tipo: "scegli", frase: "If I win the lottery, I ___ around the world.", opzioni: ["will travel", "would travel"], giusta: "will travel", perche: "If + present (win): tipo 1, will." },
    { tipo: "scegli", frase: "If I won the lottery, I ___ my job.", opzioni: ["would quit", "will quit"], giusta: "would quit", perche: "If + past (won): tipo 2, would." },
    { tipo: "errore", frase: "If I [would have] a dog, I would take it for a walk every day.", corretta: "If I had a dog, I would take it for a walk every day.", perche: "Dopo if non va would: If I had." },
    { tipo: "errore", frase: "If he studied more, he [will] pass.", corretta: "If he studied more, he would pass.", perche: "Con if + past simple serve would." },
    { tipo: "errore", frase: "I would [to] like a glass of water.", corretta: "I would like a glass of water.", perche: "Dopo would non va to." },
    { tipo: "ordina", giusta: "What would you do if you were me?", perche: "Would nella domanda, were dopo if." },
    { tipo: "traduci", italiano: "Se fossi in te, non lo farei.", giuste: ["If I were you, I would not do it.", "If I were you, I would not do that.", "If I was you, I would not do it.", "If I was you, I would not do that."], perche: "Se fossi in te = If I were you; non lo farei = I wouldn't do it." },
    { tipo: "traduci", italiano: "Se avessi più tempo libero, leggerei di più.", giuste: ["If I had more free time, I would read more.", "If I had more spare time, I would read more."], perche: "Avessi = had; leggerei = would read." }
  ]
});

LEZIONI.push({
  id: "ing-o-to",
  livello: "B1",
  tempi: false,
  titolo: "-ing o to + verbo?",
  sottotitolo: "enjoy doing, want to do, stop, remember, try",
  spiegazione: `
<h2>Verbi che vogliono -ing</h2>
<p><em>enjoy, finish, mind, avoid, suggest, keep, consider, imagine, practise, miss, can't stand, give up, look forward to</em></p>
<p class="es"><span class="en">I enjoy cooking.</span><span class="it">Mi piace cucinare.</span></p>
<p class="es"><span class="en">Would you mind closing the window?</span><span class="it">Ti dispiacerebbe chiudere la finestra?</span></p>

<h2>Verbi che vogliono to</h2>
<p><em>want, need, decide, hope, plan, promise, agree, refuse, manage, learn, offer, seem, afford, expect, would like</em></p>
<p class="es"><span class="en">We decided to stay.</span><span class="it">Abbiamo deciso di restare.</span></p>

<h2>Dopo una preposizione sempre -ing</h2>
<p><em>interested in learning, good at cooking, before leaving, without saying, thank you for coming</em>. Anche <em>look forward to <strong>seeing</strong></em>: lì <em>to</em> è una preposizione.</p>

<h2>-ing come soggetto</h2>
<p>Dove l'italiano usa l'infinito come soggetto, l'inglese usa -ing.</p>
<p class="es"><span class="en">Swimming is good for you.</span><span class="it">Nuotare fa bene.</span></p>

<h2>«Voglio che tu...»</h2>
<p><strong>want / would like / ask / tell + persona + to</strong>. Mai «I want that you».</p>
<p class="es"><span class="en">I want you to come.</span><span class="it">Voglio che tu venga.</span></p>
<p>Ma <strong>make</strong> e <strong>let</strong> + persona + verbo senza to: <em>My parents let me go. She made me laugh.</em></p>

<h2>Per fare qualcosa: to, non for</h2>
<p class="es"><span class="en">I went to the shop to buy milk.</span><span class="it">Sono andato al negozio per comprare il latte.</span></p>

<h2>Verbi che cambiano significato</h2>
<div class="scorri"><table class="tabella">
<tr><td class="f">stop smoking</td><td>smettere di fumare</td><td class="f">stop to smoke</td><td>fermarsi per fumare</td></tr>
<tr><td class="f">remember meeting</td><td>ricordare di aver incontrato</td><td class="f">remember to call</td><td>ricordarsi di chiamare</td></tr>
<tr><td class="f">try opening the window</td><td>provare (come esperimento)</td><td class="f">try to sleep</td><td>cercare di dormire</td></tr>
</table></div>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">I want that you come.</span><span class="si en">I want you to come.</span></p>
<p class="coppia"><span class="no">I enjoy to swim.</span><span class="si en">I enjoy swimming.</span></p>
<p class="coppia"><span class="no">He suggested me to go.</span><span class="si en">He suggested going.</span></p>
<p class="coppia"><span class="no">I'm looking forward to see you.</span><span class="si en">I'm looking forward to seeing you.</span></p>
<p class="coppia"><span class="no">I went there for buy bread.</span><span class="si en">I went there to buy bread.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scrivi", frase: "I enjoy ___ new recipes.", aiuto: "try", giuste: ["trying"], perche: "Enjoy + -ing." },
    { tipo: "scrivi", frase: "We decided ___ a taxi.", aiuto: "take", giuste: ["to take"], perche: "Decide + to." },
    { tipo: "scrivi", frase: "Would you mind ___ the window?", aiuto: "open", giuste: ["opening"], perche: "Mind + -ing." },
    { tipo: "scrivi", frase: "She's very good at ___.", aiuto: "draw", giuste: ["drawing"], perche: "Dopo una preposizione (at): -ing." },
    { tipo: "scrivi", frase: "I'm looking forward to ___ you.", aiuto: "see", giuste: ["seeing"], perche: "Look forward to + -ing: qui to è una preposizione." },
    { tipo: "scrivi", frase: "Remember ___ the lights before you go out.", aiuto: "turn off", giuste: ["to turn off"], perche: "Ricordarsi di fare qualcosa: remember to." },
    { tipo: "scrivi", frase: "My parents never let me ___ out late.", aiuto: "go", giuste: ["go"], perche: "Let + persona + verbo senza to." },
    { tipo: "scrivi", frase: "I went to the bank ___ some money.", aiuto: "get", giuste: ["to get"], perche: "Lo scopo (per fare) si dice con to." },
    { tipo: "scegli", frase: "I want you ___ the truth.", opzioni: ["to tell", "tell", "that you tell"], giusta: "to tell", perche: "Want + persona + to." },
    { tipo: "scegli", frase: "He stopped ___ when he got ill. Now he doesn't smoke.", opzioni: ["smoking", "to smoke"], giusta: "smoking", perche: "Smettere di fare: stop + -ing." },
    { tipo: "scegli", frase: "I remember ___ this film when I was a child.", opzioni: ["watching", "to watch"], giusta: "watching", perche: "Ricordare una cosa fatta: remember + -ing." },
    { tipo: "scegli", frase: "___ is my favourite way to relax.", opzioni: ["Swimming", "To swim", "Swim"], giusta: "Swimming", perche: "Verbo come soggetto: -ing." },
    { tipo: "errore", frase: "I want [that you come] with me.", corretta: "I want you to come with me.", perche: "Want + persona + to, mai «want that»." },
    { tipo: "errore", frase: "They suggested [to go] to the beach.", corretta: "They suggested going to the beach.", perche: "Suggest + -ing." },
    { tipo: "errore", frase: "Thank you for [help] me.", corretta: "Thank you for helping me.", perche: "Dopo for (preposizione): -ing." },
    { tipo: "traduci", italiano: "Ho smesso di bere caffè.", giuste: ["I stopped drinking coffee.", "I have stopped drinking coffee.", "I gave up drinking coffee.", "I have given up drinking coffee.", "I quit drinking coffee."], perche: "Smettere di = stop + -ing (o give up + -ing)." },
    { tipo: "traduci", italiano: "Vorrei che tu mi aiutassi.", giuste: ["I would like you to help me.", "I want you to help me."], perche: "Vorrei che tu... = I'd like you to..." }
  ]
});

LEZIONI.push({
  id: "passivo",
  livello: "B1",
  tempi: true,
  titolo: "La forma passiva",
  sottotitolo: "It was built in 1900, English is spoken here",
  spiegazione: `
<h2>La forma</h2>
<p><strong>be</strong> (nel tempo che serve) + <strong>participio passato</strong>. Chi fa l'azione si aggiunge con <strong>by</strong>, ma solo se è importante.</p>
<div class="scorri"><table class="tabella">
<tr><td>Present simple</td><td class="f">English is spoken here.</td></tr>
<tr><td>Present continuous</td><td class="f">My car is being repaired.</td></tr>
<tr><td>Past simple</td><td class="f">The bridge was built in 1890.</td></tr>
<tr><td>Present perfect</td><td class="f">My bike has been stolen.</td></tr>
<tr><td>Futuro</td><td class="f">The results will be published tomorrow.</td></tr>
<tr><td>Con i modali</td><td class="f">This form must be completed.</td></tr>
</table></div>

<h2>Quando si usa</h2>
<p>Quando conta di più l'azione o chi la subisce, e chi la fa non si sa o non interessa.</p>
<p class="es"><span class="en">The Mona Lisa was painted by Leonardo.</span><span class="it">La Gioconda fu dipinta da Leonardo.</span></p>

<h2>Il «si» italiano</h2>
<p class="es"><span class="en">English is spoken here.</span><span class="it">Qui si parla inglese.</span></p>
<p class="es"><span class="en">My wallet was stolen.</span><span class="it">Mi hanno rubato il portafoglio.</span></p>

<h2>Nascere</h2>
<p>«Sono nato» è sempre passato: <em>I was born</em>.</p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">I am born in 1995.</span><span class="si en">I was born in 1995.</span></p>
<p class="coppia"><span class="no">The house was build in 1900.</span><span class="si en">The house was built in 1900.</span></p>
<p class="coppia"><span class="no">Here speaks English.</span><span class="si en">English is spoken here.</span></p>
<p class="coppia"><span class="no">It was made from my mother.</span><span class="si en">It was made by my mother.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scrivi", frase: "This bridge ___ in 1890.", aiuto: "build", giuste: ["was built"], perche: "Passivo al passato: was + participio (built)." },
    { tipo: "scrivi", frase: "Italian ___ in Switzerland too.", aiuto: "speak", giuste: ["is spoken"], perche: "Passivo al presente: is + participio." },
    { tipo: "scrivi", frase: "My car ___ at the moment, so I'm taking the bus.", aiuto: "repair", giuste: ["is being repaired"], perche: "Passivo al present continuous: is being + participio." },
    { tipo: "scrivi", frase: "Our flight ___. We have to wait until tomorrow.", aiuto: "cancel", giuste: ["has been cancelled", "has been canceled", "was cancelled", "was canceled"], perche: "Novità con un risultato adesso: has been + participio." },
    { tipo: "scrivi", frase: "The results ___ next week.", aiuto: "publish", giuste: ["will be published", "are going to be published"], perche: "Passivo al futuro: will be + participio." },
    { tipo: "scrivi", frase: "This form must ___ in black ink.", aiuto: "complete", giuste: ["be completed"], perche: "Dopo un modale: be + participio." },
    { tipo: "scrivi", frase: "I ___ in Palermo.", aiuto: "be born", giuste: ["was born"], perche: "Sono nato = I was born." },
    { tipo: "scegli", frase: "The Mona Lisa was painted ___ Leonardo da Vinci.", opzioni: ["by", "from", "of"], giusta: "by", perche: "Chi fa l'azione nel passivo: by." },
    { tipo: "scegli", frase: "A new hospital ___ in my town right now.", opzioni: ["is being built", "is built", "has built"], giusta: "is being built", perche: "In corso adesso: is being + participio." },
    { tipo: "scegli", frase: "Two people ___ in the accident.", opzioni: ["were injured", "injured", "were injuring"], giusta: "were injured", perche: "Hanno subito l'azione: passivo, were injured." },
    { tipo: "errore", frase: "The pyramids were [build] thousands of years ago.", corretta: "The pyramids were built thousands of years ago.", perche: "Serve il participio: built." },
    { tipo: "errore", frase: "This cake was made [from] my grandmother.", corretta: "This cake was made by my grandmother.", perche: "Chi ha fatto l'azione: by." },
    { tipo: "errore", frase: "I [am born] in 2000.", corretta: "I was born in 2000.", perche: "Nascere si dice sempre al passato: I was born." },
    { tipo: "ordina", giusta: "When was this church built?", perche: "Domanda al passivo: When + was + soggetto + participio." },
    { tipo: "traduci", italiano: "Qui si parla inglese.", giuste: ["English is spoken here.", "We speak English here."], perche: "Il «si» italiano spesso diventa un passivo." },
    { tipo: "traduci", italiano: "Mi hanno rubato la bici.", giuste: ["My bike has been stolen.", "My bike was stolen.", "My bicycle has been stolen.", "My bicycle was stolen.", "Someone stole my bike.", "Somebody stole my bike.", "Someone has stolen my bike."], perche: "Non sai chi è stato: il passivo è la scelta più naturale." }
  ]
});

LEZIONI.push({
  id: "relativi",
  livello: "B1",
  tempi: false,
  titolo: "Pronomi relativi: who, which, that, whose",
  sottotitolo: "La ragazza che..., il libro che..., la casa dove...",
  spiegazione: `
<h2>Quale usare</h2>
<div class="scorri"><table class="tabella">
<tr><td class="f">who</td><td>persone</td><td class="f">the man who lives next door</td></tr>
<tr><td class="f">which</td><td>cose e animali</td><td class="f">the car which I bought</td></tr>
<tr><td class="f">that</td><td>persone o cose (solo senza virgole)</td><td class="f">the book that changed my life</td></tr>
<tr><td class="f">whose</td><td>il cui, di cui (possesso)</td><td class="f">the girl whose father is a doctor</td></tr>
<tr><td class="f">where</td><td>dove</td><td class="f">the town where I grew up</td></tr>
</table></div>

<h2>Con o senza virgole</h2>
<ul>
<li><strong>Senza virgole</strong>: l'informazione serve a capire di chi o cosa parli. <em>The man who lives next door is a doctor.</em></li>
<li><strong>Con le virgole</strong>: è un'informazione in più. Qui <strong>that non si usa</strong>. <em>My brother, who lives in Paris, is a doctor.</em></li>
</ul>

<h2>Si può togliere?</h2>
<p>Quando il relativo è l'<strong>oggetto</strong> (dopo c'è un altro soggetto), nelle frasi senza virgole si può togliere.</p>
<p class="es"><span class="en">The book I'm reading is great.</span><span class="it">Il libro che sto leggendo è bellissimo. (that si può togliere)</span></p>
<p>Quando è il soggetto, no: <em>The man who called you</em> (who serve).</p>

<h2>La preposizione in fondo</h2>
<p class="es"><span class="en">This is the house I grew up in.</span><span class="it">Questa è la casa in cui sono cresciuto.</span></p>
<p>Non si ripete il pronome: <em>the house I live in</em>, non «the house I live in it».</p>

<h2>«Il che» e «ciò che»</h2>
<p class="es"><span class="en">He passed the exam, which surprised everyone.</span><span class="it">Ha passato l'esame, il che ha sorpreso tutti.</span></p>
<p class="es"><span class="en">What I need is a holiday.</span><span class="it">Ciò di cui ho bisogno è una vacanza.</span></p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">The man which called you</span><span class="si en">The man who called you</span></p>
<p class="coppia"><span class="no">My sister, that lives in Rome, ...</span><span class="si en">My sister, who lives in Rome, ...</span></p>
<p class="coppia"><span class="no">the woman who her car was stolen</span><span class="si en">the woman whose car was stolen</span></p>
<p class="coppia"><span class="no">the thing what I want</span><span class="si en">what I want</span></p>
</div>
`,
  esercizi: [
    { tipo: "scegli", frase: "The woman ___ lives upstairs is very nice.", opzioni: ["who", "which", "whose"], giusta: "who", perche: "Persona, soggetto: who." },
    { tipo: "scegli", frase: "This is the book ___ changed my life.", opzioni: ["that", "who", "what"], giusta: "that", perche: "Cosa, senza virgole: that (o which)." },
    { tipo: "scegli", frase: "That's the man ___ dog bit me.", opzioni: ["whose", "who", "which"], giusta: "whose", perche: "Il cui cane: whose." },
    { tipo: "scegli", frase: "This is the village ___ I grew up.", opzioni: ["where", "which", "that"], giusta: "where", perche: "Luogo: where." },
    { tipo: "scegli", frase: "My father, ___ is 70, still works.", opzioni: ["who", "that", "which"], giusta: "who", perche: "Con le virgole non si usa that: who." },
    { tipo: "scegli", frase: "___ I really need is a long holiday.", opzioni: ["What", "That", "Which"], giusta: "What", perche: "Ciò che = what." },
    { tipo: "scrivi", consegna: "Scrivi il pronome relativo.", frase: "The film ___ we watched last night was boring.", giuste: ["that", "which"], perche: "Cosa: that o which (qui si potrebbe anche togliere)." },
    { tipo: "scrivi", consegna: "Scrivi il pronome relativo.", frase: "Do you know anyone ___ speaks Chinese?", giuste: ["who", "that"], perche: "Persona, soggetto: who (o that)." },
    { tipo: "scrivi", consegna: "Scrivi il pronome relativo.", frase: "I failed my driving test, ___ was really annoying.", giuste: ["which"], perche: "Il che = which (riferito a tutta la frase)." },
    { tipo: "errore", frase: "The girl [which] I met at the party is Spanish.", corretta: "The girl who I met at the party is Spanish.", perche: "Per le persone: who (o that), non which." },
    { tipo: "errore", frase: "Rome, [that] is the capital of Italy, has amazing food.", corretta: "Rome, which is the capital of Italy, has amazing food.", perche: "Con le virgole non si usa that." },
    { tipo: "errore", frase: "This is the house I lived in [it] as a child.", corretta: "This is the house I lived in as a child.", perche: "Il pronome non si ripete: the house I lived in." },
    { tipo: "errore", frase: "I have a friend [who his] father is a famous actor.", corretta: "I have a friend whose father is a famous actor.", perche: "Il cui padre = whose father." },
    { tipo: "ordina", giusta: "The car I bought last year is already broken.", altre: ["The car I bought last year is broken already."], perche: "Il relativo oggetto (that) si può togliere: the car I bought." },
    { tipo: "traduci", italiano: "La ragazza con cui parlavi è mia cugina.", giuste: ["The girl you were talking to is my cousin.", "The girl who you were talking to is my cousin.", "The girl that you were talking to is my cousin.", "The girl you were speaking to is my cousin.", "The girl who you were speaking to is my cousin.", "The girl to whom you were talking is my cousin.", "The girl you were talking with is my cousin."], perche: "Con cui = la preposizione va in fondo: the girl you were talking to." },
    { tipo: "traduci", italiano: "Questo è il ristorante di cui ti ho parlato.", giuste: ["This is the restaurant I told you about.", "This is the restaurant that I told you about.", "This is the restaurant which I told you about.", "This is the restaurant I talked to you about."], perche: "Di cui ti ho parlato = I told you about (preposizione in fondo)." }
  ]
});
