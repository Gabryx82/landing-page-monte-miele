# TASK-016 — Realizza la pagina di dettaglio prodotto

> Progetto: Landing Page Monte Miele · Fase 3 — Store e dettaglio prodotto · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Frontend Engineer (Frontend Engineer)

## Obiettivo

/prodotti/:slug con galleria e zoom a sinistra, informazioni a destra, la CTA «Richiedi informazioni su questo prodotto» e la sezione «Potrebbero interessarti anche».

## Perché esiste

§7 chiede una pagina editoriale che trasformi l'interesse in una richiesta di contatto sul prodotto.

## Scope

Include: galleria con miniature; zoom accessibile, anche da tastiera, che si chiude con Esc; nome, categoria, descrizione, formato, ingredienti, provenienza e conservazione mostrati solo se presenti; fino a quattro correlati; pagina 404 per slug inesistenti; titolo e meta del prodotto. Esclude prezzi e dati nutrizionali o salutistici.

## Come implementarla

1) clientLoader con getProductBySlug e una risposta 404 se il prodotto manca. 2) ProductGallery con immagine principale, miniature e zoom in un dialog. 3) Lista delle caratteristiche che salta i campi vuoti. 4) CTA verso /contattaci?prodotto=:slug. 5) Correlati con ProductCard. 6) Export meta con titolo e descrizione del prodotto.

## Software e tool necessari

- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_3.md`
- frontend/app/routes/product.tsx
- frontend/app/pages/ProductDetail/ProductInfo.tsx
- frontend/app/components/products/ProductGallery.tsx
- frontend/app/components/products/RelatedProducts.tsx

## Cartelle rilevanti

- frontend/app/pages/ProductDetail/
- frontend/app/components/products/

## Contratti, API, schema interessati

- CatalogService.getProductBySlug e listRelated

## Grafi rilevanti

—

## Test richiesti

- Un prodotto senza ingredienti non mostra la voce Ingredienti
- Uno slug inesistente mostra la 404
- La CTA ha href /contattaci?prodotto=<slug>
- Lo zoom si apre e si chiude da tastiera e restituisce il focus
- I correlati sono al massimo quattro, tutti della stessa categoria

## Debiti collegati

—

## Criteri di completamento

- Layout a due colonne su desktop e una colonna su mobile
- Solo informazioni presenti nei dati, nessun contenuto generato

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-016-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-016 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-016-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-016.esito.md`](TASK-016.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

