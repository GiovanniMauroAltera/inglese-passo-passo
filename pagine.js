/* Le pagine di testo: il metodo e la scheda dei tempi verbali. */

var PAGINA_METODO = `
<h1>Come funziona il metodo</h1>
<p>L'app mette insieme le tecniche che negli studi sull'apprendimento hanno dato i risultati più solidi. Ecco cosa fa e perché.</p>

<h2>Come usarla, in pratica</h2>
<ul>
<li><strong>Ogni giorno, prima il ripasso.</strong> Bastano 10–15 minuti. È la parte che fa ricordare a lungo.</li>
<li><strong>Poi una lezione nuova</strong>, quando hai tempo: leggi la spiegazione e fai gli esercizi.</li>
<li><strong>Ogni tanto l'allenamento misto</strong>, soprattutto con «Solo tempi verbali»: ti allena a <em>scegliere</em> il tempo giusto, che è la cosa più difficile.</li>
<li><strong>Dì le frasi ad alta voce.</strong> Ascolta la frase corretta e ripetila: così la grammatica passa anche nel parlato.</li>
</ul>

<h2>1. Prima capire la regola</h2>
<p>Una spiegazione chiara della regola funziona meglio che lasciarla «scoprire» da soli. Vale sia per le regole semplici sia per quelle complesse, e aiuta anche quando parli senza pensarci. Per questo ogni lezione inizia con una spiegazione breve, in italiano, con il confronto con l'italiano.</p>

<h2>2. Mettersi alla prova, non rileggere</h2>
<p>Tirare fuori una risposta dalla memoria la fissa molto di più che rileggere. È una delle due tecniche di studio più efficaci che si conoscano. Per questo quasi tutti gli esercizi ti chiedono di scrivere o costruire la frase.</p>

<h2>3. Correzione subito, con il perché</h2>
<p>La correzione aiuta, e quella che spiega la regola aiuta di più per le cose difficili, come articoli e periodo ipotetico. Dopo ogni risposta vedi la frase corretta e il perché.</p>

<h2>4. Ripassi distanziati</h2>
<p>Ripassare a distanza di giorni fa ricordare più a lungo che ripetere tutto in una volta. Ogni esercizio che fai giusto torna dopo 1, 3, 7, 14, 30, 60 e 120 giorni; se lo sbagli, torna il giorno dopo. Per la grammatica gli studi non sono ancora d'accordo sulla distanza ideale tra un ripasso e l'altro: questi intervalli sono una scelta prudente.</p>

<h2>5. Mescolare gli argomenti</h2>
<p>Esercitarsi su argomenti mescolati è più faticoso ma fa ricordare meglio quale forma scegliere. È stato dimostrato proprio sui tempi verbali dell'inglese e delle lingue romanze. Per questo si impara un argomento alla volta nella lezione, poi i ripassi e l'allenamento misto mescolano tutto.</p>

<h2>6. Dalla regola all'automatismo</h2>
<p>Una regola diventa automatica in tre passi: la capisci, la usi con attenzione, la usi tante volte finché non ci pensi più. Le lezioni seguono proprio questi passi: spiegazione, esercizi, ripassi e frasi da dire.</p>

<h2>7. Gli errori da italiani</h2>
<p>Molti errori nascono dal trasferire l'italiano: il present perfect al posto del past simple (per colpa del passato prossimo), «I live here since 2010» (dal nostro «da»), gli articoli. Ogni lezione li mostra e li allena con gli esercizi «trova l'errore».</p>

<h2>Le fonti</h2>
<ul class="fonti">
<li>Norris, J. M. e Ortega, L. (2000). <em>Effectiveness of L2 instruction: A research synthesis and quantitative meta-analysis.</em> Language Learning, 50(3), 417–528.</li>
<li>Spada, N. e Tomita, Y. (2010). <em>Interactions between type of instruction and type of language feature: A meta-analysis.</em> Language Learning, 60(2), 263–308.</li>
<li>Karpicke, J. D. e Roediger, H. L. (2008). <em>The critical importance of retrieval for learning.</em> Science, 319, 966–968.</li>
<li>Dunlosky, J. e altri (2013). <em>Improving students' learning with effective learning techniques.</em> Psychological Science in the Public Interest, 14(1), 4–58.</li>
<li>Li, S. (2010). <em>The effectiveness of corrective feedback in SLA: A meta-analysis.</em> Language Learning, 60(2), 309–365.</li>
<li>Lyster, R. e Saito, K. (2010). <em>Oral feedback in classroom SLA: A meta-analysis.</em> Studies in Second Language Acquisition, 32(2), 265–302.</li>
<li>Nakata, T. e Suzuki, Y. (2019). <em>Mixing grammar exercises facilitates long-term retention: Effects of blocking, interleaving, and increasing practice.</em> The Modern Language Journal, 103(3), 629–647.</li>
<li>Pan, S. C. e altri (2025). <em>Interleaved practice enhances grammar skill learning for similar and dissimilar tenses in Romance languages.</em> Learning and Instruction, 95.</li>
<li>Suzuki, Y., Nakata, T. e DeKeyser, R. (2019). <em>Optimizing second language practice in the classroom: Perspectives from cognitive psychology.</em> The Modern Language Journal, 103(3).</li>
<li>Suzuki, Y. e DeKeyser, R. (2017). <em>Effects of distributed practice on the proceduralization of morphology.</em> Language Teaching Research, 21(2).</li>
<li>Kasprowicz, R., Marsden, E. e Sephton, N. (2019). <em>Investigating distribution of practice effects for the learning of foreign language verb morphology in the young learner classroom.</em> The Modern Language Journal, 103(3).</li>
<li>DeKeyser, R. (2015). <em>Skill acquisition theory.</em> In VanPatten e Williams (a cura di), Theories in Second Language Acquisition. Routledge.</li>
</ul>
`;

