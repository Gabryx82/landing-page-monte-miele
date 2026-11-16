# TASK-011 — Realizza la presentazione dei prodotti guidata dallo scroll

> Progetto: Landing Page Monte Miele · Fase 2 — Homepage immersiva · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Frontend Engineer (Frontend Engineer)

## Obiettivo

La sezione §5.3: lo sfondo vira al crema, un vasetto sale dal basso e ruota fino alla posizione finale, poi arrivano il secondo prodotto e la pappa reale, si forma una composizione ordinata e infine compaiono titolo, sottotitolo e CTA «Esplora lo store».

## Perché esiste

È il punto in cui la narrazione passa ai prodotti e porta allo store.

## Scope

Include: i sette passi di §5.3 con il titolo «Miele e creme, per ogni esigenza.», il sottotitolo e la CTA verso /store; ombre realistiche; fallback statico. Esclude il catalogo dinamico: i prodotti mostrati sono una selezione editoriale in content/home.ts.

## Come implementarla

1) Timeline fissata con scrub per i sette passi. 2) Prodotti da ImageSequenceCanvas oppure da immagini scontornate con leggere trasformazioni 3D, con le ombre su un livello separato. 3) Composizione finale ispirata alla reference: prodotti su pietra con fiori e favo. 4) Fallback static: composizione finale fissa con tutti i testi.

## Software e tool necessari

- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_2.md`
- frontend/app/pages/Home/sections/ProductsShowcase.tsx
- frontend/app/content/home.ts
- docs/home-storyboard.md
- references/images/apicoltura-monte-miele_-natura-e-tradizione.png

## Cartelle rilevanti

- frontend/app/pages/Home/sections/

## Contratti, API, schema interessati

- Voci dello showcase in content/home.ts: { id, nome, immagine statica, sequenza opzionale, alt }

## Grafi rilevanti

—

## Test richiesti

- Titolo, sottotitolo e CTA verso /store presenti
- Ordine di comparsa dei prodotti verificato portando la timeline a progressi noti
- Con reduced motion compare subito la composizione finale

## Debiti collegati

—

## Criteri di completamento

- I sette passi di §5.3 sono visibili e legati allo scroll
- Movimenti morbidi con ombre credibili, senza layout shift

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-011-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-011 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-011-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-011.esito.md`](TASK-011.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

