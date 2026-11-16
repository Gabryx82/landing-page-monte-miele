# PHASE 4 — About e Contattaci

> Progetto: Landing Page Monte Miele · Stato: PLANNED · Approvazione: PENDING

## Obiettivo

La pagina About racconta storia, filiera, territorio e posizione, con testi provvisori segnalati dove mancano contenuti ufficiali. Il modulo Contattaci valida i dati e preseleziona il prodotto quando si arriva dal dettaglio. La richiesta va a un endpoint Express che la rivalida, la protegge da spam e abusi e risponde con esiti chiari.

## Scope

Include: About completa; timeline animata; pagine privacy e cookie con struttura e testi provvisori; schema condiviso della richiesta; modulo; endpoint POST con validazione, antispam e rate limiting. Esclude il salvataggio su Supabase e l'invio reale delle email (fase 5).

## Prerequisiti

- Fasi 1 e 3 completate: il selettore prodotto usa il CatalogService
- Testi ufficiali dell'attività, se disponibili
- Indirizzo, email e orari solo se forniti dal cliente

## Architettura rilevante

shared/schemas/contactRequest.ts è usato sia dal frontend sia dal backend. Nel backend il percorso è routes/contactRequests.ts → controller → services/contactRequestService.ts → repository (interfaccia ContactRequestRepository: in memoria ora, Supabase in fase 5) e Notifier (no-op finché non è configurato). Middleware: rate limit, honeypot e tempo minimo di compilazione. La mappa si carica solo al clic, per non attivare cookie di terze parti.

## Strategia di implementazione

1) About con le sezioni di §8. 2) Timeline animata della filiera. 3) Pagine legali con segnaposto. 4) Schema Zod condiviso della richiesta, unica fonte di verità. 5) Modulo che usa lo schema lato client. 6) Endpoint che usa lo stesso schema lato server, con un repository astratto in memoria fino alla fase 5.

## Task della fase

| Codice | Titolo | Agente | Priorità |
|---|---|---|---|
| [TASK-018](../../tasks/TASK-018.md) | Realizza la pagina About | Claude Frontend Engineer | HIGH |
| [TASK-019](../../tasks/TASK-019.md) | Realizza la timeline animata «Dall'alveare al vasetto» | Claude Frontend Engineer | MEDIUM |
| [TASK-020](../../tasks/TASK-020.md) | Imposta le pagine Privacy e Cookie policy | Claude Tech Writer | MEDIUM |
| [TASK-021](../../tasks/TASK-021.md) | Definisci lo schema condiviso della richiesta di contatto | Claude Code Engineer | HIGH |
| [TASK-022](../../tasks/TASK-022.md) | Realizza il modulo Contattaci | Claude Frontend Engineer | HIGH |
| [TASK-023](../../tasks/TASK-023.md) | Implementa l'endpoint POST /api/contact-requests | Claude Backend Engineer | HIGH |

## Agenti coinvolti

- Frontend Engineer
- Backend Engineer
- Software Engineer
- Tech Writer
- Test Engineer
- Learning Coach

## Software necessari

- claude-code
- postman

## File e contesto necessari

- `MASTER_PROMPT.md`
- `docs/IMPLEMENTATION_PLAN.md`
- i documenti delle task elencate sopra
- `references/` se la fase riguarda UI o grafica

## Debiti aperti

Nessuno registrato alla generazione.

## Rischi

- Le reference di Contattaci mostrano un telefono e un'email (+39 333 123 4567, info@montemiele.it) che non sono dati reali: non vanno usati
- Il rate limiting in memoria non è condiviso fra le istanze serverless: in fase 5 va reso persistente o accettato come limite documentato
- Una mappa Google incorporata imposta cookie di terze parti prima del consenso
- Inventare la storia aziendale è vietato: servono testi provvisori marcati

## Criteri di completamento

- About con hero, passione, timeline dei sei passi, territorio e Dove siamo
- Il modulo rifiuta i dati non validi lato client e lato server con lo stesso schema
- Arrivando da /prodotti/:slug il prodotto è preselezionato
- POST /api/contact-requests risponde 201 ai dati validi, 400 ai dati non validi e 429 oltre il limite
- Gli stati di caricamento, successo ed errore sono visibili e annunciati agli screen reader

## Criteri di review

- Coerenza con references/images/apicoltura-monte-miele_-passione-e-territorio.png, con radici-nel-miele-di-liberi.png e con i pannelli Contattaci delle reference
- Nessun dato di contatto, storico o legale inventato
- Errori del modulo leggibili, collegati ai campi, con il focus sul primo errore

## Prompt della fase

> Esegui la PHASE 4 seguendo `docs/phases/PHASE_4.md`: una task alla volta, nell'ordine, ciascuna col proprio file.
