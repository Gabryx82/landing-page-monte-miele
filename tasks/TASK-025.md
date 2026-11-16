# TASK-025 — Abilita la Row Level Security e verifica le policy

> Progetto: Landing Page Monte Miele · Fase 5 — Supabase: database, storage e integrazione · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Database Engineer (Database Engineer)

## Obiettivo

RLS attiva su tutte le tabelle: lettura pubblica solo di categorie, prodotti attivi e immagini dei prodotti attivi; nessun accesso pubblico a contact_requests.

## Perché esiste

§10 chiede RLS sulle tabelle esposte: il catalogo pubblico deve permettere solo la lettura dei prodotti attivi, e le richieste di contatto non devono essere consultabili pubblicamente.

## Scope

Include policy, revoca dei privilegi e test con i ruoli. Esclude l'autenticazione degli amministratori.

## Come implementarla

1) enable row level security sulle quattro tabelle. 2) Policy di select per anon e authenticated: categories intera, products con active = true, product_images con un exists sul prodotto attivo. 3) Nessuna policy su contact_requests, quindi accesso solo con la service role. 4) Revoca dei privilegi di scrittura per anon e authenticated. 5) Documentazione delle policy in docs/database.md.

## Software e tool necessari

- supabase
- docker-desktop

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_5.md`
- supabase/migrations/<timestamp>_enable_rls.sql
- supabase/tests/rls.test.sql
- docs/database.md

## Cartelle rilevanti

- supabase/migrations/
- supabase/tests/

## Contratti, API, schema interessati

- Accesso anon: sola lettura di categories, products attivi e product_images dei prodotti attivi

## Grafi rilevanti

—

## Test richiesti

- pgTAP come anon: una select su contact_requests non restituisce righe
- anon non vede i prodotti con active = false né le loro immagini
- insert, update e delete come anon falliscono su tutte le tabelle

## Debiti collegati

—

## Criteri di completamento

- RLS attiva su tutte le tabelle
- Test delle policy verdi

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-025-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-025 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-025-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-025.esito.md`](TASK-025.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

