# TASK-014 — Crea la card prodotto senza prezzi né acquisto

> Progetto: Landing Page Monte Miele · Fase 3 — Store e dettaglio prodotto · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Frontend Engineer (Frontend Engineer)

## Obiettivo

Una ProductCard riusabile con fotografia, nome, breve descrizione, formato, categoria, «Scopri il prodotto» e «Richiedi informazioni», con un hover morbido.

## Perché esiste

La card compare nello store e fra i prodotti correlati, e porta alle due azioni del sito: approfondire e chiedere informazioni.

## Scope

Include contenuti, link, stati di hover e focus, versione touch. Esclude prezzi, quantità, carrello e disponibilità.

## Come implementarla

1) Immagine con aspect ratio fisso, lazy loading e srcset. 2) Contenuti e badge della categoria. 3) «Scopri il prodotto» → /prodotti/:slug e «Richiedi informazioni» → /contattaci?prodotto=:slug. 4) Hover e focus-visible: scala dell'immagine, sollevamento di 2–4 px, comparsa del pulsante con una transizione; su touch i pulsanti sono sempre visibili.

## Software e tool necessari

- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_3.md`
- frontend/app/components/products/ProductCard.tsx
- references/images/negozio-monte-miele_-tesori-dell-alveare.png

## Cartelle rilevanti

- frontend/app/components/products/

## Contratti, API, schema interessati

- ProductCard props: { product: ProductSummary }

## Grafi rilevanti

—

## Test richiesti

- Mostra nome, descrizione, formato, categoria e i due link con href corretti
- Non mostra prezzi, il simbolo € o testi come Aggiungi o carrello
- I pulsanti sono raggiungibili da tastiera anche senza hover

## Debiti collegati

—

## Criteri di completamento

- Card conforme a §6 e alle reference, senza elementi d'acquisto
- Test verdi

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-014-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-014 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-014-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-014.esito.md`](TASK-014.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

