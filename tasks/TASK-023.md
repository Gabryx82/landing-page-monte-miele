# TASK-023 — Implementa l'endpoint POST /api/contact-requests

> Progetto: Landing Page Monte Miele · Fase 4 — About e Contattaci · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Backend Engineer (Backend Engineer)

## Obiettivo

Un endpoint Express che rivalida con lo schema condiviso, scarta lo spam, limita la frequenza e passa la richiesta a un servizio con repository e notifier astratti.

## Perché esiste

§9 chiede una seconda validazione sul server, protezione antispam, rate limiting e validazione degli input.

## Scope

Include route, controller, servizio, middleware e porte astratte. Esclude il salvataggio reale e l'email (fase 5).

## Come implementarla

1) Route e controller sottili, logica in contactRequestService. 2) Validazione con lo schema condiviso; 400 con gli errori per campo. 3) Se l'honeypot è compilato o la compilazione è durata meno di 3 secondi, risposta 201 fittizia senza salvataggio. 4) express-rate-limit per IP (es. 5 richieste ogni 15 minuti) con 429 e header Retry-After. 5) Normalizzazione degli input (trim, lunghezze), senza interpretare HTML. 6) ContactRequestRepository in memoria e Notifier no-op, da sostituire in fase 5. 7) Log senza dati personali.

## Software e tool necessari

- claude-code
- postman

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_4.md`
- backend/src/routes/contactRequests.ts
- backend/src/controllers/contactRequestController.ts
- backend/src/services/contactRequestService.ts
- backend/src/services/ports.ts
- backend/src/middleware/rateLimit.ts
- backend/src/middleware/antiSpam.ts

## Cartelle rilevanti

- backend/src/

## Contratti, API, schema interessati

- POST /api/contact-requests → 201 { id } | 400 { error: { code: 'VALIDATION', fields } } | 429 { error: { code: 'RATE_LIMITED' } }
- ContactRequestRepository.save(input): Promise<{ id }>
- Notifier.notify(request): Promise<void>

## Grafi rilevanti

—

## Test richiesti

- Supertest: 201 con dati validi e repository chiamato una volta
- 400 con requestType informazioni_prodotto senza prodotto
- Honeypot compilato: 201 e repository non chiamato
- La sesta richiesta nella finestra riceve 429
- Un body oltre il limite di dimensione viene rifiutato

## Debiti collegati

—

## Criteri di completamento

- Endpoint testato con Supertest e con Postman sul deploy di anteprima
- Nessun dato personale nei log

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-023-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-023 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-023-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-023.esito.md`](TASK-023.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

