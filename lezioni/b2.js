/* Livello B2: precisione.
   Regola per chi modifica: aggiungi i nuovi esercizi SOLO in fondo a ogni lezione. */

LEZIONI.push({
  id: "condizionale-3",
  livello: "B2",
  tempi: true,
  titolo: "Periodo ipotetico 3 e wish",
  sottotitolo: "If I had known... e i rimpianti",
  spiegazione: `
<h2>Tipo 3: un passato che non è andato così</h2>
<p><strong>If + past perfect, would have + participio</strong></p>
<p class="es"><span class="en">If I had studied, I would have passed.</span><span class="it">Se avessi studiato, avrei superato l'esame.</span></p>
<p>Nel parlato: <em>If I'd known, I'd have come.</em> Al posto di would puoi usare <em>could have</em> o <em>might have</em>.</p>
<div class="regola">Come negli altri tipi, nella parte con if <strong>non</strong> va would: <em>If I had known</em>, non «If I would have known».</div>

<h2>Il tipo misto</h2>
<p>Un passato diverso con una conseguenza <strong>adesso</strong>: <strong>If + past perfect, would + verbo</strong>.</p>
<p class="es"><span class="en">If I had taken that job, I would be rich now.</span><span class="it">Se avessi accettato quel lavoro, adesso sarei ricco.</span></p>

<h2>Wish e if only</h2>
<div class="scorri"><table class="tabella">
<tr><th>Forma</th><th>Significato</th><th>Esempio</th></tr>
<tr><td class="f">wish + past simple</td><td>vorrei che adesso fosse diverso</td><td class="f">I wish I had more time.</td></tr>
<tr><td class="f">wish + could</td><td>vorrei saper fare / poter fare</td><td class="f">I wish I could speak Chinese.</td></tr>
<tr><td class="f">wish + past perfect</td><td>rimpianto sul passato</td><td class="f">I wish I hadn't said that.</td></tr>
<tr><td class="f">wish + would</td><td>lamentela sul comportamento di altri</td><td class="f">I wish you would stop shouting.</td></tr>
</table></div>

<h2>Should have: avresti dovuto</h2>
<p class="es"><span class="en">You should have told me.</span><span class="it">Avresti dovuto dirmelo.</span></p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">If I would have known, ...</span><span class="si en">If I had known, ...</span></p>
<p class="coppia"><span class="no">If I had known, I would come.</span><span class="si en">If I had known, I would have come.</span></p>
<p class="coppia"><span class="no">I wish I have a car.</span><span class="si en">I wish I had a car.</span></p>
<p class="coppia"><span class="no">I wish I didn't say that.</span><span class="si en">I wish I hadn't said that.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scrivi", frase: "If I ___ the alarm, I wouldn't have been late.", aiuto: "hear", giuste: ["had heard"], perche: "Tipo 3: if + past perfect." },
    { tipo: "scrivi", frase: "If you had asked me, I ___ you.", aiuto: "help", giuste: ["would have helped"], perche: "Tipo 3: would have + participio." },
    { tipo: "scrivi", frase: "We ___ the match if we had played better.", aiuto: "win", giuste: ["would have won", "could have won"], perche: "Tipo 3: would have + participio (won)." },
    { tipo: "scrivi", frase: "If she ___ the bus, she would be here now.", aiuto: "not miss", giuste: ["hadn't missed", "had not missed"], perche: "Tipo misto: passato (past perfect) con conseguenza adesso." },
    { tipo: "scrivi", frase: "I wish I ___ more money.", aiuto: "have", giuste: ["had"], perche: "Desiderio sul presente: wish + past simple." },
    { tipo: "scrivi", frase: "I wish I ___ to the party last night. Everyone says it was great.", aiuto: "go", giuste: ["had gone"], perche: "Rimpianto sul passato: wish + past perfect." },
    { tipo: "scrivi", frase: "You ___ me! I would have come to pick you up.", aiuto: "should, call", giuste: ["should have called"], perche: "Avresti dovuto = should have + participio." },
    { tipo: "scegli", frase: "If I ___ about the problem, I would have helped you.", opzioni: ["had known", "would have known", "knew"], giusta: "had known", perche: "Tipo 3: if + past perfect, mai would." },
    { tipo: "scegli", frase: "If I had taken that job, I ___ in London now.", opzioni: ["would be living", "would have lived"], giusta: "would be living", perche: "Conseguenza adesso (now): would + verbo." },
    { tipo: "scegli", frase: "I wish you ___ making that noise!", opzioni: ["would stop", "stopped", "had stopped"], giusta: "would stop", perche: "Lamentela su ciò che fa un altro: wish + would." },
    { tipo: "scegli", frase: "I wish I ___ speak French.", opzioni: ["could", "can", "would"], giusta: "could", perche: "Vorrei saper fare: wish + could." },
    { tipo: "errore", frase: "If I [would have known], I would have called you.", corretta: "If I had known, I would have called you.", perche: "Dopo if: past perfect, non would have." },
    { tipo: "errore", frase: "If you had told me earlier, I [would help] you.", corretta: "If you had told me earlier, I would have helped you.", perche: "Passato irreale: would have + participio." },
    { tipo: "errore", frase: "I wish I [didn't eat] so much last night.", corretta: "I wish I hadn't eaten so much last night.", perche: "Rimpianto sul passato: wish + past perfect." },
    { tipo: "traduci", italiano: "Se fossi partito prima, non avrei perso il treno.", giuste: ["If I had left earlier, I would not have missed the train."], perche: "Fossi partito = had left; non avrei perso = wouldn't have missed." },
    { tipo: "traduci", italiano: "Vorrei non averglielo detto.", giuste: ["I wish I had not told him.", "I wish I had not told her.", "I wish I had not told him that.", "I wish I had not told her that.", "I wish I had not told them."], perche: "Rimpianto: wish + past perfect (hadn't told)." }
  ]
});

LEZIONI.push({
  id: "discorso-indiretto",
  livello: "B2",
  tempi: true,
  titolo: "Discorso indiretto",
  sottotitolo: "He said that..., she told me..., she asked if...",
  spiegazione: `
<h2>Say o tell?</h2>
<ul>
<li><strong>say</strong> + quello che è stato detto: <em>He said (that) he was tired.</em> Con la persona: <em>say something to someone</em>.</li>
<li><strong>tell</strong> + <strong>persona</strong>: <em>He told me (that) he was tired.</em></li>
</ul>
<p>Mai «said me», mai «told to me».</p>

<h2>I tempi si spostano indietro</h2>
<p>Quando il verbo che introduce (<em>said, told</em>) è al passato, i tempi fanno un passo indietro:</p>
<div class="scorri"><table class="tabella">
<tr><th>Discorso diretto</th><th>Discorso indiretto</th></tr>
<tr><td class="f">"I am tired."</td><td class="f">She said she was tired.</td></tr>
<tr><td class="f">"I have finished."</td><td class="f">She said she had finished.</td></tr>
<tr><td class="f">"I saw him."</td><td class="f">She said she had seen him.</td></tr>
<tr><td class="f">"I will call."</td><td class="f">She said she would call.</td></tr>
<tr><td class="f">"I can swim."</td><td class="f">She said she could swim.</td></tr>
</table></div>
<p>Cambiano anche le parole di tempo e luogo: <em>today → that day, tomorrow → the next day, yesterday → the day before, here → there</em>.</p>

<h2>Domande riferite: ordine normale</h2>
<p>Nelle domande riferite l'ordine è quello di una frase affermativa: niente do/does/did e niente punto di domanda.</p>
<p class="es"><span class="en">She asked me where I lived.</span><span class="it">Mi ha chiesto dove abitavo. (non «where did I live»)</span></p>
<p>Per le domande sì/no: <strong>if</strong> o <strong>whether</strong>.</p>
<p class="es"><span class="en">He asked if I was ready.</span><span class="it">Mi ha chiesto se ero pronto.</span></p>

<h2>Domande gentili</h2>
<p>Lo stesso ordine vale nelle domande indirette di cortesia:</p>
<p class="es"><span class="en">Can you tell me where the station is?</span><span class="it">Mi sa dire dov'è la stazione?</span></p>

<h2>Ordini e richieste</h2>
<p class="es"><span class="en">She told me to sit down. He asked me not to be late.</span><span class="it">Mi ha detto di sedermi. Mi ha chiesto di non fare tardi.</span></p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">He said me that...</span><span class="si en">He told me that...</span></p>
<p class="coppia"><span class="no">She asked me where did I live.</span><span class="si en">She asked me where I lived.</span></p>
<p class="coppia"><span class="no">Can you tell me where is the station?</span><span class="si en">Can you tell me where the station is?</span></p>
<p class="coppia"><span class="no">She told me to not go.</span><span class="si en">She told me not to go.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scegli", frase: "She ___ me she was leaving.", opzioni: ["told", "said"], giusta: "told", perche: "Con la persona (me): told." },
    { tipo: "scegli", frase: "He ___ he would call later.", opzioni: ["said", "told"], giusta: "said", perche: "Senza la persona: said." },
    { tipo: "scrivi", consegna: "Riporta la frase: «I am tired.»", frase: "She said she ___ tired.", giuste: ["was"], perche: "Am diventa was." },
    { tipo: "scrivi", consegna: "Riporta la frase: «I will help you.»", frase: "He said he ___ help me.", giuste: ["would"], perche: "Will diventa would." },
    { tipo: "scrivi", consegna: "Riporta la frase: «I have lost my keys.»", frase: "She said she ___ her keys.", giuste: ["had lost"], perche: "Present perfect diventa past perfect." },
    { tipo: "scrivi", consegna: "Riporta la domanda: «Where do you live?»", frase: "He asked me where I ___.", giuste: ["lived"], perche: "Domanda riferita: ordine normale, tempo indietro (lived)." },
    { tipo: "scrivi", consegna: "Riporta la domanda: «Are you hungry?»", frase: "She asked ___ I was hungry.", giuste: ["if", "whether"], perche: "Domanda sì/no: if o whether." },
    { tipo: "scrivi", consegna: "Riporta l'ordine: «Don't touch it!»", frase: "He told me ___ touch it.", giuste: ["not to"], perche: "Ordine negativo: tell someone not to." },
    { tipo: "scrivi", consegna: "Riporta la frase: «I can swim.»", frase: "She said she ___ swim.", giuste: ["could"], perche: "Can diventa could." },
    { tipo: "errore", frase: "Can you tell me where [is the station]?", corretta: "Can you tell me where the station is?", perche: "Domanda indiretta: ordine normale (the station is)." },
    { tipo: "errore", frase: "He [said me] that he was sorry.", corretta: "He told me that he was sorry.", perche: "Con la persona si usa tell." },
    { tipo: "errore", frase: "She asked me what time [did I finish] work.", corretta: "She asked me what time I finished work.", perche: "Domanda riferita: niente did, ordine normale." },
    { tipo: "ordina", giusta: "Do you know what time it is?", perche: "Domanda indiretta: what time it is (non what time is it)." },
    { tipo: "ordina", giusta: "Could you tell me where the toilets are?", perche: "Domanda indiretta: where the toilets are." },
    { tipo: "traduci", italiano: "Mi ha detto che sarebbe arrivato tardi.", giuste: ["He told me he would arrive late.", "He told me that he would arrive late.", "He told me he would be late.", "He told me that he would be late.", "He said he would arrive late.", "He said he would be late."], perche: "Told me (con la persona) + would." },
    { tipo: "traduci", italiano: "Mi ha chiesto se ero italiano.", giuste: ["He asked me if I was Italian.", "She asked me if I was Italian.", "He asked me whether I was Italian.", "She asked me whether I was Italian."], perche: "Domanda sì/no riferita: asked me if + ordine normale." }
  ]
});

