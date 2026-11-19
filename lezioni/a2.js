/* Livello A2: il passato e il futuro.
   Regola per chi modifica: aggiungi i nuovi esercizi SOLO in fondo a ogni lezione. */

LEZIONI.push({
  id: "past-simple",
  livello: "A2",
  tempi: true,
  titolo: "Past simple",
  sottotitolo: "Ieri, l'anno scorso: I worked, I went, did you...?",
  spiegazione: `
<h2>Quando si usa</h2>
<p>Per un'azione <strong>finita in un momento preciso del passato</strong>: <em>yesterday, last week, in 2019, two days ago, when I was a child</em>.</p>
<p>In italiano corrisponde spesso al <strong>passato prossimo</strong>: «Ieri ho visto Marco» è <em>Yesterday I saw Marco</em>, non «I have seen».</p>
<p class="es"><span class="en">I saw Marco yesterday.</span><span class="it">Ho visto Marco ieri.</span></p>

<h2>Le forme</h2>
<div class="scorri"><table class="tabella">
<tr><th>Affermativa</th><th>Negativa</th><th>Domanda</th></tr>
<tr><td class="f">I worked / I went</td><td class="f">I didn't work / I didn't go</td><td class="f">Did you work? / Did you go?</td></tr>
</table></div>
<div class="regola">Dopo <strong>didn't</strong> e <strong>did</strong> il verbo torna alla forma base: il passato è già in did. <em>Did you go?</em> (mai «Did you went?»)</div>
<p>È uguale per tutte le persone: <em>I worked, she worked, they worked</em>.</p>

<h3>Verbi regolari: -ed</h3>
<p><em>work → worked, live → lived, stop → stopped, study → studied</em></p>
<h3>I verbi irregolari più usati</h3>
<div class="scorri"><table class="tabella">
<tr><td class="f">be → was / were</td><td class="f">have → had</td><td class="f">go → went</td></tr>
<tr><td class="f">do → did</td><td class="f">make → made</td><td class="f">get → got</td></tr>
<tr><td class="f">see → saw</td><td class="f">come → came</td><td class="f">take → took</td></tr>
<tr><td class="f">say → said</td><td class="f">tell → told</td><td class="f">give → gave</td></tr>
<tr><td class="f">buy → bought</td><td class="f">think → thought</td><td class="f">know → knew</td></tr>
<tr><td class="f">find → found</td><td class="f">leave → left</td><td class="f">meet → met</td></tr>
<tr><td class="f">write → wrote</td><td class="f">eat → ate</td><td class="f">drink → drank</td></tr>
<tr><td class="f">speak → spoke</td><td class="f">feel → felt</td><td class="f">lose → lost</td></tr>
</table></div>

<h2>Was e were</h2>
<p><em>I, he, she, it</em> → <strong>was</strong>; <em>you, we, they</em> → <strong>were</strong>. Negativa <em>wasn't / weren't</em>, domanda <em>Was he...? Were you...?</em> (senza did).</p>
<p class="es"><span class="en">I was born in 2001.</span><span class="it">Sono nato nel 2001.</span></p>

<h2>«Fa» si dice ago</h2>
<p class="es"><span class="en">I moved here five years ago.</span><span class="it">Mi sono trasferito qui cinque anni fa.</span></p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">I have seen him yesterday.</span><span class="si en">I saw him yesterday.</span></p>
<p class="coppia"><span class="no">Did you went?</span><span class="si en">Did you go?</span></p>
<p class="coppia"><span class="no">I didn't saw it.</span><span class="si en">I didn't see it.</span></p>
<p class="coppia"><span class="no">before two years</span><span class="si en">two years ago</span></p>
<p class="coppia"><span class="no">I am born in 2001.</span><span class="si en">I was born in 2001.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scrivi", frase: "Yesterday I ___ to the cinema.", aiuto: "go", giuste: ["went"], perche: "Go è irregolare: went." },
    { tipo: "scrivi", frase: "We ___ a great film last night.", aiuto: "see", giuste: ["saw"], perche: "Last night = momento finito: past simple (saw)." },
    { tipo: "scrivi", frase: "She ___ in Berlin for three years, then she moved to Rome.", aiuto: "live", giuste: ["lived"], perche: "Periodo finito nel passato: past simple." },
    { tipo: "scrivi", frase: "I ___ my keys this morning and I couldn't open the door.", aiuto: "lose", giuste: ["lost"], perche: "Lose è irregolare: lost." },
    { tipo: "scrivi", frase: "They ___ to the party because they were ill.", aiuto: "not come", giuste: ["didn't come", "did not come"], perche: "Negativa: didn't + verbo base." },
    { tipo: "scrivi", frase: "Where ___ you go on holiday last summer?", aiuto: "do", giuste: ["did"], perche: "Domanda al passato: did." },
    { tipo: "scrivi", frase: "The shops ___ closed yesterday.", aiuto: "be", giuste: ["were"], perche: "The shops = they: were." },
    { tipo: "scrivi", frase: "I ___ at home last night.", aiuto: "be, negativa", giuste: ["wasn't", "was not"], perche: "I: was, negativa wasn't." },
    { tipo: "scegli", frase: "Did you ___ the email?", opzioni: ["send", "sent"], giusta: "send", perche: "Dopo did il verbo è alla forma base." },
    { tipo: "scegli", frase: "I ___ him two weeks ago.", opzioni: ["met", "have met", "meet"], giusta: "met", perche: "Ago = momento finito: past simple." },
    { tipo: "scegli", frase: "When ___ you born?", opzioni: ["were", "are", "did"], giusta: "were", perche: "Nascere = be born, al passato: When were you born?" },
    { tipo: "errore", frase: "I [have seen] Marco yesterday.", corretta: "I saw Marco yesterday.", perche: "Con yesterday si usa il past simple, non il present perfect." },
    { tipo: "errore", frase: "Did she [called] you last night?", corretta: "Did she call you last night?", perche: "Dopo did il verbo resta alla forma base." },
    { tipo: "errore", frase: "We moved here [before] five years.", corretta: "We moved here five years ago.", perche: "«Cinque anni fa» = five years ago (ago va dopo)." },
    { tipo: "ordina", giusta: "What did you do last weekend?", perche: "What + did + you + do (verbo base)." },
    { tipo: "traduci", italiano: "Sono nato nel 2001.", giuste: ["I was born in 2001."], perche: "Nascere = be born: I was born." },
    { tipo: "traduci", italiano: "Ieri non ho lavorato.", giuste: ["I did not work yesterday.", "Yesterday I did not work."], perche: "Ieri = momento finito: past simple (didn't work)." },
    { tipo: "traduci", italiano: "Cosa hai mangiato a pranzo?", giuste: ["What did you eat for lunch?", "What did you have for lunch?"], perche: "Pranzo di oggi già finito: past simple, What did you eat?" }
  ]
});

LEZIONI.push({
  id: "past-continuous",
  livello: "A2",
  tempi: true,
  titolo: "Past continuous",
  sottotitolo: "Stavo facendo: I was working when...",
  spiegazione: `
<h2>Le forme</h2>
<p><strong>was / were + verbo con -ing</strong></p>
<p class="es"><span class="en">I was working. They were sleeping. Were you listening?</span></p>

<h2>Quando si usa</h2>
<ul>
<li>Un'azione <strong>in corso</strong> in un momento del passato: <em>At 8 o'clock I was having dinner.</em></li>
<li>Un'azione lunga <strong>interrotta</strong> da una breve (che va al past simple).</li>
<li>Due azioni lunghe nello stesso momento, spesso con <em>while</em> (mentre).</li>
<li>Per descrivere la scena di un racconto: <em>The sun was shining...</em></li>
</ul>
<p class="es"><span class="en">I was cooking when the phone rang.</span><span class="it">Stavo cucinando quando ha suonato il telefono.</span></p>
<p class="es"><span class="en">While I was walking home, I met Anna.</span><span class="it">Mentre tornavo a casa, ho incontrato Anna.</span></p>

<h2>L'imperfetto italiano: due strade diverse</h2>
<div class="regola">
L'imperfetto per un'azione <strong>in corso</strong> → past continuous: «Mentre <em>cucinavo</em>...» = <em>While I was cooking...</em><br>
L'imperfetto per un'<strong>abitudine</strong> → past simple o <em>used to</em>, <strong>non</strong> past continuous: «Da bambino <em>giocavo</em> a calcio» = <em>As a child I played / used to play football.</em>
</div>
<p>Come al presente, i verbi di stato non vanno al continuous: <em>I knew</em>, non «I was knowing».</p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">When I was a child I was playing football every day.</span><span class="si en">When I was a child I played football every day.</span></p>
<p class="coppia"><span class="no">While I cooked, the phone was ringing.</span><span class="si en">While I was cooking, the phone rang.</span></p>
<p class="coppia"><span class="no">I was knowing the answer.</span><span class="si en">I knew the answer.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scrivi", frase: "At 9 p.m. yesterday I ___ TV.", aiuto: "watch", giuste: ["was watching"], perche: "Azione in corso in un momento preciso del passato." },
    { tipo: "scrivi", frase: "They ___ dinner when we arrived.", aiuto: "have", giuste: ["were having"], perche: "Azione lunga (la cena) interrotta dal nostro arrivo." },
    { tipo: "scrivi", frase: "I was walking home when it ___ to rain.", aiuto: "start", giuste: ["started"], perche: "L'azione breve che interrompe va al past simple." },
    { tipo: "scrivi", frase: "What ___ you doing at midnight?", aiuto: "be", giuste: ["were"], perche: "You: were. What were you doing?" },
    { tipo: "scrivi", frase: "She broke her leg while she ___.", aiuto: "ski", giuste: ["was skiing"], perche: "While + azione lunga in corso: past continuous." },
    { tipo: "scrivi", frase: "The phone rang while I ___ a shower.", aiuto: "have", giuste: ["was having"], perche: "Azione in corso, interrotta dal telefono." },
    { tipo: "scegli", frase: "When the teacher came in, the students ___.", opzioni: ["were talking", "talked", "are talking"], giusta: "were talking", perche: "Stavano già parlando quando è entrata: past continuous." },
    { tipo: "scegli", frase: "I ___ my wallet while I was shopping.", opzioni: ["lost", "was losing"], giusta: "lost", perche: "Perdere il portafoglio è un'azione breve: past simple." },
    { tipo: "scegli", frase: "When I was a child, I ___ to the beach every summer.", opzioni: ["went", "was going"], giusta: "went", perche: "Abitudine nel passato: past simple (o used to), non continuous." },
    { tipo: "scegli", frase: "I ___ the answer, but I didn't say anything.", opzioni: ["knew", "was knowing"], giusta: "knew", perche: "Know è un verbo di stato: niente continuous." },
    { tipo: "errore", frase: "While I [cooked], the doorbell rang.", corretta: "While I was cooking, the doorbell rang.", perche: "While + azione lunga in corso: was cooking." },
    { tipo: "errore", frase: "When I was young, I [was playing] tennis every Saturday.", corretta: "When I was young, I played tennis every Saturday.", perche: "Ogni sabato = abitudine: past simple." },
    { tipo: "ordina", giusta: "What were you doing at eight o'clock?", perche: "What + were + you + doing." },
    { tipo: "ordina", giusta: "It was raining when we left.", perche: "La pioggia era in corso (past continuous) quando siamo usciti (past simple)." },
    { tipo: "traduci", italiano: "Mentre guidavo, ho visto un incidente.", giuste: ["While I was driving, I saw an accident."], perche: "Guidavo = azione in corso (was driving); ho visto = azione breve (saw)." },
    { tipo: "traduci", italiano: "Cosa stavi facendo quando ti ho chiamato?", giuste: ["What were you doing when I called you?", "What were you doing when I phoned you?", "What were you doing when I rang you?", "What were you doing when I called?"], perche: "Stavi facendo = were you doing; ho chiamato = called." }
  ]
});

