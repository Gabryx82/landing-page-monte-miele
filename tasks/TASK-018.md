# TASK-018 — Realizza la pagina About

> Progetto: Landing Page Monte Miele · Fase 4 — About e Contattaci · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Frontend Engineer (Frontend Engineer)

## Obiettivo

/about con l'hero «La nostra storia» e il suo sottotitolo, «La nostra passione», «Il territorio» con un panorama autentico e «Dove siamo» con il comune, la mappa e i soli contatti verificati.

## Perché esiste

§8 chiede di raccontare l'identità di Monte Miele senza inventare informazioni.

## Scope

Include: le sezioni di §8 tranne la timeline; PlaceholderNotice dove mancano i testi ufficiali; mappa OpenStreetMap o Google caricata solo al clic, con un link esterno sempre disponibile. Esclude informazioni storiche, certificazioni o indirizzi non forniti.

## Come implementarla

1) Testi in content/about.ts; ogni testo provvisorio ha il flag provisional e il componente lo segnala. 2) Hero con una foto ambientale, o un placeholder se manca. 3) Passione con i quattro temi di §8 (origine, filosofia produttiva, cura degli alveari, rapporto con il territorio) e i valori nello stile della reference. 4) Territorio con il panorama e ParallaxLayer. 5) Dove siamo: Liberi (CE), MapEmbed con consenso al clic e link «Apri nella mappa». 6) Meta della pagina.

## Software e tool necessari

- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_4.md`
- frontend/app/routes/about.tsx
- frontend/app/pages/About/*.tsx
- frontend/app/content/about.ts
- frontend/app/components/ui/MapEmbed.tsx
- references/images/apicoltura-monte-miele_-passione-e-territorio.png
- references/images/radici-nel-miele-di-liberi.png

## Cartelle rilevanti

- frontend/app/pages/About/

## Contratti, API, schema interessati

- Testo di contenuto: { text, provisional: boolean }

## Grafi rilevanti

—

## Test richiesti

- I testi provvisori mostrano l'etichetta «Testo provvisorio»
- MapEmbed non carica l'iframe finché l'utente non clicca
- Indirizzo e telefono non compaiono se mancano in siteConfig

## Debiti collegati

—

## Criteri di completamento

- Le sezioni di §8 sono presenti, tranne la timeline
- Nessun dato inventato

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-018-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-018 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-018-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-018.esito.md`](TASK-018.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

