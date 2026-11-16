# TASK-005 — Predisponi il backend Express e il deploy di anteprima su Vercel

> Progetto: Landing Page Monte Miele · Fase 1 — Fondamenta · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Backend Engineer (Backend Engineer)

## Obiettivo

Un'app Express in TypeScript che risponde a GET /api/health in locale e, insieme al frontend, come funzione serverless su un deploy di anteprima Vercel.

## Perché esiste

La compatibilità fra Express, il frontend prerenderizzato e Vercel è il rischio tecnico più alto della struttura: va provata subito.

## Scope

Include: app Express separata dall'avvio; helmet; limite di dimensione del body JSON; gestore degli errori uniforme; configurazione da variabili d'ambiente validate con Zod; api/index.ts; vercel.json; progetto Vercel collegato a GitHub. Esclude gli endpoint di dominio.

## Come implementarla

1) backend/src/app.ts esporta l'app e backend/src/server.ts la avvia in locale sulla porta 3001. 2) config/env.ts valida le variabili con Zod. 3) Il middleware degli errori risponde con { error: { code, message } }. 4) api/index.ts importa l'app per Vercel. 5) vercel.json: build del frontend, output statico, rewrite di /api/(.*) verso la funzione. 6) Deploy di anteprima e ADR-002 sulla struttura di deploy.

## Software e tool necessari

- claude-code
- vercel
- github
- postman

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_1.md`
- backend/src/app.ts
- backend/src/server.ts
- backend/src/config/env.ts
- backend/src/middleware/errorHandler.ts
- backend/src/routes/health.ts
- api/index.ts
- vercel.json
- docs/adr/ADR-002-deploy-vercel.md

## Cartelle rilevanti

- backend/src/
- api/

## Contratti, API, schema interessati

- GET /api/health → 200 { status: 'ok' }
- Errori: { error: { code: string, message: string } }

## Grafi rilevanti

—

## Test richiesti

- Supertest: GET /api/health risponde 200
- Supertest: una route inesistente sotto /api risponde 404 nel formato degli errori
- Verifica manuale con Postman sull'URL di anteprima Vercel

## Debiti collegati

—

## Criteri di completamento

- /api/health risponde 200 sul deploy di anteprima
- Le pagine del frontend sono servite dallo stesso deploy
- ADR-002 scritto

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-005-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-005 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-005-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-005.esito.md`](TASK-005.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

