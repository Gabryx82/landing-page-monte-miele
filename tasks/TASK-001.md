# TASK-001 — Inizializza il monorepo con i workspace frontend, backend e shared

> Progetto: Landing Page Monte Miele · Fase 1 — Fondamenta · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Code Engineer (Software Engineer)

## Obiettivo

Un repository Git con npm workspaces, TypeScript strict condiviso, ESLint, Prettier e Vitest configurati in ogni pacchetto.

## Perché esiste

Tutte le fasi successive condividono tipi e schemi fra frontend e backend: serve una base unica e verificabile.

## Scope

Include: struttura delle cartelle, tsconfig di base, script npm alla radice (dev, build, test, lint), .gitignore, .env.example, README iniziale, repository GitHub. Esclude il codice applicativo.

## Come implementarla

1) git init e creazione del repository GitHub. 2) package.json alla radice con i workspace frontend, backend e shared. 3) tsconfig.base.json strict con l'alias @shared/*. 4) Configurazione flat di ESLint e Prettier. 5) Vitest in ogni workspace con un test di esempio. 6) README con i comandi e la struttura del repository.

## Software e tool necessari

- claude-code
- github
- powershell

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_1.md`
- package.json
- tsconfig.base.json
- eslint.config.js
- .prettierrc
- .gitignore
- .env.example
- README.md
- shared/package.json
- shared/types/index.ts

## Cartelle rilevanti

- frontend/
- backend/
- shared/
- supabase/migrations/
- docs/adr/

## Contratti, API, schema interessati

- Alias di import @shared/* risolto da frontend e backend

## Grafi rilevanti

—

## Test richiesti

- Test Vitest di esempio in shared che importa un tipo e passa
- npm run lint e npm run test eseguiti dalla radice

## Debiti collegati

—

## Criteri di completamento

- npm install, npm run lint e npm run test passano dalla radice
- Repository GitHub creato con il primo commit

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-001-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-001 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-001-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

Predisposti i tre workspace npm con TypeScript strict, ESLint, Prettier e Vitest. Installazione, lint, build e tre test verificati dalla radice. Primo commit sul ramo `main` del repository GitHub privato.

[TASK-001.esito.md](TASK-001.esito.md)

## Note

- Node.js 24 LTS e npm 11 come base di sviluppo. TypeScript 6.0 per compatibilità con typescript-eslint.
- In questa task `dev` avvia Vitest in watch e `build` verifica i tipi. I comandi applicativi e la risoluzione dell'alias nei relativi ambienti di esecuzione arrivano con le task di frontend e backend.
- Repository GitHub privato. Handoff, stato AI Company OS e diari conservati nella cartella locale.
