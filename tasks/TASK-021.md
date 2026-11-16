# TASK-021 — Definisci lo schema condiviso della richiesta di contatto

> Progetto: Landing Page Monte Miele · Fase 4 — About e Contattaci · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Code Engineer (Software Engineer)

## Obiettivo

Uno schema Zod in shared, usato identico dal modulo e dal backend, con le regole di §9.

## Perché esiste

§9 chiede di validare i dati sia nel client sia sul server: un unico schema evita divergenze.

## Scope

Include campi, regola condizionale sul prodotto, messaggi in italiano e tipi inferiti. Esclude la logica antispam, che sta nel backend.

## Come implementarla

1) Campi: name (2–100 caratteri); email; phone facoltativo con formato permissivo; requestType fra informazioni_generali, informazioni_prodotto, collaborazioni, altre_richieste; productSlug obbligatorio solo con informazioni_prodotto; message (10–500 caratteri); privacyAccepted che deve valere true; website facoltativo come honeypot; startedAt, il timestamp per il tempo minimo di compilazione. 2) superRefine per la regola condizionale. 3) Messaggi di errore in italiano. 4) Tipo ContactRequestInput inferito.

## Software e tool necessari

- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_4.md`
- shared/schemas/contactRequest.ts
- shared/types/contact.ts

## Cartelle rilevanti

- shared/schemas/
- shared/types/

## Contratti, API, schema interessati

- ContactRequestInput
- RequestType: informazioni_generali | informazioni_prodotto | collaborazioni | altre_richieste

## Grafi rilevanti

—

## Test richiesti

- Valida informazioni_generali senza prodotto
- Non valida informazioni_prodotto senza prodotto
- Non valida se privacyAccepted è false
- Non valida un messaggio oltre i 500 caratteri
- Non valida un'email malformata

## Debiti collegati

—

## Criteri di completamento

- Schema importato senza duplicazioni da frontend e backend
- Test verdi

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-021-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-021 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-021-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-021.esito.md`](TASK-021.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

