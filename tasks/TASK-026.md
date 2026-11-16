# TASK-026 — Configura lo Storage delle immagini e carica il seed

> Progetto: Landing Page Monte Miele · Fase 5 — Supabase: database, storage e integrazione · Stato: OPEN · Priorità: MEDIUM
> Agente principale: Claude Database Engineer (Database Engineer)

## Obiettivo

Un bucket product-images pubblico in lettura, una convenzione per i percorsi e uno script che carica categorie, prodotti e immagini dal seed provvisorio.

## Perché esiste

§10 e §2 chiedono Supabase Storage per le immagini dei prodotti e la gestione iniziale da Dashboard.

## Scope

Include bucket, policy dello Storage, seed locale, script di caricamento e guida operativa. Esclude un'interfaccia di amministrazione.

## Come implementarla

1) Bucket product-images con lettura pubblica e scrittura riservata alla service role. 2) Percorsi products/<slug>/<n>.webp e categories/<slug>.webp. 3) supabase/seed.sql per il database locale. 4) Script scripts/seed-storage.ts che carica le immagini ottimizzate e crea le righe di product_images. 5) In produzione i prodotti non verificati entrano con active = false. 6) Guida in docs/database.md per aggiungere un prodotto da Supabase Dashboard.

## Software e tool necessari

- supabase
- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_5.md`
- supabase/seed.sql
- scripts/seed-storage.ts
- shared/data/catalog.seed.json
- docs/database.md

## Cartelle rilevanti

- supabase/
- scripts/

## Contratti, API, schema interessati

- Convenzione dei percorsi del bucket product-images

## Grafi rilevanti

—

## Test richiesti

- Dopo db reset e seed le query del catalogo restituiscono gli otto prodotti in locale
- L'URL pubblico di un'immagine risponde 200 senza autenticazione
- Un upload con la chiave anon viene rifiutato

## Debiti collegati

—

## Criteri di completamento

- Catalogo e immagini disponibili in locale
- Guida per la gestione da Dashboard scritta

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-026-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-026 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-026-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-026.esito.md`](TASK-026.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

