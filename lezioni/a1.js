/* Livello A1: le basi.
   Regola per chi modifica: aggiungi i nuovi esercizi SOLO in fondo a ogni lezione,
   perché i progressi sono salvati con la posizione dell'esercizio. */

LEZIONI.push({
  id: "to-be",
  livello: "A1",
  tempi: false,
  titolo: "Il verbo to be",
  sottotitolo: "am, is, are: essere, ma anche avere anni, fame, freddo",
  spiegazione: `
<h2>Le forme</h2>
<div class="scorri"><table class="tabella">
<tr><th></th><th>Affermativa</th><th>Negativa</th><th>Domanda</th></tr>
<tr><td>I</td><td class="f">I am (I'm)</td><td class="f">I am not (I'm not)</td><td class="f">Am I?</td></tr>
<tr><td>he, she, it</td><td class="f">she is (she's)</td><td class="f">she is not (she isn't)</td><td class="f">Is she?</td></tr>
<tr><td>you, we, they</td><td class="f">we are (we're)</td><td class="f">we are not (we aren't)</td><td class="f">Are we?</td></tr>
</table></div>
<p>Nella domanda il verbo va <strong>prima</strong> del soggetto: <em>You are tired</em> diventa <em>Are you tired?</em></p>

<h2>Il soggetto c'è sempre</h2>
<p>In italiano possiamo dire «È tardi», «Piove», «Sono stanco». In inglese il soggetto non si toglie mai. Quando non c'è un soggetto vero si usa <strong>it</strong>.</p>
<p class="es"><span class="en">It's late.</span><span class="it">È tardi.</span></p>
<p class="es"><span class="en">It's raining.</span><span class="it">Piove.</span></p>

<h2>Dove l'italiano usa «avere»</h2>
<p>Età, fame, sete, caldo, freddo, paura, ragione, torto e fretta in inglese si dicono con <strong>to be</strong>.</p>
<div class="scorri"><table class="tabella">
<tr><td>Ho 25 anni</td><td class="f">I'm 25 (years old).</td></tr>
<tr><td>Ho fame / sete</td><td class="f">I'm hungry / thirsty.</td></tr>
<tr><td>Ho caldo / freddo</td><td class="f">I'm hot / cold.</td></tr>
<tr><td>Ho paura</td><td class="f">I'm scared / afraid.</td></tr>
<tr><td>Hai ragione / torto</td><td class="f">You're right / wrong.</td></tr>
<tr><td>Ho fretta</td><td class="f">I'm in a hurry.</td></tr>
</table></div>

<h2>C'è, ci sono</h2>
<p><strong>There is</strong> con il singolare, <strong>there are</strong> con il plurale.</p>
<p class="es"><span class="en">There is a bank near here.</span><span class="it">C'è una banca qui vicino.</span></p>
<p class="es"><span class="en">Are there any shops in your street?</span><span class="it">Ci sono negozi nella tua via?</span></p>

<h2>Risposte brevi</h2>
<p>Nelle risposte brevi la forma affermativa non si contrae.</p>
<p class="es"><span class="en">Are you tired? Yes, I am.</span><span class="it">Sei stanco? Sì. (mai «Yes, I'm»)</span></p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">I have 25 years.</span><span class="si en">I'm 25.</span></p>
<p class="coppia"><span class="no">Is late.</span><span class="si en">It's late.</span></p>
<p class="coppia"><span class="no">I have cold.</span><span class="si en">I'm cold.</span></p>
<p class="coppia"><span class="no">There are a problem.</span><span class="si en">There is a problem.</span></p>
<p class="coppia"><span class="no">Yes, I'm.</span><span class="si en">Yes, I am.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scrivi", frase: "I ___ from Naples.", aiuto: "be", giuste: ["am"], perche: "Con I si usa sempre am." },
    { tipo: "scrivi", frase: "My parents ___ at home.", aiuto: "be", giuste: ["are"], perche: "My parents = they, plurale: are." },
    { tipo: "scrivi", frase: "___ your brother a student?", aiuto: "be", giuste: ["Is"], perche: "Domanda: il verbo va prima del soggetto. Your brother = he, quindi is." },
    { tipo: "scrivi", frase: "We ___ late. The train is on time.", aiuto: "be, negativa", giuste: ["aren't", "are not"], perche: "Negativa con we: are not (aren't)." },
    { tipo: "scegli", frase: "I ___ 24 years old.", opzioni: ["am", "have", "has"], giusta: "am", perche: "L'età si dice con to be: I'm 24 (years old). Mai «I have 24 years»." },
    { tipo: "scegli", frase: "Can I open the window? I ___ hot.", opzioni: ["am", "have", "do"], giusta: "am", perche: "Caldo, freddo, fame, sete: to be + aggettivo. I'm hot = ho caldo." },
    { tipo: "scegli", frase: "___ a good restaurant near the station.", opzioni: ["There is", "There are", "It has"], giusta: "There is", perche: "C'è + singolare (a good restaurant): there is." },
    { tipo: "scegli", frase: "___ two banks in this street.", opzioni: ["There are", "There is", "They are"], giusta: "There are", perche: "Ci sono + plurale (two banks): there are." },
    { tipo: "scegli", frase: "Are you tired? Yes, ___.", opzioni: ["I am", "I'm"], giusta: "I am", perche: "Nelle risposte brevi la forma affermativa non si contrae: Yes, I am." },
    { tipo: "errore", frase: "[Is] raining again.", corretta: "It's raining again.", perche: "Il soggetto non si toglie: «Piove» è It's raining." },
    { tipo: "errore", frase: "My sister [has] thirty years.", corretta: "My sister is thirty years old.", perche: "L'età si dice con to be: She is thirty (years old)." },
    { tipo: "errore", frase: "I [have] very hungry now.", corretta: "I am very hungry now.", perche: "«Avere fame» è be hungry." },
    { tipo: "ordina", giusta: "Where are your keys?", perche: "Domanda con to be: parola interrogativa + are + soggetto." },
    { tipo: "ordina", giusta: "Is there a pharmacy near here?", perche: "Domanda con there is: Is there...?" },
    { tipo: "traduci", italiano: "Ho freddo. Puoi chiudere la finestra?", giuste: ["I am cold. Can you close the window?", "I am cold. Could you close the window?", "I am cold. Can you shut the window?"], perche: "Ho freddo = I'm cold (to be + aggettivo)." },
    { tipo: "traduci", italiano: "È tardi e ho fretta.", giuste: ["It is late and I am in a hurry.", "It is late and I am in a rush."], perche: "Serve il soggetto it (It's late) e «avere fretta» è be in a hurry." },
    { tipo: "traduci", italiano: "Hai ragione, non è facile.", giuste: ["You are right, it is not easy."], perche: "Avere ragione = be right. «Non è» ha bisogno del soggetto: it isn't / it's not." }
  ]
});

LEZIONI.push({
  id: "present-simple",
  livello: "A1",
  tempi: true,
  titolo: "Present simple",
  sottotitolo: "Abitudini e fatti: I work, she works, do e does",
  spiegazione: `
<h2>Quando si usa</h2>
<ul>
<li>Abitudini e azioni che si ripetono: <em>every day, usually, often, on Mondays</em>.</li>
<li>Fatti sempre veri e situazioni permanenti: dove vivi, che lavoro fai.</li>
<li>Orari e programmi fissi: treni, film, lezioni.</li>
</ul>
<p class="es"><span class="en">I work in an office.</span><span class="it">Lavoro in un ufficio.</span></p>
<p class="es"><span class="en">Water boils at 100 degrees.</span><span class="it">L'acqua bolle a 100 gradi.</span></p>

<h2>Le forme</h2>
<div class="scorri"><table class="tabella">
<tr><th></th><th>Affermativa</th><th>Negativa</th><th>Domanda</th></tr>
<tr><td>I, you, we, they</td><td class="f">I work</td><td class="f">I don't work</td><td class="f">Do you work?</td></tr>
<tr><td>he, she, it</td><td class="f">she works</td><td class="f">she doesn't work</td><td class="f">Does she work?</td></tr>
</table></div>
<div class="regola">Con he, she, it la <strong>-s</strong> va sul verbo solo nella frase affermativa. Nella negativa e nella domanda la -s «passa» a <strong>does</strong> e il verbo torna senza -s: <em>she doesn't work</em>, <em>Does she work?</em></div>

<h3>Come si aggiunge la -s</h3>
<ul>
<li>Quasi sempre -s: <em>work → works, play → plays</em>.</li>
<li>Dopo -s, -sh, -ch, -x, -o si aggiunge -es: <em>watch → watches, go → goes, do → does</em>.</li>
<li>Consonante + y diventa -ies: <em>study → studies</em>.</li>
<li>Irregolare: <em>have → has</em>.</li>
</ul>

<h2>Dove vanno always, usually, often, never</h2>
<p>Gli avverbi di frequenza vanno <strong>prima del verbo</strong>, ma <strong>dopo to be</strong>.</p>
<p class="es"><span class="en">She often works late.</span><span class="it">Lavora spesso fino a tardi.</span></p>
<p class="es"><span class="en">She is always late.</span><span class="it">È sempre in ritardo.</span></p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">She work in a bank.</span><span class="si en">She works in a bank.</span></p>
<p class="coppia"><span class="no">Does she works?</span><span class="si en">Does she work?</span></p>
<p class="coppia"><span class="no">He don't like coffee.</span><span class="si en">He doesn't like coffee.</span></p>
<p class="coppia"><span class="no">Where you live?</span><span class="si en">Where do you live?</span></p>
<p class="coppia"><span class="no">I go always to the gym.</span><span class="si en">I always go to the gym.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scrivi", frase: "My brother ___ in a hospital.", aiuto: "work", giuste: ["works"], perche: "He/she/it nella frase affermativa: verbo + s." },
    { tipo: "scrivi", frase: "She ___ TV in the evening.", aiuto: "watch", giuste: ["watches"], perche: "Dopo -ch si aggiunge -es: watches." },
    { tipo: "scrivi", frase: "He ___ at university.", aiuto: "study", giuste: ["studies"], perche: "Consonante + y: la y diventa -ies (studies)." },
    { tipo: "scrivi", frase: "My parents ___ meat.", aiuto: "not eat", giuste: ["don't eat", "do not eat"], perche: "Negativa con they: don't + verbo." },
    { tipo: "scrivi", frase: "Laura ___ coffee.", aiuto: "not drink", giuste: ["doesn't drink", "does not drink"], perche: "He/she/it: doesn't + verbo senza -s." },
    { tipo: "scrivi", frase: "___ your sister live in Milan?", aiuto: "do / does", giuste: ["Does"], perche: "Your sister = she, quindi la domanda si fa con does." },
    { tipo: "scegli", frase: "Does he ___ English?", opzioni: ["speak", "speaks", "speaking"], giusta: "speak", perche: "Dopo does il verbo è senza -s: la -s è già in does." },
    { tipo: "scegli", frase: "Water ___ at 100 degrees.", opzioni: ["boils", "boil", "is boiling"], giusta: "boils", perche: "Fatto sempre vero: present simple, con la -s (water = it)." },
    { tipo: "scegli", frase: "The train ___ at 7:15 every morning.", opzioni: ["leaves", "leave", "is leaving"], giusta: "leaves", perche: "Orario che si ripete ogni giorno: present simple." },
    { tipo: "errore", frase: "Paolo [work] from home on Fridays.", corretta: "Paolo works from home on Fridays.", perche: "Paolo = he: works, con la -s." },
    { tipo: "errore", frase: "Does your father [likes] football?", corretta: "Does your father like football?", perche: "Nella domanda la -s va su does, non sul verbo." },
    { tipo: "errore", frase: "My boss [don't] speak French.", corretta: "My boss doesn't speak French.", perche: "My boss = he/she: doesn't." },
    { tipo: "ordina", giusta: "I usually have breakfast at eight.", altre: ["Usually I have breakfast at eight."], perche: "Usually va prima del verbo principale (have)." },
    { tipo: "ordina", giusta: "Where does your brother work?", perche: "Parola interrogativa + does + soggetto + verbo senza -s." },
    { tipo: "ordina", giusta: "She is never late for work.", perche: "Never va dopo to be (is never late)." },
    { tipo: "traduci", italiano: "Mia madre non lavora il sabato.", giuste: ["My mother does not work on Saturdays.", "My mother does not work on Saturday.", "My mum does not work on Saturdays.", "My mom does not work on Saturdays."], perche: "My mother = she: doesn't work. «Il sabato» (ogni sabato) = on Saturdays." },
    { tipo: "traduci", italiano: "Dove vivi?", giuste: ["Where do you live?"], perche: "Per fare la domanda serve do: Where do you live?" },
    { tipo: "traduci", italiano: "Lui va spesso al cinema.", giuste: ["He often goes to the cinema.", "He often goes to the movies."], perche: "Often prima del verbo; go con he diventa goes." }
  ]
});

