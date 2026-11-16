# TASK-022 — Realizza il modulo Contattaci

> Progetto: Landing Page Monte Miele · Fase 4 — About e Contattaci · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Frontend Engineer (Frontend Engineer)

## Obiettivo

/contattaci con il modulo di §9, il selettore prodotto condizionale collegato al catalogo, la preselezione da ?prodotto=, una colonna laterale con informazioni verificate e gli stati dell'invio.

## Perché esiste

«Richiedi informazioni» è l'azione commerciale principale del sito.

## Scope

Include: campi; radio delle tipologie; select dei prodotti dal CatalogService; contatore 0/500; consenso con link a /privacy; honeypot nascosto; validazione con lo schema condiviso; stati di caricamento, successo ed errore; colonna con Dove siamo, Instagram e orari solo se forniti. Esclude la persistenza.

## Come implementarla

1) clientLoader che carica i prodotti e legge ?prodotto=. 2) Con un ?prodotto= valido, tipologia informazioni_prodotto e prodotto già selezionati. 3) Validazione con lo schema condiviso; errori collegati con aria-describedby e focus sul primo errore. 4) Invio con fetch a /api/contact-requests, pulsante disabilitato durante l'invio, conferma con role=status. 5) Messaggi distinti per il 429 e per gli errori di rete. 6) Layout ispirato alle reference, senza i contatti inventati che mostrano.

## Software e tool necessari

- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_4.md`
- frontend/app/routes/contact.tsx
- frontend/app/pages/Contact/ContactForm.tsx
- frontend/app/pages/Contact/ContactAside.tsx
- frontend/app/services/contactApi.ts
- shared/schemas/contactRequest.ts
- references/images/apicoltura-monte-miele_-sito-completo.png

## Cartelle rilevanti

- frontend/app/pages/Contact/

## Contratti, API, schema interessati

- POST /api/contact-requests con ContactRequestInput

## Grafi rilevanti

—

## Test richiesti

- Con ?prodotto=miele-di-castagno il prodotto è preselezionato
- Il selettore prodotto compare solo con «Informazioni su un prodotto»
- Un invio senza consenso mostra l'errore e non chiama l'API
- Con l'API simulata (MSW) si vedono gli stati di caricamento, successo ed errore
- Il contatore segue la lunghezza del messaggio fino a 500

## Debiti collegati

—

## Criteri di completamento

- Modulo completo, accessibile e funzionante su mobile
- Nessun dato di contatto inventato nella colonna laterale

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-022-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-022 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-022-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-022.esito.md`](TASK-022.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

