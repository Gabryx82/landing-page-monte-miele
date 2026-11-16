# TASK-031 — Rifinisci il responsive e le animazioni su mobile

> Progetto: Landing Page Monte Miele · Fase 6 — Ottimizzazione e rilascio · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Frontend Engineer (Frontend Engineer)

## Obiettivo

Ogni pagina è leggibile e completa da 360 a 1920 px; su mobile le scene usano il livello ridotto e nessuna animazione impedisce di usare il sito.

## Perché esiste

§11 chiede su mobile animazioni più semplici, nessun contenuto tagliato e moduli funzionanti.

## Scope

Include la revisione di tutte le route alle larghezze di riferimento e la regolazione delle scene. Esclude il ridisegno delle sezioni.

## Come implementarla

1) Revisione a 360, 390, 768, 1024, 1440 e 1920 px. 2) Su mobile: pin più corti, sequenze leggere, parallasse attenuata. 3) Verifica di prefers-reduced-motion su tutte le scene. 4) Profilo Performance su un dispositivo reale o emulato con CPU rallentata 4x: nessun long task oltre i 50 ms durante lo scroll. 5) Correzione di contenuti tagliati e overflow orizzontale.

## Software e tool necessari

- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_6.md`
- frontend/app/pages/Home/sections/*.tsx
- frontend/app/hooks/useMotionTier.ts
- e2e/responsive.spec.ts

## Cartelle rilevanti

- frontend/app/pages/
- e2e/

## Contratti, API, schema interessati

- Livelli di movimento full | reduced | static

## Grafi rilevanti

—

## Test richiesti

- Playwright: screenshot di confronto alle larghezze di riferimento
- Nessun overflow orizzontale a 360 px su tutte le route
- Con reduced motion emulato in Playwright nessun contenuto resta invisibile

## Debiti collegati

—

## Criteri di completamento

- Nessun contenuto tagliato da 360 a 1920 px
- Scroll fluido su mobile emulato

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-031-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-031 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-031-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-031.esito.md`](TASK-031.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

