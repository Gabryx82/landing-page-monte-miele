# TASK-020 — Imposta le pagine Privacy e Cookie policy

> Progetto: Landing Page Monte Miele · Fase 4 — About e Contattaci · Stato: OPEN · Priorità: MEDIUM
> Agente principale: Claude Tech Writer (Tech Writer)

## Obiettivo

/privacy e /cookie-policy con una struttura completa e testi provvisori chiaramente segnalati, pronte a ricevere i testi validati dal titolare.

## Perché esiste

Il modulo chiede il consenso privacy e il footer collega queste pagine: devono esistere prima del modulo. I contenuti legali non si inventano.

## Scope

Include: le sezioni tipiche (titolare, dati trattati, finalità, base giuridica, conservazione, diritti, cookie tecnici); segnaposto evidenti; data di aggiornamento; elenco dei cookie e dello storage realmente usati dal sito. Esclude i testi legali definitivi.

## Come implementarla

1) Componente LegalPage con indice delle sezioni. 2) Segnaposto [DA COMPLETARE] con PlaceholderNotice. 3) Elenco dei cookie e dello storage usati davvero dal sito, oggi solo tecnici. 4) ADR-003: niente banner finché non ci sono cookie non tecnici; la mappa resta caricata al clic.

## Software e tool necessari

- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_4.md`
- frontend/app/routes/privacy.tsx
- frontend/app/routes/cookie-policy.tsx
- frontend/app/components/ui/LegalPage.tsx
- frontend/app/content/legal.ts
- docs/adr/ADR-003-cookie-e-consenso.md

## Cartelle rilevanti

- frontend/app/content/
- docs/adr/

## Contratti, API, schema interessati

- LegalSection: { id, titolo, testo, provisional }

## Grafi rilevanti

—

## Test richiesti

- Entrambe le pagine mostrano un h1 e l'avviso di testo provvisorio
- I link del footer e del modulo puntano a /privacy e /cookie-policy

## Debiti collegati

—

## Criteri di completamento

- Le pagine esistono con una struttura completa e segnaposto evidenti
- ADR-003 scritto

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-020-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-020 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-020-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-020.esito.md`](TASK-020.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