LEZIONI.push({
  id: "present-perfect",
  livello: "A2",
  tempi: true,
  titolo: "Present perfect",
  sottotitolo: "Esperienze e novità: I've been, I've just finished",
  spiegazione: `
<h2>Le forme</h2>
<p><strong>have / has + participio passato</strong></p>
<div class="scorri"><table class="tabella">
<tr><th>Affermativa</th><th>Negativa</th><th>Domanda</th></tr>
<tr><td class="f">I have (I've) finished</td><td class="f">I haven't finished</td><td class="f">Have you finished?</td></tr>
<tr><td class="f">she has (she's) finished</td><td class="f">she hasn't finished</td><td class="f">Has she finished?</td></tr>
</table></div>
<h3>Participi irregolari da sapere</h3>
<p class="f"><em>be → been, go → gone, do → done, see → seen, eat → eaten, write → written, take → taken, give → given, buy → bought, make → made, find → found, meet → met, know → known, break → broken, forget → forgotten, speak → spoken, lose → lost, leave → left, drink → drunk</em></p>

<h2>A cosa serve: collega il passato al presente</h2>
<h3>1. Esperienze nella vita, senza dire quando</h3>
<p class="es"><span class="en">Have you ever been to London?</span><span class="it">Sei mai stato a Londra?</span></p>
<p class="es"><span class="en">I've never eaten sushi.</span><span class="it">Non ho mai mangiato il sushi.</span></p>
<h3>2. Novità con un risultato adesso</h3>
<p class="es"><span class="en">I've lost my keys.</span><span class="it">Ho perso le chiavi (e adesso non le ho).</span></p>
<h3>3. Con just, already, yet</h3>
<ul>
<li><strong>just</strong> = appena: <em>I've just arrived.</em></li>
<li><strong>already</strong> = già: <em>She's already left.</em></li>
<li><strong>yet</strong> = ancora (negative) / già (domande), in fondo alla frase: <em>I haven't decided yet. Have you finished yet?</em></li>
</ul>
<h3>4. Periodo non ancora finito</h3>
<p class="es"><span class="en">I've drunk three coffees today.</span><span class="it">Oggi ho bevuto tre caffè (e oggi non è finito).</span></p>

<h2>Been o gone?</h2>
<p class="es"><span class="en">She has been to Paris.</span><span class="it">È stata a Parigi (ed è tornata).</span></p>
<p class="es"><span class="en">She has gone to Paris.</span><span class="it">È andata a Parigi (ed è ancora lì).</span></p>

<div class="regola">Il present perfect <strong>non</strong> si usa con un momento finito (<em>yesterday, last year, in 2010, ago</em>): lì serve il past simple. Lo vediamo bene nella prossima lezione.</div>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">Have you ever been in London?</span><span class="si en">Have you ever been to London?</span></p>
<p class="coppia"><span class="no">I haven't finished already.</span><span class="si en">I haven't finished yet.</span></p>
<p class="coppia"><span class="no">She has went home.</span><span class="si en">She has gone home.</span></p>
<p class="coppia"><span class="no">I've seen him yesterday.</span><span class="si en">I saw him yesterday.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scrivi", frase: "I have never ___ sushi.", aiuto: "eat", giuste: ["eaten"], perche: "Participio di eat: eaten." },
    { tipo: "scrivi", frase: "Have you ever ___ to New York?", aiuto: "be", giuste: ["been"], perche: "Esperienza: Have you ever been to...?" },
    { tipo: "scrivi", frase: "She ___ her phone. She can't find it anywhere.", aiuto: "lose", giuste: ["has lost"], perche: "Risultato adesso (non lo trova): present perfect." },
    { tipo: "scrivi", frase: "We have just ___ dinner.", aiuto: "finish", giuste: ["finished"], perche: "Just = appena: have just + participio." },
    { tipo: "scrivi", frase: "I ___ my homework yet.", aiuto: "not do", giuste: ["haven't done", "have not done"], perche: "Negativa con yet: haven't + participio (done)." },
    { tipo: "scrivi", frase: "___ you seen my glasses?", aiuto: "have", giuste: ["Have"], perche: "Domanda al present perfect: Have you seen...?" },
    { tipo: "scrivi", frase: "He ___ three coffees today.", aiuto: "drink", giuste: ["has drunk"], perche: "Today non è finito: present perfect. Participio di drink: drunk." },
    { tipo: "scegli", frase: "Have you finished ___?", opzioni: ["yet", "already", "just"], giusta: "yet", perche: "Nelle domande, «già» in fondo alla frase si dice yet." },
    { tipo: "scegli", frase: "I've ___ seen this film. Let's watch something else.", opzioni: ["already", "yet", "ever"], giusta: "already", perche: "Already = già, nelle frasi affermative, prima del participio." },
    { tipo: "scegli", frase: "Where's Tom? He ___ to the supermarket. He'll be back soon.", opzioni: ["has gone", "has been"], giusta: "has gone", perche: "È andato ed è ancora lì: has gone." },
    { tipo: "scegli", frase: "I ___ to Spain three times.", opzioni: ["have been", "have gone"], giusta: "have been", perche: "Ci sei stato e sei tornato: have been." },
    { tipo: "errore", frase: "Have you ever been [in] Japan?", corretta: "Have you ever been to Japan?", perche: "Essere stati in un posto: been to." },
    { tipo: "errore", frase: "She has [went] home.", corretta: "She has gone home.", perche: "Dopo has serve il participio (gone), non il past simple (went)." },
    { tipo: "errore", frase: "I haven't finished [already].", corretta: "I haven't finished yet.", perche: "Nelle negative «ancora» si dice yet." },
    { tipo: "ordina", giusta: "Have you ever seen a ghost?", perche: "Have + you + ever + participio." },
    { tipo: "ordina", giusta: "I have just sent you an email.", perche: "Just va tra have e il participio." },
    { tipo: "traduci", italiano: "Non sono mai stato in Australia.", giuste: ["I have never been to Australia."], perche: "Esperienza nella vita: have never been to." },
    { tipo: "traduci", italiano: "Hai già mangiato?", giuste: ["Have you eaten yet?", "Have you already eaten?", "Have you had lunch yet?", "Have you had dinner yet?"], perche: "Domanda su una cosa che ci si aspetta: Have you eaten yet?" }
  ]
});

LEZIONI.push({
  id: "perfect-o-past",
  livello: "A2",
  tempi: true,
  titolo: "Present perfect o past simple?",
  sottotitolo: "La differenza che gli italiani sbagliano di più",
  spiegazione: `
<h2>Il problema</h2>
<p>Il nostro passato prossimo («ho visto») si traduce a volte con il past simple e a volte con il present perfect. Per scegliere chiediti: <strong>si dice o si capisce QUANDO?</strong></p>
<div class="regola">
<strong>Momento finito</strong>, detto o chiaro → <strong>past simple</strong>: <em>I saw Marco yesterday.</em><br>
<strong>Il quando non conta</strong> (esperienza, novità, risultato adesso) oppure il periodo <strong>non è finito</strong> → <strong>present perfect</strong>: <em>I've seen that film three times.</em>
</div>

<div class="scorri"><table class="tabella">
<tr><th>Past simple</th><th>Present perfect</th></tr>
<tr><td><em>yesterday, last week, in 2019, two days ago, when I was young, What time...?, When...?</em></td><td><em>ever, never, just, already, yet, so far, today, this week, recently</em></td></tr>
<tr><td class="f">I went to Paris last year.</td><td class="f">I've been to Paris three times.</td></tr>
<tr><td class="f">She left her job in May.</td><td class="f">She's left her job! (novità)</td></tr>
</table></div>

<h2>Come va una conversazione</h2>
<p>Si inizia spesso con il present perfect (la novità o l'esperienza) e si continua con il past simple (i dettagli: quando, dove, come).</p>
<p class="es"><span class="en">I've been to Japan.</span><span class="it">Sono stato in Giappone.</span></p>
<p class="es"><span class="en">Really? When did you go?</span><span class="it">Davvero? Quando ci sei andato?</span></p>
<p class="es"><span class="en">I went in 2018.</span><span class="it">Ci sono andato nel 2018.</span></p>

<h2>Altri casi</h2>
<ul>
<li><strong>When...?</strong> e <strong>What time...?</strong> vogliono il past simple: <em>When did you arrive?</em></li>
<li>Persone che non ci sono più e periodi chiusi: <em>Shakespeare wrote many plays.</em></li>
<li><em>this morning</em>: se è ancora mattina, present perfect; se è pomeriggio, la mattina è finita: past simple.</li>
</ul>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">I've been to Paris last year.</span><span class="si en">I went to Paris last year.</span></p>
<p class="coppia"><span class="no">When have you arrived?</span><span class="si en">When did you arrive?</span></p>
<p class="coppia"><span class="no">We have moved here in 2020.</span><span class="si en">We moved here in 2020.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scrivi", frase: "I ___ to Paris last year.", aiuto: "go", giuste: ["went"], perche: "Last year = momento finito: past simple." },
    { tipo: "scrivi", frase: "I ___ to Paris three times.", aiuto: "be", giuste: ["have been"], perche: "Esperienza, senza dire quando: present perfect." },
    { tipo: "scrivi", frase: "She ___ her job last month.", aiuto: "leave", giuste: ["left"], perche: "Last month = momento finito: past simple." },
    { tipo: "scrivi", frase: "I can't come out. I ___ my homework yet.", aiuto: "not finish", giuste: ["haven't finished", "have not finished"], perche: "Yet + risultato adesso: present perfect." },
    { tipo: "scrivi", frase: "Shakespeare ___ many plays.", aiuto: "write", giuste: ["wrote"], perche: "Shakespeare non c'è più: periodo chiuso, past simple." },
    { tipo: "scrivi", frase: "Look! Somebody ___ my car!", aiuto: "damage", giuste: ["has damaged"], perche: "Novità con un risultato visibile adesso: present perfect." },
    { tipo: "scegli", frase: "When ___ you get married?", opzioni: ["did", "have"], giusta: "did", perche: "Con When si usa il past simple." },
    { tipo: "scegli", frase: "I ___ a great film yesterday.", opzioni: ["saw", "have seen"], giusta: "saw", perche: "Yesterday: past simple." },
    { tipo: "scegli", frase: "___ Chinese food?", opzioni: ["Have you ever tried", "Did you ever try"], giusta: "Have you ever tried", perche: "Esperienza nella vita con ever: present perfect." },
    { tipo: "scegli", frase: "I ___ three cups of coffee so far today.", opzioni: ["have had", "had"], giusta: "have had", perche: "So far today = periodo non finito: present perfect." },
    { tipo: "scegli", frase: "My grandfather ___ in a factory for 40 years. He retired in 2005.", opzioni: ["worked", "has worked"], giusta: "worked", perche: "È in pensione: quel periodo è finito, past simple." },
    { tipo: "scegli", frase: "This is the best pizza I ___.", opzioni: ["have ever eaten", "ever ate"], giusta: "have ever eaten", perche: "«La migliore che abbia mai mangiato»: esperienza fino a oggi, present perfect." },
    { tipo: "errore", frase: "I [have seen] her two days ago.", corretta: "I saw her two days ago.", perche: "Ago = momento finito: past simple." },
    { tipo: "errore", frase: "When [have you arrived]?", corretta: "When did you arrive?", perche: "When vuole il past simple." },
    { tipo: "errore", frase: "We [have moved] to Milan in 2020.", corretta: "We moved to Milan in 2020.", perche: "In 2020 = momento finito: past simple." },
    { tipo: "traduci", italiano: "Ho perso il telefono ieri sera.", giuste: ["I lost my phone last night.", "I lost my phone yesterday evening.", "Last night I lost my phone."], perche: "Ieri sera = momento finito: past simple." },
    { tipo: "traduci", italiano: "Hai mai visto un film di Fellini?", giuste: ["Have you ever seen a Fellini film?", "Have you ever seen a film by Fellini?", "Have you ever seen a Fellini movie?", "Have you ever seen a movie by Fellini?"], perche: "Esperienza (mai): present perfect." },
    { tipo: "traduci", italiano: "Sono stato in Inghilterra due volte. La prima volta ci sono andato nel 2015.", giuste: ["I have been to England twice. The first time I went there in 2015.", "I have been to England twice. I went there for the first time in 2015.", "I have been to England twice. The first time I went in 2015.", "I have been to England two times. The first time I went there in 2015."], perche: "Esperienza (have been), poi il dettaglio con la data (went)." }
  ]
});

