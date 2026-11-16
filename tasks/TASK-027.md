# TASK-027 — Esponi il catalogo con le API del backend

> Progetto: Landing Page Monte Miele · Fase 5 — Supabase: database, storage e integrazione · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Backend Engineer (Backend Engineer)

## Obiettivo

Endpoint REST del catalogo che leggono Supabase con il client anon lato server e rispettano il contratto del CatalogService.

## Perché esiste

§2 e la Fase 5 di §15 prevedono API REST in Express; passare dal backend tiene le chiavi fuori dal frontend e permette la cache sulla CDN.

## Scope

Include client Supabase, endpoint, mappatura validata, cache e documentazione. Esclude la scrittura sul catalogo.

## Come implementarla

1) services/supabase.ts crea i client anon e service role dalla configurazione validata. 2) GET /api/categories, GET /api/products?categoria=&formato=&ordine=, GET /api/products/:slug, GET /api/products/:slug/related?limit=4. 3) Mappatura da snake_case a camelCase validata con gli schemi Zod condivisi. 4) 404 per uno slug inesistente o inattivo. 5) Cache-Control public con s-maxage=300 e stale-while-revalidate. 6) Collezione Postman e docs/api.md.

## Software e tool necessari

- claude-code
- supabase
- postman

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_5.md`
- backend/src/services/supabase.ts
- backend/src/routes/catalog.ts
- backend/src/controllers/catalogController.ts
- backend/src/services/catalogService.ts
- docs/api.md

## Cartelle rilevanti

- backend/src/

## Contratti, API, schema interessati

- GET /api/categories → Category[]
- GET /api/products → ProductSummary[] con l'immagine principale
- GET /api/products/:slug → ProductDetail | 404
- GET /api/products/:slug/related → ProductSummary[] (al massimo 4)

## Grafi rilevanti

—

## Test richiesti

- Supertest con Supabase locale: filtri per categoria e formato
- Uno slug inattivo restituisce 404
- related restituisce al massimo 4 prodotti della stessa categoria
- Le risposte rispettano gli schemi Zod condivisi

## Debiti collegati

—

## Criteri di completamento

- Endpoint documentati in docs/api.md
- Test di integrazione verdi

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-027-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-027 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-027-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-027.esito.md`](TASK-027.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

