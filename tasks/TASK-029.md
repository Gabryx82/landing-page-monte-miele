# TASK-029 — Salva le richieste di contatto e invia la notifica email

> Progetto: Landing Page Monte Miele · Fase 5 — Supabase: database, storage e integrazione · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Backend Engineer (Backend Engineer)

## Obiettivo

Un repository Supabase che salva le richieste con il client service role lato server, e un notifier che avvisa l'indirizzo ufficiale quando è configurato.

## Perché esiste

§9 chiede di salvare le richieste su Supabase e di notificare l'attività quando il servizio email è configurato.

## Scope

Include repository, notifier, configurazione e decisione sul rate limit. Esclude la consultazione delle richieste, che avviene da Supabase Dashboard.

## Come implementarla

1) SupabaseContactRequestRepository: risolve productSlug in product_id e inserisce la richiesta con privacy_accepted_at = now() e status nuova. 2) Notifier email con un provider transazionale (es. Resend), attivo solo se sono impostate CONTACT_NOTIFY_EMAIL e la chiave del provider; altrimenti è un no-op che scrive un log. 3) Se l'email fallisce, la richiesta già salvata resta valida. 4) Valutazione di un rate limit persistente (una tabella o un servizio esterno), con la decisione in ADR-004. 5) Variabili su Vercel solo lato server.

## Software e tool necessari

- claude-code
- supabase
- vercel
- gmail

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_5.md`
- backend/src/services/supabaseContactRequestRepository.ts
- backend/src/services/emailNotifier.ts
- backend/src/config/env.ts
- .env.example
- docs/adr/ADR-004-rate-limit-e-notifiche.md

## Cartelle rilevanti

- backend/src/services/
- docs/adr/

## Contratti, API, schema interessati

- ContactRequestRepository e Notifier della fase 4

## Grafi rilevanti

—

## Test richiesti

- Integrazione con Supabase locale: la richiesta compare in contact_requests con il product_id corretto
- Uno slug di prodotto inesistente restituisce 400
- Con il notifier non configurato: 201 e nessun invio
- Con un errore del provider email: 201 e l'errore nel log

## Debiti collegati

—

## Criteri di completamento

- Richieste salvate su Supabase
- Notifica email funzionante quando è configurata
- ADR-004 scritto

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-029-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-029 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-029-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-029.esito.md`](TASK-029.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