LEZIONI.push({
  id: "present-continuous",
  livello: "A1",
  tempi: true,
  titolo: "Present continuous",
  sottotitolo: "Adesso e in questo periodo: I'm working",
  spiegazione: `
<h2>Le forme</h2>
<p><strong>am / is / are + verbo con -ing</strong></p>
<div class="scorri"><table class="tabella">
<tr><th>Affermativa</th><th>Negativa</th><th>Domanda</th></tr>
<tr><td class="f">I'm working</td><td class="f">I'm not working</td><td class="f">Am I working?</td></tr>
<tr><td class="f">she's working</td><td class="f">she isn't working</td><td class="f">Is she working?</td></tr>
<tr><td class="f">they're working</td><td class="f">they aren't working</td><td class="f">Are they working?</td></tr>
</table></div>
<h3>Come si aggiunge -ing</h3>
<ul>
<li><em>work → working, read → reading</em></li>
<li>E muta finale si toglie: <em>make → making, write → writing</em></li>
<li>Vocale + consonante finale accentata si raddoppia: <em>run → running, stop → stopping</em></li>
<li><em>lie → lying, die → dying</em></li>
</ul>

<h2>Quando si usa</h2>
<ul>
<li>Un'azione in corso <strong>adesso</strong>: <em>now, right now, at the moment, Look!, Listen!</em></li>
<li>Una situazione <strong>temporanea</strong>, di questo periodo: <em>this week, these days, this year</em>.</li>
<li>Un cambiamento in corso: <em>It's getting colder</em>.</li>
</ul>
<p class="es"><span class="en">What are you doing?</span><span class="it">Che cosa stai facendo? / Che fai (adesso)?</span></p>
<p class="es"><span class="en">I'm working from home this week.</span><span class="it">Questa settimana lavoro da casa.</span></p>
<p>In italiano spesso usiamo il presente normale anche per «adesso» e «in questo periodo». In inglese no: serve il continuous.</p>

<h2>Verbi che non vogliono -ing</h2>
<p>Alcuni verbi descrivono uno <strong>stato</strong>, non un'azione, e di solito non si usano al continuous: <em>know, understand, believe, remember, mean, like, love, hate, want, need, prefer, own, belong, seem</em>.</p>
<p class="es"><span class="en">I know the answer.</span><span class="it">So la risposta. (non «I'm knowing»)</span></p>
<p><strong>Think</strong> e <strong>have</strong> dipendono dal significato:</p>
<p class="es"><span class="en">I think it's a good idea.</span><span class="it">Penso (= secondo me) che sia una buona idea.</span></p>
<p class="es"><span class="en">I'm thinking about my future.</span><span class="it">Sto pensando al mio futuro (azione).</span></p>
<p class="es"><span class="en">I'm having lunch.</span><span class="it">Sto pranzando (have = azione; ma I have a car = possesso).</span></p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">What do you do now?</span><span class="si en">What are you doing now?</span><span class="spiega">«What do you do?» vuol dire «Che lavoro fai?»</span></p>
<p class="coppia"><span class="no">I'm knowing the answer.</span><span class="si en">I know the answer.</span></p>
<p class="coppia"><span class="no">She is study.</span><span class="si en">She is studying.</span></p>
<p class="coppia"><span class="no">Look! It rains.</span><span class="si en">Look! It's raining.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scrivi", frase: "Be quiet! The baby ___.", aiuto: "sleep", giuste: ["is sleeping"], perche: "Azione in corso adesso: is + sleeping." },
    { tipo: "scrivi", frase: "I ___ a very good book at the moment.", aiuto: "read", giuste: ["am reading"], perche: "At the moment = in questo periodo: present continuous." },
    { tipo: "scrivi", frase: "They ___ to music. They're studying.", aiuto: "not listen", giuste: ["aren't listening", "are not listening"], perche: "Negativa: are not + -ing." },
    { tipo: "scrivi", frase: "What ___ you doing?", aiuto: "be", giuste: ["are"], perche: "Domanda al continuous: What are you doing?" },
    { tipo: "scrivi", frase: "Look! It ___.", aiuto: "snow", giuste: ["is snowing"], perche: "Look! = sta succedendo adesso: it is snowing." },
    { tipo: "scrivi", frase: "We ___ a new house this year.", aiuto: "build", giuste: ["are building"], perche: "Situazione temporanea di quest'anno: present continuous." },
    { tipo: "scegli", frase: "I ___ what you mean.", opzioni: ["understand", "am understanding"], giusta: "understand", perche: "Understand è un verbo di stato: non si usa al continuous." },
    { tipo: "scegli", frase: "She ___ a shower right now. Can she call you back?", opzioni: ["is having", "has"], giusta: "is having", perche: "Have a shower è un'azione, quindi può andare al continuous." },
    { tipo: "scegli", frase: "I ___ this song!", opzioni: ["love", "am loving"], giusta: "love", perche: "Love è un verbo di stato: di solito si usa al present simple." },
    { tipo: "scegli", frase: "Prices ___ at the moment.", opzioni: ["are rising", "rise"], giusta: "are rising", perche: "Un cambiamento in corso: present continuous." },
    { tipo: "errore", frase: "She is [study] for an exam today.", corretta: "She is studying for an exam today.", perche: "Dopo is serve la forma con -ing." },
    { tipo: "errore", frase: "Sorry, I can't talk now. I [drive].", corretta: "Sorry, I can't talk now. I'm driving.", perche: "Azione in corso adesso: I'm driving." },
    { tipo: "errore", frase: "I [am needing] a new phone.", corretta: "I need a new phone.", perche: "Need è un verbo di stato: present simple." },
    { tipo: "ordina", giusta: "Why are you laughing?", perche: "Parola interrogativa + are + soggetto + -ing." },
    { tipo: "ordina", giusta: "Is it raining outside?", perche: "Domanda: Is + it + raining." },
    { tipo: "traduci", italiano: "Che cosa stai facendo?", giuste: ["What are you doing?"], perche: "Azione in corso: What are you doing?" },
    { tipo: "traduci", italiano: "Questa settimana lavoro da casa.", giuste: ["This week I am working from home.", "I am working from home this week."], perche: "Situazione temporanea: present continuous, anche se in italiano usi il presente." }
  ]
});

LEZIONI.push({
  id: "simple-vs-continuous",
  livello: "A1",
  tempi: true,
  titolo: "Present simple o continuous?",
  sottotitolo: "Sempre o adesso? I work, I'm working",
  spiegazione: `
<h2>La domanda da farsi</h2>
<p>È una cosa <strong>abituale o permanente</strong>, oppure sta succedendo <strong>adesso o in questo periodo</strong>?</p>
<div class="scorri"><table class="tabella">
<tr><th>Present simple</th><th>Present continuous</th></tr>
<tr><td class="f">I work in a bank.<br><small>(il mio lavoro)</small></td><td class="f">I'm working at home today.<br><small>(solo oggi)</small></td></tr>
<tr><td class="f">She lives in Rome.<br><small>(permanente)</small></td><td class="f">She's living with friends until she finds a flat.<br><small>(temporaneo)</small></td></tr>
<tr><td class="f">What do you do?<br><small>(che lavoro fai?)</small></td><td class="f">What are you doing?<br><small>(che stai facendo?)</small></td></tr>
<tr><td class="f">I think you're right.<br><small>(opinione: verbo di stato)</small></td><td class="f">I'm thinking about it.<br><small>(azione: ci sto pensando)</small></td></tr>
</table></div>

<h2>Parole che aiutano</h2>
<ul>
<li>Simple: <em>every day, usually, always, often, sometimes, never, on Mondays, twice a week</em>.</li>
<li>Continuous: <em>now, right now, at the moment, today, this week, these days, Look!, Listen!</em></li>
</ul>
<p>Ricorda: i verbi di stato (<em>know, like, want, need, understand, own...</em>) restano al simple anche se parli di adesso.</p>
<p class="es"><span class="en">I usually drink tea, but today I'm drinking coffee.</span><span class="it">Di solito bevo tè, ma oggi bevo caffè.</span></p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">My grandfather is reading the newspaper every morning.</span><span class="si en">My grandfather reads the newspaper every morning.</span></p>
<p class="coppia"><span class="no">Listen! Someone knocks at the door.</span><span class="si en">Listen! Someone is knocking at the door.</span></p>
<p class="coppia"><span class="no">She is owning a shop.</span><span class="si en">She owns a shop.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scrivi", frase: "Normally I ___ to work by bus.", aiuto: "go", giuste: ["go"], perche: "Normally = abitudine: present simple." },
    { tipo: "scrivi", frase: "Normally I go by bus, but today I ___.", aiuto: "walk", giuste: ["am walking"], perche: "Today, solo oggi: present continuous." },
    { tipo: "scrivi", frase: "Water ___ at 0 degrees.", aiuto: "freeze", giuste: ["freezes"], perche: "Fatto sempre vero: present simple." },
    { tipo: "scrivi", frase: "Can you turn the TV off? Nobody ___ it.", aiuto: "watch", giuste: ["is watching"], perche: "Adesso nessuno la sta guardando: present continuous." },
    { tipo: "scrivi", frase: "My sister usually ___ in London.", aiuto: "live", giuste: ["lives"], perche: "Situazione permanente: present simple con -s." },
    { tipo: "scrivi", frase: "This month she ___ in Paris for work.", aiuto: "stay", giuste: ["is staying"], perche: "This month = situazione temporanea: present continuous." },
    { tipo: "scegli", frase: "What ___? I'm a nurse.", opzioni: ["do you do", "are you doing"], giusta: "do you do", perche: "What do you do? = Che lavoro fai?" },
    { tipo: "scegli", frase: "What ___? I'm looking for my keys.", opzioni: ["are you doing", "do you do"], giusta: "are you doing", perche: "What are you doing? = Che stai facendo adesso?" },
    { tipo: "scegli", frase: "I ___ you're right.", opzioni: ["think", "am thinking"], giusta: "think", perche: "Think = avere un'opinione: verbo di stato, present simple." },
    { tipo: "scegli", frase: "Be quiet, please. I ___ about the problem.", opzioni: ["am thinking", "think"], giusta: "am thinking", perche: "Think about = riflettere, un'azione in corso: present continuous." },
    { tipo: "scegli", frase: "He ___ two cars.", opzioni: ["has", "is having"], giusta: "has", perche: "Have = possedere: verbo di stato, present simple." },
    { tipo: "scegli", frase: "These days the economy ___ worse.", opzioni: ["is getting", "gets"], giusta: "is getting", perche: "Un cambiamento in corso in questo periodo: present continuous." },
    { tipo: "errore", frase: "My grandfather [is reading] the newspaper every morning.", corretta: "My grandfather reads the newspaper every morning.", perche: "Every morning = abitudine: present simple." },
    { tipo: "errore", frase: "Listen! Someone [knocks] at the door.", corretta: "Listen! Someone is knocking at the door.", perche: "Listen! = sta succedendo adesso: present continuous." },
    { tipo: "errore", frase: "She [is owning] a small shop.", corretta: "She owns a small shop.", perche: "Own (possedere) è un verbo di stato: present simple." },
    { tipo: "traduci", italiano: "Di solito bevo tè, ma oggi bevo un caffè.", giuste: ["I usually drink tea, but today I am drinking a coffee.", "I usually drink tea, but today I am drinking coffee.", "I usually drink tea, but today I am having a coffee.", "Usually I drink tea, but today I am drinking a coffee."], perche: "Abitudine (simple) contro oggi (continuous)." },
    { tipo: "traduci", italiano: "Che lavoro fai?", giuste: ["What do you do?", "What is your job?", "What do you do for a living?"], perche: "What do you do? chiede il lavoro, non cosa stai facendo adesso." }
  ]
});