LEZIONI.push({
  id: "deduzioni",
  livello: "B2",
  tempi: false,
  titolo: "Deduzioni: must, might, can't",
  sottotitolo: "Dev'essere, potrebbe essere, non può essere",
  spiegazione: `
<h2>Sul presente</h2>
<div class="scorri"><table class="tabella">
<tr><td class="f">must + verbo</td><td>sono quasi sicuro di sì</td><td class="f">She must be tired.</td></tr>
<tr><td class="f">might / may / could + verbo</td><td>forse</td><td class="f">He might be at home.</td></tr>
<tr><td class="f">can't + verbo</td><td>sono quasi sicuro di no</td><td class="f">That can't be Marco. He's in Japan.</td></tr>
</table></div>
<div class="regola">Nelle deduzioni il contrario di <strong>must</strong> è <strong>can't</strong>, non mustn't (che vuol dire «è vietato»).</div>
<p class="es"><span class="en">He must be sleeping.</span><span class="it">Starà dormendo / Deve stare dormendo.</span></p>

<h2>Sul passato: + have + participio</h2>
<div class="scorri"><table class="tabella">
<tr><td class="f">must have done</td><td>deve aver fatto</td><td class="f">You must have been worried.</td></tr>
<tr><td class="f">might / may / could have done</td><td>potrebbe aver fatto</td><td class="f">They might have missed the train.</td></tr>
<tr><td class="f">can't / couldn't have done</td><td>non può aver fatto</td><td class="f">She can't have seen me.</td></tr>
</table></div>
<p class="es"><span class="en">The lights are off. They must have gone to bed.</span><span class="it">Le luci sono spente. Devono essere andati a letto.</span></p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">He mustn't be at home.</span><span class="si en">He can't be at home.</span><span class="spiega">Se vuoi dire «non può essere a casa».</span></p>
<p class="coppia"><span class="no">She must has forgotten.</span><span class="si en">She must have forgotten.</span></p>
<p class="coppia"><span class="no">They might missed the bus.</span><span class="si en">They might have missed the bus.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scegli", frase: "You've been travelling all day. You ___ be exhausted.", opzioni: ["must", "can't", "mustn't"], giusta: "must", perche: "Quasi sicuro di sì: must." },
    { tipo: "scegli", frase: "That ___ be Laura's car. She sold it last year.", opzioni: ["can't", "mustn't", "must"], giusta: "can't", perche: "Quasi sicuro di no: can't (non mustn't)." },
    { tipo: "scegli", frase: "I'm not sure where Tom is. He ___ be in the library.", opzioni: ["might", "must", "can't"], giusta: "might", perche: "Non sei sicuro: might (forse)." },
    { tipo: "scegli", frase: "The lights are off. They ___ have gone to bed.", opzioni: ["must", "can't", "should"], giusta: "must", perche: "Deduzione quasi certa sul passato: must have + participio." },
    { tipo: "scegli", frase: "She ___ have seen me. I was hiding behind a tree.", opzioni: ["can't", "must", "mustn't"], giusta: "can't", perche: "Quasi sicuro di no, sul passato: can't have." },
    { tipo: "scrivi", frase: "I can't find my phone. I ___ it on the bus.", aiuto: "might, leave", giuste: ["might have left", "may have left", "could have left"], perche: "Forse, nel passato: might have + participio." },
    { tipo: "scrivi", frase: "He didn't answer the phone. He ___ asleep.", aiuto: "must, be, passato", giuste: ["must have been"], perche: "Deduzione sul passato: must have been." },
    { tipo: "scrivi", frase: "You ___ serious! That's crazy.", aiuto: "can't, be", giuste: ["can't be", "cannot be"], perche: "Non puoi essere serio: can't be." },
    { tipo: "scrivi", frase: "Somebody is knocking. It ___ the postman.", aiuto: "might, be", giuste: ["might be", "may be", "could be"], perche: "Forse: might be." },
    { tipo: "errore", frase: "She hasn't eaten all day. She must [to] be hungry.", corretta: "She hasn't eaten all day. She must be hungry.", perche: "Dopo must non va to." },
    { tipo: "errore", frase: "He [mustn't] be Italian. His accent is American.", corretta: "He can't be Italian. His accent is American.", perche: "Deduzione negativa: can't." },
    { tipo: "errore", frase: "They are late. They might [missed] the bus.", corretta: "They are late. They might have missed the bus.", perche: "Sul passato: might have + participio." },
    { tipo: "errore", frase: "You must [has] been very worried.", corretta: "You must have been very worried.", perche: "Dopo must: have (mai has)." },
    { tipo: "traduci", italiano: "Deve essere molto stanca.", giuste: ["She must be very tired.", "She must be really tired."], perche: "Deduzione sul presente: must be." },
    { tipo: "traduci", italiano: "Non può averlo fatto lui.", giuste: ["He can't have done it.", "He couldn't have done it.", "He can't have done that.", "He couldn't have done that."], perche: "Quasi sicuro di no, sul passato: can't have done." },
    { tipo: "traduci", italiano: "Potrebbe aver dimenticato il nostro appuntamento.", giuste: ["He might have forgotten our appointment.", "She might have forgotten our appointment.", "He may have forgotten our appointment.", "She may have forgotten our appointment.", "He could have forgotten our appointment.", "She could have forgotten our appointment.", "He might have forgotten our meeting.", "She might have forgotten our meeting."], perche: "Forse, sul passato: might have forgotten." }
  ]
});

LEZIONI.push({
  id: "futuro-avanzato",
  livello: "B2",
  tempi: true,
  titolo: "Future continuous e future perfect",
  sottotitolo: "This time tomorrow I'll be flying; by June I'll have finished",
  spiegazione: `
<h2>Future continuous: will be + -ing</h2>
<p>Un'azione <strong>in corso</strong> in un momento del futuro.</p>
<p class="es"><span class="en">This time tomorrow I'll be lying on the beach.</span><span class="it">Domani a quest'ora sarò sdraiato in spiaggia.</span></p>
<p>Si usa anche per chiedere i piani di qualcuno in modo gentile:</p>
<p class="es"><span class="en">Will you be using the car tonight?</span><span class="it">Ti serve la macchina stasera?</span></p>

<h2>Future perfect: will have + participio</h2>
<p>Un'azione <strong>già conclusa prima</strong> di un momento futuro. È il nostro futuro anteriore («avrò finito»). Si usa spesso con <strong>by</strong> (entro).</p>
<p class="es"><span class="en">By June I'll have finished my degree.</span><span class="it">Entro giugno avrò finito la laurea.</span></p>
<p class="es"><span class="en">By the time you arrive, we'll have eaten.</span><span class="it">Quando arriverai, avremo già mangiato.</span></p>
<p>Ricorda: dopo <em>by the time, when, before</em> il verbo va al present (<em>you arrive</em>).</p>

<h2>Future perfect continuous</h2>
<p class="es"><span class="en">In June I'll have been working here for ten years.</span><span class="it">A giugno saranno dieci anni che lavoro qui.</span></p>

<h2>By o until?</h2>
<ul>
<li><strong>by</strong> = entro, non più tardi di: <em>I'll finish it by Friday.</em></li>
<li><strong>until</strong> = fino a, per tutto il tempo: <em>I'll be here until Friday.</em></li>
</ul>

<h2>Il futuro visto dal passato</h2>
<p class="es"><span class="en">I was going to call you, but I forgot.</span><span class="it">Avevo intenzione di chiamarti, ma ho dimenticato.</span></p>
<p class="es"><span class="en">The film is about to start.</span><span class="it">Il film sta per cominciare.</span></p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">By the time you will arrive...</span><span class="si en">By the time you arrive...</span></p>
<p class="coppia"><span class="no">Tomorrow at 10 I will work.</span><span class="si en">Tomorrow at 10 I'll be working.</span><span class="spiega">Se vuoi dire che a quell'ora sarai nel mezzo del lavoro.</span></p>
<p class="coppia"><span class="no">I will finish it until Friday.</span><span class="si en">I will finish it by Friday.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scrivi", frase: "This time next week I ___ on a beach in Greece.", aiuto: "lie", giuste: ["will be lying"], perche: "In corso in un momento futuro: will be + -ing (lying)." },
    { tipo: "scrivi", frase: "By the end of the year, I ___ my degree.", aiuto: "finish", giuste: ["will have finished"], perche: "Concluso entro un momento futuro: will have + participio." },
    { tipo: "scrivi", frase: "Don't call me at 8. I ___ dinner.", aiuto: "have", giuste: ["will be having"], perche: "Alle 8 sarò nel mezzo della cena: future continuous." },
    { tipo: "scrivi", frase: "By the time you get here, the film ___.", aiuto: "start", giuste: ["will have started"], perche: "Già cominciato prima del tuo arrivo: future perfect." },
    { tipo: "scrivi", frase: "Next month we ___ together for five years.", aiuto: "be", giuste: ["will have been"], perche: "Durata fino a un momento futuro: will have been." },
    { tipo: "scrivi", frase: "Hurry up! The train ___ to leave.", aiuto: "be about", giuste: ["is about"], perche: "Sta per = be about to." },
    { tipo: "scrivi", frase: "I ___ call you, but my phone died.", aiuto: "be going to, al passato", giuste: ["was going to"], perche: "Avevo intenzione di = was going to." },
    { tipo: "scegli", frase: "I'll have finished the report ___ Friday.", opzioni: ["by", "until", "for"], giusta: "by", perche: "Entro = by." },
    { tipo: "scegli", frase: "At midnight I ___, so please don't call.", opzioni: ["will be sleeping", "will sleep", "sleep"], giusta: "will be sleeping", perche: "In corso a mezzanotte: future continuous." },
    { tipo: "scegli", frase: "By 2040, scientists ___ a cure.", opzioni: ["will have found", "will find", "are finding"], giusta: "will have found", perche: "Entro il 2040, già concluso: future perfect." },
    { tipo: "scegli", frase: "___ you be using the car this evening? I need it.", opzioni: ["Will", "Are", "Do"], giusta: "Will", perche: "Chiedere i piani in modo gentile: Will you be using...?" },
    { tipo: "errore", frase: "By the time you [will arrive], we will have left.", corretta: "By the time you arrive, we will have left.", perche: "Dopo by the time: present." },
    { tipo: "errore", frase: "This time next month I [will travel] around Japan.", corretta: "This time next month I will be travelling around Japan.", perche: "In corso in un momento preciso del futuro (this time next month): will be + -ing." },
    { tipo: "errore", frase: "I will have finished this book [until] tomorrow.", corretta: "I will have finished this book by tomorrow.", perche: "Entro = by, non until." },
    { tipo: "traduci", italiano: "Domani a quest'ora sarò in volo per New York.", giuste: ["This time tomorrow I will be flying to New York.", "At this time tomorrow I will be flying to New York.", "Tomorrow at this time I will be flying to New York.", "This time tomorrow I will be on a plane to New York.", "This time tomorrow I will be on the plane to New York."], perche: "Azione in corso in un momento futuro: will be flying." },
    { tipo: "traduci", italiano: "Entro giugno avrò finito la tesi.", giuste: ["By June I will have finished my thesis.", "I will have finished my thesis by June.", "By June I will have finished the thesis.", "I will have finished the thesis by June.", "By June I will have finished my dissertation.", "I will have finished my dissertation by June."], perche: "Entro = by; avrò finito = will have finished." }
  ]
});

