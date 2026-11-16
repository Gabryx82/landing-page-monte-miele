# TASK-030 — Ottimizza immagini, sequenze e caricamento degli asset

> Progetto: Landing Page Monte Miele · Fase 6 — Ottimizzazione e rilascio · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Code Engineer (Software Engineer)

## Obiettivo

Immagini AVIF/WebP responsive, sequenze leggere per livello di movimento, font ottimizzati e un budget di peso verificato automaticamente.

## Perché esiste

§11 chiede animazioni curate senza compromettere le prestazioni, con lazy loading e immagini WebP/AVIF.

## Scope

Include la pipeline delle immagini, il caricamento progressivo delle sequenze, i font e lo script di budget. Esclude la produzione di nuovi asset.

## Come implementarla

1) Pipeline che genera AVIF e WebP in più larghezze, con srcset e sizes. 2) Lazy loading sotto la piega e fetchpriority high per il poster dell'hero. 3) Sequenze con meno frame e risoluzione minore nel livello reduced, precaricate solo quando ci si avvicina alla scena. 4) Font ridotti al sottoinsieme di caratteri usato, con preload del solo font dei titoli. 5) Budget di peso per pagina verificato in CI.

## Software e tool necessari

- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_6.md`
- scripts/optimize-images.ts
- scripts/check-budget.ts
- frontend/app/components/ui/ResponsiveImage.tsx
- frontend/app/components/animations/ImageSequenceCanvas.tsx
- docs/ASSETS.md

## Cartelle rilevanti

- scripts/
- frontend/public/

## Contratti, API, schema interessati

- Budget di peso definito in docs/home-storyboard.md

## Grafi rilevanti

—

## Test richiesti

- Script di budget: peso iniziale della homepage entro il limite
- Ogni img ha width e height o un aspect-ratio, per evitare CLS
- Lighthouse senza avvisi sui formati delle immagini

## Debiti collegati

—

## Criteri di completamento

- Budget rispettati su desktop e mobile
- Nessuna immagine non ottimizzata nella build

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-030-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-030 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-030-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-030.esito.md`](TASK-030.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

