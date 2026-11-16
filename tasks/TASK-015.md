# TASK-015 — Realizza la pagina Store con categorie, filtri e ordinamento

> Progetto: Landing Page Monte Miele · Fase 3 — Store e dettaglio prodotto · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Frontend Engineer (Frontend Engineer)

## Obiettivo

La pagina /store con hero, selezione delle categorie (Tutti i prodotti, Miele, Creme, Pappa reale), filtro per formato, ordinamento e griglia, tutto sincronizzato con la query string.

## Perché esiste

§6 chiede un catalogo navigabile per categoria, raggiungibile anche dai link della homepage.

## Scope

Include: hero ispirato alla reference; categorie lette dal servizio; filtri nell'URL; conteggio dei risultati; stati vuoto, caricamento ed errore; layout responsive con i filtri in un pannello su mobile. Esclude i prezzi e il filtro di disponibilità.

## Come implementarla

1) Un clientLoader legge categoria, formato e ordine dall'URL e chiama il servizio. 2) CategoryFilter con link che aggiornano ?categoria=. 3) Filtro formato con i valori distinti presenti nel catalogo. 4) Select dell'ordinamento. 5) Con una categoria inesistente: messaggio e link a tutti i prodotti. 6) Ingresso progressivo delle card con Motion.

## Software e tool necessari

- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_3.md`
- frontend/app/routes/store.tsx
- frontend/app/pages/Store/StoreHero.tsx
- frontend/app/components/products/CategoryFilter.tsx
- frontend/app/components/products/ProductGrid.tsx
- references/images/negozio-monte-miele_-tesori-dell-alveare.png

## Cartelle rilevanti

- frontend/app/pages/Store/
- frontend/app/components/products/

## Contratti, API, schema interessati

- Query string: categoria, formato, ordine

## Grafi rilevanti

—

## Test richiesti

- /store?categoria=creme mostra solo creme e la categoria risulta attiva
- Cambiare l'ordinamento aggiorna l'URL e l'ordine della griglia
- Una categoria inesistente mostra lo stato vuoto con il link a tutti i prodotti
- Le categorie arrivano dal servizio, non da costanti nel componente

## Debiti collegati

—

## Criteri di completamento

- Filtri e ordinamento funzionanti e condivisibili via URL
- Stati vuoto, caricamento ed errore visibili

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-015-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-015 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-015-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-015.esito.md`](TASK-015.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

