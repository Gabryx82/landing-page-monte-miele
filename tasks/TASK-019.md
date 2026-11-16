# TASK-019 — Realizza la timeline animata «Dall'alveare al vasetto»

> Progetto: Landing Page Monte Miele · Fase 4 — About e Contattaci · Stato: OPEN · Priorità: MEDIUM
> Agente principale: Claude Frontend Engineer (Frontend Engineer)

## Obiettivo

Una timeline dei sei passi (Fioritura, Lavoro delle api, Raccolta del miele, Estrazione, Lavorazione, Confezionamento) con icone coerenti, fotografie e avanzamento legato allo scroll.

## Perché esiste

§8 chiede di rappresentare il processo produttivo con una timeline animata.

## Scope

Include le versioni desktop, mobile e statica, con una struttura semantica. Esclude descrizioni tecniche non verificate dei processi.

## Come implementarla

1) Dati dei passi in content/about.ts. 2) Desktop: percorso orizzontale o a serpentina con una linea SVG che si disegna allo scroll, tramite GSAP, e passi che si attivano in sequenza. 3) Mobile: lista verticale con ingresso progressivo. 4) Static: tutti i passi visibili. 5) Struttura semantica come lista ordinata.

## Software e tool necessari

- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_4.md`
- frontend/app/pages/About/ProcessTimeline.tsx
- frontend/app/content/about.ts
- references/images/apicoltura-monte-miele_-passione-e-territorio.png

## Cartelle rilevanti

- frontend/app/pages/About/

## Contratti, API, schema interessati

- ProcessStep: { id, titolo, testo, icona, immagine? }

## Grafi rilevanti

—

## Test richiesti

- La timeline è una lista ordinata di sei elementi nell'ordine di §8
- Con reduced motion tutti i passi sono visibili subito
- Le icone decorative hanno aria-hidden

## Debiti collegati

—

## Criteri di completamento

- Timeline animata legata allo scroll su desktop e semplificata su mobile
- Leggibile senza animazioni

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-019-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-019 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-019-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-019.esito.md`](TASK-019.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