LEZIONI.push({
  id: "for-since",
  livello: "A2",
  tempi: true,
  titolo: "Da quanto tempo? for e since",
  sottotitolo: "I've lived here since 2010 (non «I live here since»)",
  spiegazione: `
<h2>Il «da» italiano</h2>
<p>In italiano diciamo «Vivo qui da tre anni» con il <strong>presente</strong>. In inglese, per una situazione iniziata nel passato e ancora vera, serve il <strong>present perfect</strong>.</p>
<p class="es"><span class="en">I've lived here for three years.</span><span class="it">Vivo qui da tre anni.</span></p>
<p class="coppia"><span class="no">I live here since 2021.</span><span class="si en">I've lived here since 2021.</span></p>

<h2>For o since?</h2>
<ul>
<li><strong>for</strong> + durata: <em>for two hours, for ten years, for ages</em></li>
<li><strong>since</strong> + punto di partenza: <em>since Monday, since 2019, since I was a child</em></li>
</ul>
<p><strong>How long...?</strong> = Da quanto tempo...?</p>
<p class="es"><span class="en">How long have you known her?</span><span class="it">Da quanto tempo la conosci?</span></p>

<h2>Present perfect continuous</h2>
<p><strong>have / has been + -ing</strong>: per un'<strong>attività</strong> che continua fino a adesso, o che è appena finita e si vedono gli effetti.</p>
<p class="es"><span class="en">I've been waiting for an hour.</span><span class="it">Aspetto da un'ora.</span></p>
<p class="es"><span class="en">You're out of breath. Have you been running?</span><span class="it">Hai il fiatone. Hai corso?</span></p>
<ul>
<li>Con i verbi di stato si usa il simple: <em>I've known her for years</em> (non «have been knowing»).</li>
<li>Simple per il <strong>risultato o la quantità</strong>, continuous per l'<strong>attività e la durata</strong>: <em>I've written three emails</em> / <em>I've been writing emails all morning</em>.</li>
<li>Con <em>live, work, study</em> vanno bene tutti e due.</li>
</ul>

<h2>Se la situazione è finita</h2>
<p>«Ho vissuto a Londra per due anni (poi sono tornato)» è finito: past simple.</p>
<p class="es"><span class="en">I lived in London for two years.</span><span class="it">Ho vissuto a Londra per due anni.</span></p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">I live here since 2015.</span><span class="si en">I've lived here since 2015.</span></p>
<p class="coppia"><span class="no">I know him since many years.</span><span class="si en">I've known him for many years.</span></p>
<p class="coppia"><span class="no">How long are you here?</span><span class="si en">How long have you been here?</span></p>
<p class="coppia"><span class="no">since three years</span><span class="si en">for three years</span></p>
</div>
`,
  esercizi: [
    { tipo: "scegli", frase: "I've lived in Turin ___ 2018.", opzioni: ["since", "for"], giusta: "since", perche: "2018 è il punto di partenza: since." },
    { tipo: "scegli", frase: "She has worked here ___ six months.", opzioni: ["for", "since"], giusta: "for", perche: "Six months è una durata: for." },
    { tipo: "scegli", frase: "We've been waiting ___ ten o'clock.", opzioni: ["since", "for"], giusta: "since", perche: "Ten o'clock è il punto di partenza: since." },
    { tipo: "scegli", frase: "I haven't seen him ___ ages.", opzioni: ["for", "since"], giusta: "for", perche: "Ages (tantissimo tempo) è una durata: for." },
    { tipo: "scrivi", frase: "I ___ here since 2015.", aiuto: "live", giuste: ["have lived", "have been living"], perche: "Situazione iniziata nel passato e ancora vera: present perfect (non «I live»)." },
    { tipo: "scrivi", frase: "How long have you ___ English?", aiuto: "study", giuste: ["been studying", "studied"], perche: "How long + present perfect (meglio continuous per un'attività)." },
    { tipo: "scrivi", frase: "I ___ Marco for ten years.", aiuto: "know", giuste: ["have known"], perche: "Know è un verbo di stato: present perfect simple." },
    { tipo: "scrivi", frase: "She's tired because she ___ all day.", aiuto: "work", giuste: ["has been working"], perche: "Attività lunga con un effetto adesso (è stanca): continuous." },
    { tipo: "scrivi", frase: "So far this morning I ___ three emails.", aiuto: "write", giuste: ["have written"], perche: "Quantità (three emails): present perfect simple." },
    { tipo: "scegli", frase: "Your eyes are red. ___?", opzioni: ["Have you been crying", "Did you cry", "Are you crying since"], giusta: "Have you been crying", perche: "Attività appena finita con effetti visibili: present perfect continuous." },
    { tipo: "errore", frase: "I [live] in this flat since 2019.", corretta: "I have lived in this flat since 2019.", perche: "Con since serve il present perfect." },
    { tipo: "errore", frase: "We have been friends [since] twenty years.", corretta: "We have been friends for twenty years.", perche: "Twenty years è una durata: for." },
    { tipo: "errore", frase: "I [have been knowing] her since school.", corretta: "I have known her since school.", perche: "Know è un verbo di stato: niente continuous." },
    { tipo: "errore", frase: "How long [are you] in Italy?", corretta: "How long have you been in Italy?", perche: "Da quanto tempo = How long + present perfect." },
    { tipo: "ordina", giusta: "How long have you been waiting?", perche: "How long + have + you + been + -ing." },
    { tipo: "traduci", italiano: "Studio inglese da cinque anni.", giuste: ["I have been studying English for five years.", "I have studied English for five years."], perche: "«Da» + situazione ancora vera: present perfect + for." },
    { tipo: "traduci", italiano: "Lo conosco da quando ero bambino.", giuste: ["I have known him since I was a child.", "I have known him since I was a kid.", "I have known him since I was little."], perche: "Know: present perfect simple. Da quando = since." },
    { tipo: "traduci", italiano: "Da quanto tempo lavori qui?", giuste: ["How long have you been working here?", "How long have you worked here?"], perche: "Da quanto tempo = How long + present perfect." }
  ]
});