LEZIONI.push({
  id: "articoli",
  livello: "A1",
  tempi: false,
  titolo: "Articoli: a, an, the o niente",
  sottotitolo: "Un libro, il libro, i libri in generale",
  spiegazione: `
<h2>A e an</h2>
<p><strong>A / an</strong> = un, uno, una. Solo con nomi singolari che si possono contare. Si usa <strong>an</strong> davanti a un <em>suono</em> vocale, non a una lettera:</p>
<ul>
<li><em>an apple, an hour</em> (la h non si pronuncia)</li>
<li><em>a university, a European</em> (si pronunciano «iu»)</li>
</ul>
<p>Con i lavori serve sempre: in italiano diciamo «è medico», in inglese no.</p>
<p class="es"><span class="en">She's a doctor.</span><span class="it">È medico.</span></p>

<h2>The</h2>
<p><strong>The</strong> = il, lo, la, i, gli, le, ma <strong>solo per cose precise</strong>: già nominate, uniche o che chi ascolta sa quali sono.</p>
<p class="es"><span class="en">Can you close the door?</span><span class="it">Puoi chiudere la porta? (quella di questa stanza)</span></p>
<p class="es"><span class="en">I bought a jacket. The jacket was cheap.</span><span class="it">Ho comprato una giacca. La giacca era economica.</span></p>

<h2>Niente articolo: le cose in generale</h2>
<div class="regola">La regola più importante per noi: quando parli di qualcosa <strong>in generale</strong>, con i plurali e con i nomi non numerabili, in inglese l'articolo <strong>non</strong> si mette.</div>
<p class="es"><span class="en">I like music.</span><span class="it">Mi piace la musica (in generale).</span></p>
<p class="es"><span class="en">Life is short.</span><span class="it">La vita è breve.</span></p>
<p class="es"><span class="en">Dogs are friendly.</span><span class="it">I cani sono amichevoli.</span></p>
<p>Niente articolo anche con:</p>
<ul>
<li>pasti: <em>have breakfast, lunch, dinner</em></li>
<li><em>go to work, go to school, go to bed, at home</em></li>
<li>lingue, materie e sport: <em>English is difficult, I play football</em></li>
<li>giorni, mesi, la maggior parte dei paesi: <em>on Monday, in May, in Italy</em> (ma <em>the UK, the USA</em>)</li>
<li>i possessivi: <em>my car</em> (mai «the my car»)</li>
</ul>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">The life is beautiful.</span><span class="si en">Life is beautiful.</span></p>
<p class="coppia"><span class="no">I like the music.</span><span class="si en">I like music.</span><span class="spiega">Se parli della musica in generale.</span></p>
<p class="coppia"><span class="no">She is teacher.</span><span class="si en">She is a teacher.</span></p>
<p class="coppia"><span class="no">The my car is red.</span><span class="si en">My car is red.</span></p>
<p class="coppia"><span class="no">I go to the work.</span><span class="si en">I go to work.</span></p>
<p class="coppia"><span class="no">an university</span><span class="si en">a university</span></p>
</div>
`,
  esercizi: [
    { tipo: "scegli", frase: "She is ___ engineer.", opzioni: ["an", "a", "the", "—"], giusta: "an", perche: "Con i lavori serve a/an. Engineer inizia con un suono vocale: an." },
    { tipo: "scegli", frase: "I think ___ life is too short.", opzioni: ["—", "the", "a"], giusta: "—", perche: "La vita in generale: niente articolo (life)." },
    { tipo: "scegli", frase: "I love ___ Italian food.", opzioni: ["—", "the", "an"], giusta: "—", perche: "In generale: niente articolo." },
    { tipo: "scegli", frase: "Can you close ___ door, please?", opzioni: ["the", "a", "—"], giusta: "the", perche: "Una porta precisa, quella che vediamo: the." },
    { tipo: "scegli", frase: "I waited for ___ hour.", opzioni: ["an", "a"], giusta: "an", perche: "La h di hour non si pronuncia: suono vocale, an." },
    { tipo: "scegli", frase: "He studies at ___ university in Bologna.", opzioni: ["a", "an"], giusta: "a", perche: "University si pronuncia «iuniversiti»: suono consonante, a." },
    { tipo: "scegli", frase: "We usually have ___ dinner at eight.", opzioni: ["—", "the", "a"], giusta: "—", perche: "Con i pasti non si mette l'articolo: have dinner." },
    { tipo: "scrivi", consegna: "Scrivi a, an oppure the.", frase: "I bought a new jacket. ___ jacket was expensive.", giuste: ["The"], perche: "La giacca è già stata nominata: ora è precisa, the." },
    { tipo: "errore", frase: "[The] dogs are loyal animals.", corretta: "Dogs are loyal animals.", perche: "I cani in generale: plurale senza articolo." },
    { tipo: "errore", frase: "My brother is [engineer].", corretta: "My brother is an engineer.", perche: "Con i lavori serve a/an." },
    { tipo: "errore", frase: "I left [the] my keys at home.", corretta: "I left my keys at home.", perche: "Con my, your, his... non si mette the." },
    { tipo: "errore", frase: "She goes to [the] work by bike.", corretta: "She goes to work by bike.", perche: "Go to work, go to school, go to bed: senza articolo." },
    { tipo: "errore", frase: "[The] English is not an easy language.", corretta: "English is not an easy language.", perche: "Le lingue non vogliono l'articolo." },
    { tipo: "traduci", italiano: "Mi piace la musica jazz.", giuste: ["I like jazz music.", "I like jazz.", "I love jazz music."], perche: "La musica jazz in generale: niente articolo." },
    { tipo: "traduci", italiano: "Mio padre è medico.", giuste: ["My father is a doctor.", "My dad is a doctor."], perche: "Con i lavori serve a: a doctor." },
    { tipo: "traduci", italiano: "Vado a letto alle undici.", giuste: ["I go to bed at eleven.", "I go to bed at 11.", "I go to bed at eleven o'clock.", "I go to bed at 11 o'clock."], perche: "Go to bed, senza articolo." }
  ]
});

