# TASK-024 — Crea lo schema del database con le migrazioni

> Progetto: Landing Page Monte Miele · Fase 5 — Supabase: database, storage e integrazione · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Database Engineer (Database Engineer)

## Obiettivo

Migrazioni che creano categories, products, product_images e contact_requests con chiavi esterne, vincoli e indici.

## Perché esiste

§10 chiede uno schema relazionale essenziale con chiavi esterne, vincoli e indici appropriati.

## Scope

Include tabelle, vincoli, indici, trigger di updated_at e la documentazione dello schema. Esclude RLS e seed, che sono le task successive.

## Come implementarla

1) supabase init e avvio in locale. 2) Tabelle con uuid, timestamptz, slug unici e sort_order. 3) Vincoli: request_type fra i quattro valori dello schema condiviso; status fra nuova, letta e gestita, con default nuova; product_id obbligatorio con informazioni_prodotto; messaggio lungo al massimo 500 caratteri; slug in kebab-case. 4) Chiavi esterne: restrict da products verso categories, cascade per product_images, set null per contact_requests.product_id. 5) Indici: products(category_id, active, sort_order), product_images(product_id, sort_order), contact_requests(created_at). 6) Trigger updated_at su products.

## Software e tool necessari

- supabase
- docker-desktop

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_5.md`
- supabase/config.toml
- supabase/migrations/<timestamp>_create_catalog.sql
- supabase/migrations/<timestamp>_create_contact_requests.sql
- docs/database.md

## Cartelle rilevanti

- supabase/migrations/
- supabase/tests/

## Contratti, API, schema interessati

- Schema di §10 del MASTER_PROMPT
- Valori di request_type allineati a shared/schemas/contactRequest.ts

## Grafi rilevanti

—

## Test richiesti

- supabase db reset senza errori
- Test pgTAP con supabase test db: slug duplicato rifiutato, request_type non valido rifiutato, informazioni_prodotto senza product_id rifiutato, updated_at aggiornato dal trigger

## Debiti collegati

—

## Criteri di completamento

- Migrazioni applicate in locale
- docs/database.md descrive tabelle, vincoli e indici

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-024-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-024 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-024-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-024.esito.md`](TASK-024.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