LEZIONI.push({
  id: "futuro",
  livello: "A2",
  tempi: true,
  titolo: "Il futuro: will, going to, present continuous",
  sottotitolo: "Decisioni, intenzioni, appuntamenti, previsioni",
  spiegazione: `
<h2>Tre modi principali</h2>
<div class="scorri"><table class="tabella">
<tr><th>Forma</th><th>Quando</th><th>Esempio</th></tr>
<tr><td class="f">will + verbo</td><td>Decisione presa <strong>adesso</strong>, offerte, promesse, opinioni sul futuro (<em>I think...</em>)</td><td class="f">I'll have the pasta. I'll help you.</td></tr>
<tr><td class="f">be going to + verbo</td><td><strong>Intenzione</strong> già decisa; previsione basata su quello che vedi adesso</td><td class="f">I'm going to study medicine. Look! It's going to rain.</td></tr>
<tr><td class="f">present continuous</td><td><strong>Appuntamenti</strong> e piani già organizzati, con ora o luogo</td><td class="f">I'm meeting Anna at six.</td></tr>
</table></div>
<p>Il present simple si usa per orari e programmi ufficiali: <em>The train leaves at 7:30.</em></p>

<h2>Il presente italiano per il futuro</h2>
<p>In italiano diciamo «Domani vado da mia nonna» con il presente. In inglese il present simple <strong>non</strong> va bene per i tuoi piani: serve il continuous o going to.</p>
<p class="es"><span class="en">Tomorrow I'm going to my grandmother's.</span><span class="it">Domani vado da mia nonna.</span></p>

<h2>Shall per le offerte</h2>
<p class="es"><span class="en">Shall I open the window?</span><span class="it">Apro la finestra? (vuoi che la apra?)</span></p>
<p class="es"><span class="en">Shall we go?</span><span class="it">Andiamo?</span></p>

<h2>Negativa</h2>
<p><em>will not = won't</em>: <em>I won't tell anyone.</em> Dopo will non c'è mai <em>to</em>: <em>I will call</em>, non «I will to call».</p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">Tomorrow I go to Rome.</span><span class="si en">Tomorrow I'm going to Rome.</span></p>
<p class="coppia"><span class="no">I will to call you.</span><span class="si en">I'll call you.</span></p>
<p class="coppia"><span class="no">Will I carry your bag?</span><span class="si en">Shall I carry your bag?</span></p>
<p class="coppia"><span class="no">The phone is ringing. I answer.</span><span class="si en">The phone is ringing. I'll answer it.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scegli", frase: "The phone is ringing! ___ get it.", opzioni: ["I'll", "I'm going to"], giusta: "I'll", perche: "Decisione presa in questo momento: will." },
    { tipo: "scegli", frase: "I've decided: I ___ sell my car.", opzioni: ["am going to", "will"], giusta: "am going to", perche: "Intenzione già decisa: be going to." },
    { tipo: "scegli", frase: "Look at those black clouds! It ___ rain.", opzioni: ["is going to", "will"], giusta: "is going to", perche: "Previsione basata su quello che vedi adesso: going to." },
    { tipo: "scegli", frase: "I ___ my dentist at 4 tomorrow. It's in my diary.", opzioni: ["am seeing", "see"], giusta: "am seeing", perche: "Appuntamento già fissato: present continuous." },
    { tipo: "scegli", frase: "Tomorrow ___ to Rome by train. We bought the tickets yesterday.", opzioni: ["we're going", "we go"], giusta: "we're going", perche: "Piano già organizzato: present continuous, non il present simple." },
    { tipo: "scegli", frase: "We've run out of milk. Oh, ___ buy some on my way home.", opzioni: ["I'll", "I buy"], giusta: "I'll", perche: "Decisione presa adesso, mentre parli: will." },
    { tipo: "scegli", frase: "___ I open the window?", opzioni: ["Shall", "Will"], giusta: "Shall", perche: "Offerta (vuoi che lo faccia io?): Shall I...?" },
    { tipo: "scrivi", frase: "I think Italy ___ the match.", aiuto: "win", giuste: ["will win"], perche: "Opinione sul futuro con I think: will." },
    { tipo: "scrivi", consegna: "Completa con will o won't.", frase: "Don't worry, I ___ you with your homework.", aiuto: "help", giuste: ["will help"], perche: "Offerta o promessa: will." },
    { tipo: "scrivi", consegna: "Completa con will o won't.", frase: "I promise I ___ anyone.", aiuto: "not tell", giuste: ["won't tell", "will not tell"], perche: "Promessa negativa: won't." },
    { tipo: "scrivi", consegna: "Usa be going to.", frase: "We ___ a new car next year. We've already chosen it.", aiuto: "buy", giuste: ["are going to buy"], perche: "Intenzione già decisa: be going to." },
    { tipo: "errore", frase: "Tomorrow I [go] to the dentist at 10.", corretta: "Tomorrow I'm going to the dentist at 10.", perche: "Appuntamento fissato: present continuous, non present simple." },
    { tipo: "errore", frase: "I will [to call] you later.", corretta: "I will call you later.", perche: "Dopo will il verbo va senza to." },
    { tipo: "errore", frase: "[Will] I carry your bag?", corretta: "Shall I carry your bag?", perche: "Per offrire aiuto: Shall I...?" },
    { tipo: "ordina", giusta: "What are you doing this weekend?", perche: "Piani per il weekend: present continuous." },
    { tipo: "ordina", giusta: "I'm going to learn to drive.", perche: "Intenzione: I'm going to + verbo." },
    { tipo: "traduci", italiano: "Stasera esco con Giulia.", giuste: ["I am going out with Giulia tonight.", "Tonight I am going out with Giulia.", "I am going out with Giulia this evening.", "This evening I am going out with Giulia.", "I am meeting Giulia tonight."], perche: "Piano già organizzato: present continuous." },
    { tipo: "traduci", italiano: "Penso che pioverà domani.", giuste: ["I think it will rain tomorrow.", "I think it is going to rain tomorrow."], perche: "Opinione sul futuro: I think + will." },
    { tipo: "traduci", italiano: "Ti aiuto io!", giuste: ["I will help you!"], perche: "Offerta decisa adesso: I'll help you." }
  ]
});

LEZIONI.push({
  id: "comparativi",
  livello: "A2",
  tempi: false,
  titolo: "Comparativi e superlativi",
  sottotitolo: "bigger, more expensive, the best",
  spiegazione: `
<h2>Le regole</h2>
<div class="scorri"><table class="tabella">
<tr><th>Aggettivo</th><th>Comparativo</th><th>Superlativo</th></tr>
<tr><td>Corto (una sillaba)</td><td class="f">cheap → cheaper</td><td class="f">the cheapest</td></tr>
<tr><td>Vocale + consonante</td><td class="f">big → bigger</td><td class="f">the biggest</td></tr>
<tr><td>Finisce in -y</td><td class="f">happy → happier</td><td class="f">the happiest</td></tr>
<tr><td>Lungo (due o più sillabe)</td><td class="f">more expensive</td><td class="f">the most expensive</td></tr>
</table></div>
<h3>Irregolari</h3>
<p class="f"><em>good → better → the best; bad → worse → the worst; far → further → the furthest; much/many → more → the most; little → less → the least</em></p>

<h2>«Di» e «che» nei paragoni: than</h2>
<p class="es"><span class="en">Rome is bigger than Florence.</span><span class="it">Roma è più grande di Firenze.</span></p>
<p class="es"><span class="en">It's easier than I thought.</span><span class="it">È più facile di quanto pensassi.</span></p>

<h2>Superlativo: in o of?</h2>
<ul>
<li><strong>in</strong> + luoghi e gruppi: <em>the tallest building in the world, the best student in the class</em></li>
<li><strong>of</strong> + periodi e numeri: <em>the best day of my life, the oldest of the three</em></li>
</ul>

<h2>Uguaglianza e altre forme</h2>
<p class="es"><span class="en">She's as tall as her mother.</span><span class="it">È alta come sua madre.</span></p>
<p class="es"><span class="en">My car isn't as fast as yours.</span><span class="it">La mia macchina non è veloce come la tua.</span></p>
<p class="es"><span class="en">The more you practise, the better you get.</span><span class="it">Più ti eserciti, più migliori.</span></p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">more big</span><span class="si en">bigger</span></p>
<p class="coppia"><span class="no">more better</span><span class="si en">better</span></p>
<p class="coppia"><span class="no">Milan is bigger of Turin.</span><span class="si en">Milan is bigger than Turin.</span></p>
<p class="coppia"><span class="no">the best of the world</span><span class="si en">the best in the world</span></p>
</div>
`,
  esercizi: [
    { tipo: "scrivi", frase: "My brother is ___ than me.", aiuto: "tall", giuste: ["taller"], perche: "Aggettivo corto: -er." },
    { tipo: "scrivi", frase: "This exercise is ___ than the last one.", aiuto: "difficult", giuste: ["more difficult"], perche: "Aggettivo lungo: more + aggettivo." },
    { tipo: "scrivi", frase: "Today is ___ day of the year.", aiuto: "hot", giuste: ["the hottest"], perche: "Vocale + consonante: si raddoppia la t (hottest)." },
    { tipo: "scrivi", frase: "Her English is ___ than mine.", aiuto: "good", giuste: ["better"], perche: "Good è irregolare: better." },
    { tipo: "scrivi", frase: "This is ___ film I've ever seen.", aiuto: "bad", giuste: ["the worst"], perche: "Bad è irregolare: the worst." },
    { tipo: "scrivi", frase: "Trains are ___ than planes.", aiuto: "slow", giuste: ["slower"], perche: "Aggettivo corto: -er." },
    { tipo: "scrivi", frase: "I'm ___ now than last year.", aiuto: "happy", giuste: ["happier"], perche: "Finisce in -y: happier." },
    { tipo: "scegli", frase: "Milan is more expensive ___ Naples.", opzioni: ["than", "of", "that"], giusta: "than", perche: "Nei paragoni «di» si dice than." },
    { tipo: "scegli", frase: "It's the biggest city ___ Italy.", opzioni: ["in", "of"], giusta: "in", perche: "Superlativo + luogo: in." },
    { tipo: "scegli", frase: "My car is not as fast ___ yours.", opzioni: ["as", "than", "like"], giusta: "as", perche: "Uguaglianza: as ... as." },
    { tipo: "scegli", frase: "The ___ you study, the more you learn.", opzioni: ["more", "most", "much"], giusta: "more", perche: "Più... più... = the more..., the more..." },
    { tipo: "errore", frase: "This phone is [more cheap] than the other one.", corretta: "This phone is cheaper than the other one.", perche: "Cheap è corto: cheaper." },
    { tipo: "errore", frase: "She is [more better] at maths than me.", corretta: "She is better at maths than me.", perche: "Better è già un comparativo: niente more." },
    { tipo: "errore", frase: "It's the tallest building [of] the world.", corretta: "It's the tallest building in the world.", perche: "Superlativo + luogo: in the world." },
    { tipo: "traduci", italiano: "Questo libro è più interessante del film.", giuste: ["This book is more interesting than the film.", "This book is more interesting than the movie."], perche: "Interesting è lungo: more interesting than." },
    { tipo: "traduci", italiano: "È il giorno più bello della mia vita.", giuste: ["It is the best day of my life.", "This is the best day of my life.", "It is the most beautiful day of my life.", "Today is the best day of my life."], perche: "Superlativo + periodo: of my life." }
  ]
});

LEZIONI.push({
  id: "preposizioni",
  livello: "A2",
  tempi: false,
  titolo: "Preposizioni: in, on, at",
  sottotitolo: "Il tempo e i luoghi",
  spiegazione: `
<h2>Tempo</h2>
<div class="scorri"><table class="tabella">
<tr><td class="f">at</td><td>ore e momenti precisi</td><td class="f">at 7 o'clock, at midnight, at night, at the weekend, at Christmas, at the moment</td></tr>
<tr><td class="f">on</td><td>giorni e date</td><td class="f">on Monday, on 5 May, on my birthday, on Friday evening</td></tr>
<tr><td class="f">in</td><td>mesi, anni, stagioni, parti del giorno</td><td class="f">in July, in 2020, in summer, in the morning, in the evening</td></tr>
</table></div>
<p><strong>Niente preposizione</strong> con <em>next, last, this, every, tomorrow, yesterday</em>: <em>next week, last year, this morning, every day</em>.</p>
<p>Attenzione: <em>in the morning</em> ma <em>on Monday morning</em> (c'è il giorno) e <em>at night</em>.</p>

<h2>Luoghi</h2>
<div class="scorri"><table class="tabella">
<tr><td class="f">at</td><td>un punto, un posto dove si fa qualcosa</td><td class="f">at home, at work, at school, at the station, at the bus stop, at a party</td></tr>
<tr><td class="f">in</td><td>dentro uno spazio, città, paesi</td><td class="f">in the kitchen, in a box, in Rome, in Italy, in bed, in the car</td></tr>
<tr><td class="f">on</td><td>su una superficie, mezzi grandi, piani</td><td class="f">on the table, on the wall, on the bus, on the train, on the first floor, on the left</td></tr>
</table></div>

<h2>Arrivare e andare</h2>
<ul>
<li><strong>arrive in</strong> + città o paese: <em>We arrived in London.</em></li>
<li><strong>arrive at</strong> + edificio o luogo preciso: <em>We arrived at the airport.</em></li>
<li>Mai <em>arrive to</em>. E <em>go home</em> senza to.</li>
</ul>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">in Monday</span><span class="si en">on Monday</span></p>
<p class="coppia"><span class="no">at the morning</span><span class="si en">in the morning</span></p>
<p class="coppia"><span class="no">I arrived to Rome.</span><span class="si en">I arrived in Rome.</span></p>
<p class="coppia"><span class="no">I'm going to home.</span><span class="si en">I'm going home.</span></p>
<p class="coppia"><span class="no">on the next week</span><span class="si en">next week</span></p>
</div>
`,
  esercizi: [
    { tipo: "scegli", frase: "The meeting is ___ Monday.", opzioni: ["on", "in", "at"], giusta: "on", perche: "Giorni: on." },
    { tipo: "scegli", frase: "I was born ___ 1998.", opzioni: ["in", "on", "at"], giusta: "in", perche: "Anni: in." },
    { tipo: "scegli", frase: "See you ___ 6 o'clock.", opzioni: ["at", "on", "in"], giusta: "at", perche: "Ore: at." },
    { tipo: "scegli", frase: "I usually study ___ the evening.", opzioni: ["in", "at", "on"], giusta: "in", perche: "Parti del giorno: in the morning, in the evening." },
    { tipo: "scegli", frase: "I'll wait for you ___ the bus stop.", opzioni: ["at", "on", "in"], giusta: "at", perche: "Un punto preciso: at the bus stop." },
    { tipo: "scegli", frase: "There's a picture ___ the wall.", opzioni: ["on", "in", "at"], giusta: "on", perche: "Su una superficie: on." },
    { tipo: "scegli", frase: "She lives ___ Milan.", opzioni: ["in", "at", "on"], giusta: "in", perche: "Città: in." },
    { tipo: "scegli", frase: "We arrived ___ the airport at 5.", opzioni: ["at", "in", "to"], giusta: "at", perche: "Arrive at + luogo preciso (mai arrive to)." },
    { tipo: "scegli", frase: "I'll see you ___ week.", opzioni: ["next", "on next", "in next"], giusta: "next", perche: "Con next non si mette la preposizione." },
    { tipo: "scrivi", consegna: "Scrivi in, on oppure at.", frase: "My birthday is ___ 14 March.", giuste: ["on"], perche: "Date: on." },
    { tipo: "scrivi", consegna: "Scrivi in, on oppure at.", frase: "I don't like working ___ night.", giuste: ["at"], perche: "Si dice at night." },
    { tipo: "scrivi", consegna: "Scrivi in, on oppure at.", frase: "Your keys are ___ the kitchen.", giuste: ["in"], perche: "Dentro una stanza: in." },
    { tipo: "scrivi", consegna: "Scrivi in, on oppure at.", frase: "He's not at home. He's ___ work.", giuste: ["at"], perche: "At work, at home, at school." },
    { tipo: "errore", frase: "I'll call you [on] the afternoon.", corretta: "I'll call you in the afternoon.", perche: "Parti del giorno: in the afternoon." },
    { tipo: "errore", frase: "We arrived [to] London late at night.", corretta: "We arrived in London late at night.", perche: "Arrive in + città." },
    { tipo: "errore", frase: "Let's go [to] home.", corretta: "Let's go home.", perche: "Go home, senza to." },
    { tipo: "traduci", italiano: "Ci vediamo sabato mattina.", giuste: ["See you on Saturday morning.", "See you Saturday morning.", "I will see you on Saturday morning."], perche: "Giorno + parte del giorno: on Saturday morning." },
    { tipo: "traduci", italiano: "Sono sull'autobus.", giuste: ["I am on the bus."], perche: "Mezzi grandi: on the bus, on the train." }
  ]
});
