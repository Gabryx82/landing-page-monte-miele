# TASK-010 — Realizza l'hero cinematografico e il passaggio a «Il lavoro delle api»

> Progetto: Landing Page Monte Miele · Fase 2 — Homepage immersiva · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Frontend Engineer (Frontend Engineer)

## Obiettivo

Una scena continua. All'apertura il paesaggio compare, logo e testi entrano, l'ape attraversa lo schermo e si posa sul fiore. Scorrendo, il paesaggio si muove in parallasse, il testo sfuma, l'ape riparte, appare il favo con il miele che cola e compaiono i quattro valori.

## Perché esiste

Per §5 e §16 del MASTER_PROMPT è la parte più importante del progetto.

## Scope

Include: §5.1 e §5.2 completi con i testi e le CTA del MASTER_PROMPT («Scopri i prodotti» → /store, «La nostra storia» → /about); sequenza d'ingresso temporizzata; timeline ScrollTrigger fissata durante lo scroll; versioni reduced e static. Esclude le sezioni successive.

## Come implementarla

1) Livelli: fondale fotografico, fiori in primo piano, canvas dell'ape, testi. 2) Sequenza d'ingresso con una timeline GSAP non legata allo scroll: comparsa del paesaggio, testi, volo e posa dell'ape, idle in loop. 3) Timeline fissata con scrub: parallasse a velocità diverse, testo che sfuma, ape che lascia il fiore, dissolvenza verso il favo, colata del miele, poi in progressione i valori Fiori selezionati, Cura delle api, Produzione artigianale, Qualità del prodotto. 4) gsap.matchMedia per i livelli full, reduced e static. 5) Pulizia dei trigger allo smontaggio. 6) Placeholder segnalati dove gli asset non sono ancora pronti.

## Software e tool necessari

- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_2.md`
- frontend/app/routes/home.tsx
- frontend/app/pages/Home/sections/HeroScene.tsx
- frontend/app/pages/Home/sections/BeeWorkScene.tsx
- frontend/app/content/home.ts
- docs/home-storyboard.md
- references/images/apicoltura-monte-miele_-natura-e-tradizione.png

## Cartelle rilevanti

- frontend/app/pages/Home/sections/
- frontend/app/content/

## Contratti, API, schema interessati

- content/home.ts: testi e CTA tipizzati, nessun testo scritto nei componenti

## Grafi rilevanti

—

## Test richiesti

- Testing Library: «Monte Miele» come h1, il payoff, il sottotitolo e le due CTA con i link giusti
- Con reduced motion le sezioni mostrano lo stato finale statico con tutti i contenuti visibili
- Gli ScrollTrigger vengono distrutti allo smontaggio: nessun trigger residuo dopo una navigazione
- Verifica manuale nel pannello Performance: scroll fluido a 60 fps sul desktop di riferimento

## Debiti collegati

—

## Criteri di completamento

- I sei passi di §5.1 e i sei di §5.2 sono visibili e legati allo scroll
- Nessun salto visivo fra l'hero e la sezione delle api
- L'LCP dell'hero arriva dal poster ottimizzato

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-010-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-010 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-010-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-010.esito.md`](TASK-010.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

