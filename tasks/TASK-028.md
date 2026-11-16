# TASK-028 — Collega il frontend al catalogo remoto

> Progetto: Landing Page Monte Miele · Fase 5 — Supabase: database, storage e integrazione · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Frontend Engineer (Frontend Engineer)

## Obiettivo

Un adapter HTTP del CatalogService che sostituisce quello locale senza modificare componenti e route.

## Perché esiste

§6 chiede categorie e prodotti gestiti dinamicamente da Supabase.

## Scope

Include l'adapter, la factory, la validazione delle risposte e gli stati d'errore. Esclude modifiche alle pagine oltre a quelle strettamente necessarie.

## Come implementarla

1) services/catalog/httpCatalog.ts con fetch verso /api e validazione Zod delle risposte. 2) Scelta dell'adapter in un solo punto, una factory in services/catalog/index.ts. 3) Stati di errore e retry nelle route già pronte. 4) L'adapter locale resta solo per i test. 5) URL delle immagini dallo Storage con dimensioni responsive.

## Software e tool necessari

- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_5.md`
- frontend/app/services/catalog/httpCatalog.ts
- frontend/app/services/catalog/index.ts

## Cartelle rilevanti

- frontend/app/services/catalog/

## Contratti, API, schema interessati

- CatalogService invariato rispetto alla fase 3

## Grafi rilevanti

—

## Test richiesti

- Con MSW l'adapter HTTP supera gli stessi test di contratto dell'adapter locale
- Una risposta non conforme allo schema produce uno stato di errore, non un crash
- Gli end-to-end del catalogo della fase 3 sono verdi contro Supabase locale
- La build del frontend non contiene chiavi Supabase

## Debiti collegati

—

## Criteri di completamento

- Store e dettaglio funzionano con i dati di Supabase
- Nessun componente modificato per il cambio di sorgente

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-028-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-028 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-028-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-028.esito.md`](TASK-028.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

