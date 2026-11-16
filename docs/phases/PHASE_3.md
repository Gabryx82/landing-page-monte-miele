# PHASE 3 — Store e dettaglio prodotto

> Progetto: Landing Page Monte Miele · Stato: PLANNED · Approvazione: PENDING

## Obiettivo

Il catalogo mostra categorie, filtri, ordinamento e una griglia di prodotti, senza prezzi né acquisto. Ogni prodotto ha una pagina di dettaglio con galleria, informazioni verificate, prodotti correlati e una CTA che porta a /contattaci con il prodotto.

## Scope

Include: contratto del catalogo condiviso; seed provvisorio da verificare; servizio del catalogo con adapter locale; pagine /store e /prodotti/:slug. Esclude Supabase (fase 5), prezzi, carrello, disponibilità di magazzino e il modulo contatti (fase 4).

## Prerequisiti

- Fase 1 completata
- Inventario dei contenuti della fase 2 (docs/ASSETS.md)
- Foto reali dei prodotti oppure placeholder segnalati

## Architettura rilevante

shared/types/catalog.ts e shared/schemas/catalog.ts (Zod); frontend/app/services/catalog/{CatalogService.ts, localCatalog.ts, index.ts}. Le route ottengono i dati dal servizio tramite clientLoader, mai da liste scritte nei componenti. components/products/ contiene ProductCard, ProductGrid, ProductGallery e CategoryFilter. Lo stato dei filtri vive in URLSearchParams, così i link si possono condividere.

## Strategia di implementazione

1) Il contratto in shared nasce dallo schema di §10, con un seed provvisorio marcato come da verificare. 2) CatalogService ha un'interfaccia unica e un adapter locale: in fase 5 cambia solo l'adapter. 3) Card prodotto riusabile. 4) Pagina store con lo stato dei filtri nella query string. 5) Dettaglio prodotto con galleria e correlati. 6) Test end-to-end del percorso.

## Task della fase

| Codice | Titolo | Agente | Priorità |
|---|---|---|---|
| [TASK-013](../../tasks/TASK-013.md) | Definisci il contratto del catalogo e il seed provvisorio | Claude Code Engineer | HIGH |
| [TASK-014](../../tasks/TASK-014.md) | Crea la card prodotto senza prezzi né acquisto | Claude Frontend Engineer | HIGH |
| [TASK-015](../../tasks/TASK-015.md) | Realizza la pagina Store con categorie, filtri e ordinamento | Claude Frontend Engineer | HIGH |
| [TASK-016](../../tasks/TASK-016.md) | Realizza la pagina di dettaglio prodotto | Claude Frontend Engineer | HIGH |
| [TASK-017](../../tasks/TASK-017.md) | Verifica il percorso del catalogo con test end-to-end | LFM Test Engineer | MEDIUM |

## Agenti coinvolti

- Software Engineer
- Frontend Engineer
- Test Engineer
- Learning Coach

## Software necessari

- claude-code
- github

## File e contesto necessari

- `MASTER_PROMPT.md`
- `docs/IMPLEMENTATION_PLAN.md`
- i documenti delle task elencate sopra
- `references/` se la fase riguarda UI o grafica

## Debiti aperti

Nessuno registrato alla generazione.

## Rischi

- Le reference dello store mostrano prezzi, pulsanti «Aggiungi» e un filtro di disponibilità: vanno esclusi, il MASTER_PROMPT lo vieta
- Il seed provvisorio può essere scambiato per dati reali: ogni prodotto non verificato va marcato
- Le descrizioni delle reference contengono frasi salutistiche (es. la pappa reale «rinomata per le sue proprietà»): non vanno riportate senza documentazione

## Criteri di completamento

- /store filtra per categoria con ?categoria= e per formato, e ordina i risultati
- Nessun prezzo, carrello o pulsante d'acquisto né nel codice né nell'interfaccia
- /prodotti/:slug mostra solo i campi disponibili e fino a quattro prodotti correlati
- La CTA porta a /contattaci?prodotto=<slug>
- Nessun elenco di prodotti scritto nei componenti React

## Criteri di review

- Coerenza con references/images/negozio-monte-miele_-tesori-dell-alveare.png, al netto di prezzi e carrello
- Hover delle card leggero: zoom della foto, sollevamento di pochi pixel, comparsa morbida del pulsante
- Stati vuoto, caricamento ed errore presenti
- Filtri e galleria utilizzabili da tastiera

## Prompt della fase

> Esegui la PHASE 3 seguendo `docs/phases/PHASE_3.md`: una task alla volta, nell'ordine, ciascuna col proprio file.