var PAGINA_TEMPI = `
<h1>Tutti i tempi verbali</h1>
<p>Una scheda da tenere a portata di mano. Per ogni tempo: com'è fatto, quando si usa e come lo diremmo in italiano.</p>

<h2>Presente</h2>
<h3>Present simple</h3>
<p><em>I work, she works, I don't work, Do you work?</em><br>Abitudini, fatti, situazioni permanenti, orari.</p>
<p class="es"><span class="en">I work in a bank.</span><span class="it">Lavoro in banca.</span></p>
<h3>Present continuous</h3>
<p><em>I'm working, she isn't working, Are you working?</em><br>Adesso, in questo periodo, cambiamenti, appuntamenti futuri.</p>
<p class="es"><span class="en">I'm working from home this week.</span><span class="it">Questa settimana lavoro da casa.</span></p>

<h2>Passato</h2>
<h3>Past simple</h3>
<p><em>I worked, I went, I didn't go, Did you go?</em><br>Azione finita in un momento preciso del passato.</p>
<p class="es"><span class="en">I saw Marco yesterday.</span><span class="it">Ho visto Marco ieri.</span></p>
<h3>Past continuous</h3>
<p><em>I was working, they were sleeping</em><br>Azione in corso in un momento del passato (spesso interrotta).</p>
<p class="es"><span class="en">I was cooking when you called.</span><span class="it">Stavo cucinando quando hai chiamato.</span></p>
<h3>Used to</h3>
<p><em>I used to play, I didn't use to play</em><br>Abitudini passate che ora non ci sono più (il nostro imperfetto delle abitudini).</p>
<p class="es"><span class="en">I used to live in Rome.</span><span class="it">Abitavo a Roma.</span></p>

<h2>Il ponte tra passato e presente</h2>
<h3>Present perfect</h3>
<p><em>I have worked, she has gone, Have you ever been...?</em><br>Esperienze, novità con un risultato adesso, periodi non finiti, con for e since per le situazioni ancora vere.</p>
<p class="es"><span class="en">I've lived here for three years.</span><span class="it">Vivo qui da tre anni.</span></p>
<h3>Present perfect continuous</h3>
<p><em>I have been working</em><br>Attività che continua fino a adesso, o appena finita con effetti visibili.</p>
<p class="es"><span class="en">I've been waiting for an hour.</span><span class="it">Aspetto da un'ora.</span></p>
<h3>Past perfect</h3>
<p><em>I had worked, she had left</em><br>Prima di un altro momento passato (il nostro trapassato prossimo).</p>
<p class="es"><span class="en">The train had already left.</span><span class="it">Il treno era già partito.</span></p>

<h2>Futuro</h2>
<h3>will</h3>
<p>Decisioni prese adesso, offerte, promesse, opinioni sul futuro.</p>
<p class="es"><span class="en">I'll help you.</span><span class="it">Ti aiuto io.</span></p>
<h3>be going to</h3>
<p>Intenzioni già decise, previsioni basate su quello che vedi.</p>
<p class="es"><span class="en">I'm going to study medicine.</span><span class="it">Studierò medicina (ho deciso).</span></p>
<h3>Present continuous per il futuro</h3>
<p>Appuntamenti e piani già organizzati.</p>
<p class="es"><span class="en">I'm meeting Anna at six.</span><span class="it">Vedo Anna alle sei.</span></p>
<h3>Future continuous</h3>
<p><em>I will be working</em><br>In corso in un momento del futuro.</p>
<p class="es"><span class="en">This time tomorrow I'll be flying.</span><span class="it">Domani a quest'ora sarò in volo.</span></p>
<h3>Future perfect</h3>
<p><em>I will have finished</em><br>Già concluso entro un momento futuro (il nostro futuro anteriore).</p>
<p class="es"><span class="en">By June I'll have finished.</span><span class="it">Entro giugno avrò finito.</span></p>

<h2>Condizionale e periodo ipotetico</h2>
<div class="scorri"><table class="tabella">
<tr><th>Tipo</th><th>Forma</th><th>Esempio</th></tr>
<tr><td>0</td><td>if + present, present</td><td class="f">If you heat ice, it melts.</td></tr>
<tr><td>1</td><td>if + present, will</td><td class="f">If it rains, I'll stay at home.</td></tr>
<tr><td>2</td><td>if + past simple, would</td><td class="f">If I had money, I'd buy it.</td></tr>
<tr><td>3</td><td>if + past perfect, would have + participio</td><td class="f">If I had known, I'd have come.</td></tr>
</table></div>
<p>Dopo <em>if</em> (e dopo <em>when, as soon as, until</em> riferiti al futuro) non si usa mai will o would.</p>
`;
