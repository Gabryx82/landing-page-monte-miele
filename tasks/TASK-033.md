# TASK-033 — Esegui l'audit di accessibilità e correggi

> Progetto: Landing Page Monte Miele · Fase 6 — Ottimizzazione e rilascio · Stato: OPEN · Priorità: HIGH
> Agente principale: LFM Test Engineer (Test Engineer)

## Obiettivo

Conformità WCAG 2.2 AA sui percorsi principali.

## Perché esiste

§12 chiede HTML semantico, alt text, navigazione da tastiera, focus visibili e contrasti accessibili.

## Scope

Include controlli automatici e manuali, le correzioni e il report. Esclude il ridisegno dell'identità visiva.

## Come implementarla

1) axe automatico su tutte le route con Playwright. 2) Test manuale da tastiera: ordine del focus, focus visibile, assenza di trappole. 3) Screen reader (NVDA) su home, store, dettaglio e modulo. 4) Contrasto dei testi sopra le foto e degli accenti ambra. 5) Alt text per ogni immagine informativa e alt vuoto per quelle decorative. 6) Report in docs/accessibility.md.

## Software e tool necessari

- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_6.md`
- e2e/a11y.spec.ts
- docs/accessibility.md

## Cartelle rilevanti

- e2e/
- docs/

## Contratti, API, schema interessati

- Livello di conformità: WCAG 2.2 AA

## Grafi rilevanti

—

## Test richiesti

- axe senza violazioni serious o critical su tutte le route
- Checklist manuale di tastiera e screen reader compilata

## Debiti collegati

—

## Criteri di completamento

- Violazioni corrette o documentate con una motivazione
- Report di accessibilità scritto

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-033-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-033 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-033-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-033.esito.md`](TASK-033.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

