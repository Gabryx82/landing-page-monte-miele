# TASK-034 — Automatizza i controlli di qualità in CI

> Progetto: Landing Page Monte Miele · Fase 6 — Ottimizzazione e rilascio · Stato: OPEN · Priorità: MEDIUM
> Agente principale: LFM Test Engineer (Test Engineer)

## Obiettivo

Un workflow GitHub Actions che a ogni push esegue lint, test unitari, test del backend, e2e e Lighthouse CI con soglie.

## Perché esiste

Senza controlli automatici le regressioni di animazioni, accessibilità e prestazioni arrivano in produzione.

## Scope

Include il workflow, le soglie e le istruzioni nel README. Esclude il deploy, che resta gestito da Vercel.

## Come implementarla

1) Workflow con cache npm. 2) Job per i test unitari e del backend. 3) Job e2e con la build prerenderizzata e il backend avviato, usando Supabase locale nel job o API simulate. 4) Lighthouse CI con le soglie della fase. 5) Badge e istruzioni nel README.

## Software e tool necessari

- github
- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_6.md`
- .github/workflows/ci.yml
- lighthouserc.json
- playwright.config.ts
- e2e/*.spec.ts
- README.md

## Cartelle rilevanti

- .github/workflows/
- e2e/

## Contratti, API, schema interessati

- Soglie Lighthouse: 90 in ogni categoria su mobile

## Grafi rilevanti

—

## Test richiesti

- e2e completo: home → store → dettaglio → contattaci con il prodotto preselezionato → invio riuscito
- La pipeline fallisce se una soglia Lighthouse non è rispettata

## Debiti collegati

—

## Criteri di completamento

- CI verde sul branch principale
- Soglie documentate nel README

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-034-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-034 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-034-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-034.esito.md`](TASK-034.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