LEZIONI.push({
  id: "trappole",
  livello: "B2",
  tempi: false,
  titolo: "Trappole per italiani",
  sottotitolo: "I agree, make o do, explain to me, falsi amici",
  spiegazione: `
<h2>Essere d'accordo</h2>
<p><em>Agree</em> è un verbo: <strong>I agree</strong>, non «I am agree».</p>
<p class="es"><span class="en">I agree with you.</span><span class="it">Sono d'accordo con te.</span></p>

<h2>Make o do?</h2>
<ul>
<li><strong>make</strong> = creare, produrre: <em>make a cake, make a mistake, make a decision, make money, make a phone call, make friends, make noise</em></li>
<li><strong>do</strong> = attività, compiti, lavoro: <em>do homework, do the shopping, do a course, do exercise, do your best, do someone a favour</em></li>
</ul>

<h2>Verbi con la preposizione «sbagliata»</h2>
<div class="scorri"><table class="tabella">
<tr><td>spiegare a qualcuno</td><td class="f">explain it to me (non «explain me»)</td></tr>
<tr><td>dipendere da</td><td class="f">depend on (non «from»)</td></tr>
<tr><td>ascoltare</td><td class="f">listen to music</td></tr>
<tr><td>aspettare qualcuno</td><td class="f">wait for someone</td></tr>
<tr><td>chiedere qualcosa</td><td class="f">ask for something</td></tr>
<tr><td>pagare qualcosa</td><td class="f">pay for something</td></tr>
<tr><td>sposato con</td><td class="f">married to</td></tr>
</table></div>

<h2>Falsi amici</h2>
<div class="scorri"><table class="tabella">
<tr><th>Inglese</th><th>Vuol dire</th><th>Non vuol dire</th></tr>
<tr><td class="f">actually</td><td>in realtà</td><td>attualmente (= currently)</td></tr>
<tr><td class="f">eventually</td><td>alla fine</td><td>eventualmente (= possibly, if necessary)</td></tr>
<tr><td class="f">sensible</td><td>assennato, di buon senso</td><td>sensibile (= sensitive)</td></tr>
<tr><td class="f">library</td><td>biblioteca</td><td>libreria (= bookshop)</td></tr>
<tr><td class="f">parents</td><td>genitori</td><td>parenti (= relatives)</td></tr>
<tr><td class="f">sympathetic</td><td>comprensivo</td><td>simpatico (= nice, friendly)</td></tr>
<tr><td class="f">attend</td><td>frequentare, partecipare</td><td>attendere (= wait for)</td></tr>
<tr><td class="f">pretend</td><td>fingere</td><td>pretendere (= expect, demand)</td></tr>
<tr><td class="f">remind</td><td>ricordare a qualcuno</td><td>ricordare da solo (= remember)</td></tr>
</table></div>

<h2>As o like?</h2>
<p><strong>as</strong> per un ruolo o un lavoro (<em>I work as a waiter</em>), <strong>like</strong> per una somiglianza (<em>He looks like his father</em>).</p>

<div class="attenzione"><h3>Errori da italiani</h3>
<p class="coppia"><span class="no">I am agree.</span><span class="si en">I agree.</span></p>
<p class="coppia"><span class="no">Can you explain me?</span><span class="si en">Can you explain it to me?</span></p>
<p class="coppia"><span class="no">It depends from you.</span><span class="si en">It depends on you.</span></p>
<p class="coppia"><span class="no">I did a mistake.</span><span class="si en">I made a mistake.</span></p>
<p class="coppia"><span class="no">It's a long time that I don't see you.</span><span class="si en">I haven't seen you for a long time.</span></p>
</div>
`,
  esercizi: [
    { tipo: "scegli", frase: "I ___ with you.", opzioni: ["agree", "am agree", "am agreed"], giusta: "agree", perche: "Agree è un verbo: I agree." },
    { tipo: "scegli", frase: "I ___ a lot of mistakes in my last test.", opzioni: ["made", "did"], giusta: "made", perche: "Make a mistake." },
    { tipo: "scegli", frase: "Have you ___ your homework?", opzioni: ["done", "made"], giusta: "done", perche: "Do homework." },
    { tipo: "scegli", frase: "It depends ___ the weather.", opzioni: ["on", "from", "of"], giusta: "on", perche: "Depend on." },
    { tipo: "scegli", frase: "Can you explain ___ how this works?", opzioni: ["to me", "me"], giusta: "to me", perche: "Explain something to someone: explain to me." },
    { tipo: "scegli", frase: "I'm studying in the ___. It's quiet and the books are free.", opzioni: ["library", "bookshop"], giusta: "library", perche: "Biblioteca = library (libreria = bookshop)." },
    { tipo: "scegli", frase: "She's very ___. She always makes good decisions.", opzioni: ["sensible", "sensitive"], giusta: "sensible", perche: "Sensible = assennato; sensitive = sensibile." },
    { tipo: "scegli", frase: "He works ___ a waiter in a restaurant.", opzioni: ["as", "like"], giusta: "as", perche: "Ruolo o lavoro: as." },
    { tipo: "scegli", frase: "I'm ___ a taxi.", opzioni: ["waiting for", "waiting", "attending"], giusta: "waiting for", perche: "Aspettare qualcosa o qualcuno: wait for." },
    { tipo: "scegli", frase: "Can you ___ me to buy some bread?", opzioni: ["remind", "remember"], giusta: "remind", perche: "Ricordare a qualcuno: remind." },
    { tipo: "errore", frase: "I [am agree] with your idea.", corretta: "I agree with your idea.", perche: "Agree è un verbo: niente am." },
    { tipo: "errore", frase: "We need to [do] a decision today.", corretta: "We need to make a decision today.", perche: "Make a decision." },
    { tipo: "errore", frase: "I like [listening music] in the car.", corretta: "I like listening to music in the car.", perche: "Listen to." },
    { tipo: "scegli", consegna: "Scegli la parola che vuol dire «attualmente».", frase: "___ I live in Milan, but next year I'm moving to Rome.", opzioni: ["Currently", "Actually"], giusta: "Currently", perche: "Actually = in realtà. Attualmente = currently / at the moment." },
    { tipo: "traduci", italiano: "È tanto tempo che non ti vedo!", giuste: ["I have not seen you for a long time!", "I have not seen you for ages!", "I have not seen you in a long time!", "It has been a long time since I saw you!", "It has been a long time since I last saw you!", "Long time no see!"], perche: "Non «It's a long time that I don't see you»: present perfect + for." },
    { tipo: "traduci", italiano: "I miei genitori sono molto simpatici.", giuste: ["My parents are very nice.", "My parents are very friendly.", "My parents are really nice."], perche: "Simpatico = nice / friendly (non sympathetic)." },
    { tipo: "traduci", italiano: "Mi puoi fare un favore?", giuste: ["Can you do me a favour?", "Could you do me a favour?", "Can you do me a favor?", "Could you do me a favor?"], perche: "Do someone a favour." }
  ]
});