LEZIONI.push({
  id: "numerabili",
  livello: "A1",
  tempi: false,
  titolo: "Contabili e non: some, any, much, many",
  sottotitolo: "information, advice, news, people: le trappole",
  spiegazione: `
<h2>Nomi che non si contano</h2>
<p>Alcuni nomi in inglese <strong>non hanno il plurale</strong> e non vogliono a/an. Il verbo va al singolare.</p>
<p>Le trappole per noi sono quelle che in italiano sono plurali o numerabili:</p>
<div class="scorri"><table class="tabella">
<tr><td>le informazioni</td><td class="f">information (is)</td></tr>
<tr><td>i consigli, un consiglio</td><td class="f">advice, a piece of advice</td></tr>
<tr><td>le notizie</td><td class="f">news (is)</td></tr>
<tr><td>i capelli</td><td class="f">hair (is)</td></tr>
<tr><td>i mobili</td><td class="f">furniture</td></tr>
<tr><td>i bagagli</td><td class="f">luggage</td></tr>
<tr><td>i compiti</td><td class="f">homework</td></tr>
</table></div>
<p class="es"><span class="en">The news is good.</span><span class="it">Le notizie sono buone.</span></p>
<p class="es"><span class="en">Can I give you some advice?</span><span class="it">Posso darti un consiglio?</span></p>

<h2>People è plurale</h2>
<p class="es"><span class="en">People are very friendly here.</span><span class="it">La gente qui è molto cordiale.</span></p>
<p>Una persona = <em>a person</em>, due persone = <em>two people</em>.</p>

<h2>Some e any</h2>
<ul>
<li><strong>some</strong> nelle frasi affermative e quando offri o chiedi qualcosa: <em>Would you like some tea?</em></li>
<li><strong>any</strong> nelle negative e nelle domande: <em>I don't have any money. Do you have any questions?</em></li>
</ul>

<h2>Much, many, a lot of</h2>
<ul>
<li><strong>many</strong> con i numerabili: <em>How many people?</em></li>
<li><strong>much</strong> con i non numerabili, soprattutto in domande e negative: <em>How much money? I don't have much time.</em></li>
<li>Nelle frasi affermative si usa di solito <strong>a lot of</strong>: <em>I have a lot of work</em>.</li>
<li><strong>a few</strong> (numerabili) e <strong>a little</strong> (non numerabili) = un po', alcuni.</li>
</ul>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">Can you give me an advice?</span><span class="si en">Can you give me some advice?</span></p>
<p class="coppia"><span class="no">The informations are wrong.</span><span class="si en">The information is wrong.</span></p>
<p class="coppia"><span class="no">People is nice.</span><span class="si en">People are nice.</span></p>
<p class="coppia"><span class="no">I have much work.</span><span class="si en">I have a lot of work.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scegli", frase: "How ___ money do you have?", opzioni: ["much", "many"], giusta: "much", perche: "Money non si conta: much." },
    { tipo: "scegli", frase: "How ___ people came to the party?", opzioni: ["many", "much"], giusta: "many", perche: "People si conta (plurale): many." },
    { tipo: "scegli", frase: "There aren't ___ eggs in the fridge.", opzioni: ["any", "some"], giusta: "any", perche: "Frase negativa: any." },
    { tipo: "scegli", frase: "Would you like ___ coffee?", opzioni: ["some", "any"], giusta: "some", perche: "Quando offri qualcosa si usa some, anche se è una domanda." },
    { tipo: "scegli", frase: "The news ___ very good today.", opzioni: ["is", "are"], giusta: "is", perche: "News è singolare in inglese: the news is." },
    { tipo: "scegli", frase: "Her hair ___ long and dark.", opzioni: ["is", "are"], giusta: "is", perche: "Hair (i capelli) è non numerabile: verbo al singolare." },
    { tipo: "scegli", frase: "I have ___ friends in Rome, so I'm not alone.", opzioni: ["a few", "a little", "few"], giusta: "a few", perche: "Friends si conta: a few (alcuni). Few da solo vorrebbe dire «pochi, quasi nessuno»." },
    { tipo: "scegli", frase: "Can I give you ___ advice?", opzioni: ["some", "an", "many"], giusta: "some", perche: "Advice non si conta: some advice (oppure a piece of advice)." },
    { tipo: "scrivi", frase: "People ___ very friendly here.", aiuto: "be", giuste: ["are"], perche: "People è plurale: are." },
    { tipo: "scrivi", frase: "This information ___ very useful.", aiuto: "be", giuste: ["is"], perche: "Information è singolare: is." },
    { tipo: "errore", frase: "We need [informations] about the course.", corretta: "We need information about the course.", perche: "Information non ha il plurale." },
    { tipo: "errore", frase: "I have [many] work this week.", corretta: "I have a lot of work this week.", perche: "Work (lavoro) non si conta; nelle frasi affermative si usa a lot of." },
    { tipo: "errore", frase: "All my [luggages are] in the car.", corretta: "All my luggage is in the car.", perche: "Luggage non ha il plurale e vuole il verbo al singolare." },
    { tipo: "errore", frase: "I don't have [some] money.", corretta: "I don't have any money.", perche: "Frase negativa: any." },
    { tipo: "traduci", italiano: "Ho bisogno di un consiglio.", giuste: ["I need some advice.", "I need a piece of advice.", "I need advice."], perche: "Advice non si conta: some advice o a piece of advice." },
    { tipo: "traduci", italiano: "Quante persone ci sono?", giuste: ["How many people are there?"], perche: "People si conta: how many. Ci sono = there are." },
    { tipo: "traduci", italiano: "Non abbiamo molto tempo.", giuste: ["We do not have much time.", "We have not got much time."], perche: "Time non si conta: much, nella negativa." }
  ]
});

LEZIONI.push({
  id: "domande",
  livello: "A1",
  tempi: false,
  titolo: "Fare domande",
  sottotitolo: "do, does, did, l'ordine delle parole e «Who called?»",
  spiegazione: `
<h2>Serve l'ordine, non solo il tono</h2>
<p>In italiano una domanda si fa con il tono della voce: «Vivi qui?». In inglese cambia l'<strong>ordine delle parole</strong>.</p>
<div class="regola">Parola interrogativa + <strong>ausiliare</strong> + soggetto + verbo<br>(<em>do / does / did, be, have, can, will</em>...)</div>
<p class="es"><span class="en">Where do you work?</span><span class="it">Dove lavori?</span></p>
<p class="es"><span class="en">What is she doing?</span><span class="it">Che cosa sta facendo?</span></p>
<p class="es"><span class="en">Can you swim?</span><span class="it">Sai nuotare?</span></p>
<p>Se nella frase non c'è un ausiliare, lo aggiungi tu: <strong>do / does</strong> (presente) o <strong>did</strong> (passato).</p>

<h2>Domande sul soggetto: niente do</h2>
<p>Quando <em>who</em> o <em>what</em> sono il <strong>soggetto</strong> (chi fa l'azione), non si usa do/does/did.</p>
<p class="es"><span class="en">Who called you?</span><span class="it">Chi ti ha chiamato? (qualcuno ha chiamato)</span></p>
<p class="es"><span class="en">Who did you call?</span><span class="it">Chi hai chiamato? (tu hai chiamato qualcuno)</span></p>
<p class="es"><span class="en">What happened?</span><span class="it">Cos'è successo?</span></p>

<h2>La preposizione va in fondo</h2>
<p class="es"><span class="en">Where are you from?</span><span class="it">Di dove sei?</span></p>
<p class="es"><span class="en">Who are you talking to?</span><span class="it">Con chi stai parlando?</span></p>
<p class="es"><span class="en">What is the book about?</span><span class="it">Di cosa parla il libro?</span></p>

<h2>Parole utili</h2>
<p><em>How old</em> (quanti anni), <em>How long</em> (quanto tempo), <em>How often</em> (quanto spesso), <em>How much / How many</em> (quanto/quanti), <em>What time</em> (a che ora), <em>Whose</em> (di chi), <em>Which</em> (quale, tra pochi).</p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">Where you live?</span><span class="si en">Where do you live?</span></p>
<p class="coppia"><span class="no">What means this word?</span><span class="si en">What does this word mean?</span></p>
<p class="coppia"><span class="no">Who did call you?</span><span class="si en">Who called you?</span></p>
<p class="coppia"><span class="no">From where are you?</span><span class="si en">Where are you from?</span></p>
<p class="coppia"><span class="no">How many years do you have?</span><span class="si en">How old are you?</span></p>
</div>
`,
  esercizi: [
    { tipo: "ordina", giusta: "Where do your parents live?", perche: "Where + do + soggetto (your parents) + live." },
    { tipo: "ordina", giusta: "What does this word mean?", perche: "What + does + soggetto + mean (senza -s)." },
    { tipo: "ordina", giusta: "Who are you talking to?", perche: "La preposizione to va in fondo alla domanda." },
    { tipo: "ordina", giusta: "How often do you go to the gym?", perche: "How often + do + you + go." },
    { tipo: "ordina", giusta: "Where are you from?", perche: "Di dove sei? = Where are you from? La preposizione va in fondo." },
    { tipo: "scegli", frase: "___ you like sushi?", opzioni: ["Do", "Are", "Does"], giusta: "Do", perche: "Like è un verbo normale: domanda con do (you)." },
    { tipo: "scegli", frase: "___ your sister working today?", opzioni: ["Is", "Does", "Do"], giusta: "Is", perche: "Working è un continuous: l'ausiliare è be (is)." },
    { tipo: "scegli", frase: "Who ___ in this house?", opzioni: ["lives", "does live", "do live"], giusta: "lives", perche: "Who è il soggetto (chi abita?): niente does." },
    { tipo: "scegli", frase: "What ___ in your city at night?", opzioni: ["happens", "does happen"], giusta: "happens", perche: "What è il soggetto: What happens?" },
    { tipo: "scrivi", consegna: "Scrivi la parola interrogativa.", frase: "___ old is your daughter?", giuste: ["How"], perche: "Quanti anni = How old." },
    { tipo: "scrivi", consegna: "Scrivi la parola interrogativa.", frase: "___ does the film start? At nine.", giuste: ["What time", "When"], perche: "A che ora = What time (oppure When)." },
    { tipo: "scrivi", consegna: "Scrivi la parola interrogativa.", frase: "___ bag is this? It's Marco's.", giuste: ["Whose"], perche: "Di chi = Whose." },
    { tipo: "errore", frase: "Where [you work]?", corretta: "Where do you work?", perche: "Manca l'ausiliare: Where do you work?" },
    { tipo: "errore", frase: "What [means] this sentence?", corretta: "What does this sentence mean?", perche: "Serve does, e il verbo torna senza -s: What does it mean?" },
    { tipo: "traduci", italiano: "Quanti anni hai?", giuste: ["How old are you?"], perche: "L'età si chiede con How old + be." },
    { tipo: "traduci", italiano: "Di cosa parla il libro?", giuste: ["What is the book about?"], perche: "Parlare di = be about, e la preposizione va in fondo." },
    { tipo: "traduci", italiano: "Chi vive con te?", giuste: ["Who lives with you?"], perche: "Who è il soggetto: niente does, e il verbo prende la -s." }
  ]
});
