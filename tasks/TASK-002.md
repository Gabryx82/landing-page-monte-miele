# TASK-002 — Configura il frontend con Vite, Tailwind e le route di React Router

> Progetto: Landing Page Monte Miele · Fase 1 — Fondamenta · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Frontend Engineer (Frontend Engineer)

## Obiettivo

Il frontend parte con npm run dev e mostra una pagina segnaposto per /, /store, /prodotti/:slug, /about, /contattaci, /privacy, /cookie-policy, più una 404.

## Perché esiste

Il MASTER_PROMPT fissa le route e chiede una strategia di prerendering: va decisa prima di scrivere le pagine.

## Scope

Include: Vite, React, TypeScript, Tailwind CSS v4, React Router v7 in framework mode con ssr: false e prerender delle route statiche, Lucide React, ADR-001. Esclude i contenuti e lo stile definitivo.

## Come implementarla

1) Crea l'app in frontend/ dal template React Router con TypeScript. 2) Aggiungi Tailwind v4 tramite il plugin Vite. 3) Definisci app/routes.ts con tutte le route e una 404. 4) In react-router.config.ts imposta ssr: false e il prerender delle route statiche; i prodotti si aggiungono in fase 6. 5) Imposta il proxy Vite da /api a localhost:3001. 6) Scrivi docs/adr/ADR-001-prerendering.md: perché framework mode con prerender invece di una SPA pura.

## Software e tool necessari

- claude-code
- powershell

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_1.md`
- frontend/package.json
- frontend/vite.config.ts
- frontend/react-router.config.ts
- frontend/app/root.tsx
- frontend/app/routes.ts
- frontend/app/routes/*.tsx
- docs/adr/ADR-001-prerendering.md

## Cartelle rilevanti

- frontend/app/
- frontend/public/

## Contratti, API, schema interessati

- Mappa delle route: / · /store?categoria= · /prodotti/:slug · /about · /contattaci?prodotto= · /privacy · /cookie-policy · 404

## Grafi rilevanti

—

## Test richiesti

- Test con createRoutesStub: ogni route mostra il proprio titolo segnaposto
- Una route inesistente mostra la pagina 404
- npm run build genera HTML statico per ogni route statica

## Debiti collegati

—

## Criteri di completamento

- Ogni route è raggiungibile in sviluppo e presente come HTML nella build
- ADR-001 scritto e motivato

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-002-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-002 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-002-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-002.esito.md`](TASK-002.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

