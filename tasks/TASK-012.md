# TASK-012 — Realizza categorie, territorio e chiusura della homepage

> Progetto: Landing Page Monte Miele · Fase 2 — Homepage immersiva · Stato: OPEN · Priorità: MEDIUM
> Agente principale: Claude Frontend Engineer (Frontend Engineer)

## Obiettivo

Le sezioni §5.4–§5.6: tre card di categoria che entrano in progressione e portano al catalogo filtrato; il panorama di Liberi (CE) a tutta larghezza con una parallasse delicata e la CTA verso About; la chiusura con foto del miele, fiori, messaggio del marchio e due CTA.

## Perché esiste

Completano il racconto della homepage e portano a store, About e contatti.

## Scope

Include §5.4, §5.5 e §5.6 con dati e asset locali, più l'installazione di Playwright per il primo test end-to-end. Esclude Supabase. Il panorama è una foto verificata oppure un placeholder dichiarato come tale.

## Come implementarla

1) CategoryCard con immagine, titolo, descrizione e link a /store?categoria=miele, creme o pappa-reale; ingresso con whileInView di Motion. 2) Sezione territorio con ParallaxLayer, il titolo «Radici nel territorio, qualità in ogni vasetto.», un testo provvisorio segnalato e la CTA verso /about. 3) Chiusura con «Scopri i nostri prodotti» e «Contattaci». 4) Divisori ondulati e ornamenti botanici dal design system. 5) Configurazione di Playwright e un test end-to-end della homepage.

## Software e tool necessari

- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_2.md`
- frontend/app/pages/Home/sections/CategoriesSection.tsx
- frontend/app/pages/Home/sections/TerritorySection.tsx
- frontend/app/pages/Home/sections/ClosingSection.tsx
- frontend/app/content/home.ts
- playwright.config.ts
- e2e/home.spec.ts

## Cartelle rilevanti

- frontend/app/pages/Home/sections/
- e2e/

## Contratti, API, schema interessati

- Slug delle categorie: miele, creme, pappa-reale

## Grafi rilevanti

—

## Test richiesti

- Le tre card portano a /store?categoria=miele, creme e pappa-reale
- Il panorama ha un alt descrittivo e, se è un placeholder, l'etichetta visibile «Immagine provvisoria»
- Playwright: la homepage si carica, scorre fino al footer e ogni CTA porta alla route attesa

## Debiti collegati

—

## Criteri di completamento

- Sezioni §5.4–§5.6 complete
- Footer presente in fondo alla homepage
- Test end-to-end della homepage verde

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-012-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-012 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-012-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-012.esito.md`](TASK-012.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

