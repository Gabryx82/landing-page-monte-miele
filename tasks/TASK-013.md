# TASK-013 — Definisci il contratto del catalogo e il seed provvisorio

> Progetto: Landing Page Monte Miele · Fase 3 — Store e dettaglio prodotto · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Code Engineer (Software Engineer)

## Obiettivo

Tipi e schemi Zod condivisi per Category, Product e ProductImage come in §10; l'interfaccia CatalogService; un adapter locale; un seed provvisorio con gli otto prodotti delle reference marcati come da verificare.

## Perché esiste

Il MASTER_PROMPT vieta di scrivere i prodotti nei componenti e porta Supabase solo in fase 5: con un'interfaccia unica, la fase 5 cambia soltanto l'adapter.

## Scope

Include: tipi; schemi; interfaccia; adapter locale; seed in shared/data con le categorie miele, creme e pappa-reale e i prodotti Miele di Millefiori, Miele di Castagno, Miele di Acacia, Miele di Sulla, Crema Nocciole e Miele, Crema Pistacchio e Miele, Crema Mandorle e Miele, Pappa reale, tutti con il marcatore _verificato: false. Esclude i prezzi e qualsiasi campo commerciale.

## Come implementarla

1) shared/types/catalog.ts con i campi di §10 in camelCase. 2) shared/schemas/catalog.ts con Zod e tipi inferiti. 3) Interfaccia: listCategories(), listProducts({ categoria?, formato?, ordine? }), getProductBySlug(slug), listRelated(slug, limit = 4). 4) Adapter locale che restituisce solo prodotti con active = true. 5) Seed con descrizioni neutre, senza proprietà salutistiche, nutrizionali o mediche. 6) Elenco di cosa verificare con il cliente in docs/ASSETS.md.

## Software e tool necessari

- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_3.md`
- shared/types/catalog.ts
- shared/schemas/catalog.ts
- shared/data/catalog.seed.json
- frontend/app/services/catalog/CatalogService.ts
- frontend/app/services/catalog/localCatalog.ts
- frontend/app/services/catalog/index.ts
- docs/ASSETS.md

## Cartelle rilevanti

- shared/types/
- shared/schemas/
- shared/data/
- frontend/app/services/catalog/

## Contratti, API, schema interessati

- CatalogService: listCategories, listProducts(filters), getProductBySlug, listRelated
- Ordinamento: in-evidenza | nome-asc | nome-desc

## Grafi rilevanti

—

## Test richiesti

- Il seed rispetta lo schema Zod
- listProducts esclude i prodotti non attivi e filtra per categoria e formato
- listRelated restituisce al massimo 4 prodotti della stessa categoria, escluso il prodotto corrente
- getProductBySlug restituisce null per uno slug inesistente o un prodotto inattivo

## Debiti collegati

—

## Criteri di completamento

- Contratto e adapter locale testati
- Seed marcato come provvisorio con l'elenco delle verifiche da fare

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-013-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-013 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-013-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-013.esito.md`](TASK-013.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

