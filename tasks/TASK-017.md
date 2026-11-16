# TASK-017 — Verifica il percorso del catalogo con test end-to-end

> Progetto: Landing Page Monte Miele · Fase 3 — Store e dettaglio prodotto · Stato: OPEN · Priorità: MEDIUM
> Agente principale: LFM Test Engineer (Test Engineer)

## Obiettivo

Test Playwright che coprono il percorso home → store → filtro → dettaglio → CTA verso contattaci, su desktop e mobile.

## Perché esiste

Il percorso che trasforma l'interesse in una richiesta è l'obiettivo finale del sito: va protetto dalle regressioni prima di collegare Supabase.

## Scope

Include scenari desktop e mobile, asserzioni sull'assenza di elementi d'acquisto e controlli axe automatici. Esclude l'invio del modulo (fase 4).

## Come implementarla

1) Scenari desktop e mobile (viewport di 390 px). 2) Asserzioni su URL e contenuti, e sull'assenza di prezzi e carrello. 3) Controllo axe su /store e /prodotti/:slug. 4) Script npm test:e2e.

## Software e tool necessari

- claude-code
- github

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_3.md`
- e2e/catalog.spec.ts
- playwright.config.ts

## Cartelle rilevanti

- e2e/

## Contratti, API, schema interessati

- Percorso: / → /store?categoria=miele → /prodotti/:slug → /contattaci?prodotto=:slug

## Grafi rilevanti

—

## Test richiesti

- Test end-to-end del catalogo su desktop e mobile
- Nessuna violazione axe di livello serious o critical

## Debiti collegati

—

## Criteri di completamento

- Suite end-to-end del catalogo verde
- Script npm test:e2e documentato nel README

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-017-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-017 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-017-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-017.esito.md`](TASK-017.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

