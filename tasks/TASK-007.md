# TASK-007 — Scrivi lo storyboard della homepage e l'inventario di asset e contenuti

> Progetto: Landing Page Monte Miele · Fase 2 — Homepage immersiva · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude UI/UX Designer (UI/UX Designer)

## Obiettivo

Un documento che per ogni sezione di §5 definisce scroll, pin, timeline, asset e fallback, e un inventario degli asset e dei contenuti reali con il loro stato.

## Perché esiste

§17 del MASTER_PROMPT chiede di progettare le sequenze e documentare gli asset necessari prima di implementare. 3D Artist e Frontend Engineer lavorano dallo stesso documento.

## Scope

Include: analisi delle reference; storyboard testuale con schizzi; specifica tecnica degli asset (frame, risoluzioni, formato, peso massimo per livello); inventario di logo, foto prodotti, foto ambientali, panorama di Liberi e dati aziendali; mappa delle reference per pagina in references/README.md. Esclude la produzione degli asset.

## Come implementarla

1) Scomponi natura-e-tradizione.png nelle sei sezioni. 2) Per ciascuna definisci intervallo di scroll, elementi fissati, passi della timeline e comportamento nei livelli full, reduced e static. 3) Elenca gli asset: ape (volo, atterraggio, idle), favo e colata di miele, vasetti Millefiori, Castagno, una crema, confezione di pappa reale, fiori in primo piano, fondale. 4) Compila l'inventario con stato e fonte (cliente, Instagram, da produrre) e segnala che prezzi, pulsante «Aggiungi», telefono ed email delle reference non sono dati reali. 5) Aggiorna references/README.md: Home in natura-e-tradizione.png, Store in negozio-monte-miele_-tesori-dell-alveare.png, About in passione-e-territorio.png e radici-nel-miele-di-liberi.png, Contattaci nei pannelli dei due compositi.

## Software e tool necessari

- claude-code
- google-drive
- drawio

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_2.md`
- references/images/apicoltura-monte-miele_-natura-e-tradizione.png
- references/images/apicoltura-monte-miele_-sito-completo.png
- references/images/apicoltura-monte-miele_-quattro-pagine-web.png
- references/README.md
- docs/home-storyboard.md
- docs/ASSETS.md

## Cartelle rilevanti

- references/images/
- docs/

## Contratti, API, schema interessati

- Voce dell'inventario: id, scena, tipo (sequenza | immagine | video), frame, risoluzione desktop/mobile, peso massimo, stato, fonte, licenza

## Grafi rilevanti

—

## Test richiesti

- Revisione dell'operatore: ogni passo di §5.1–§5.6 compare nello storyboard
- Ogni asset citato nello storyboard ha una voce in docs/ASSETS.md

## Debiti collegati

—

## Criteri di completamento

- Storyboard approvato dall'operatore
- Inventario completo con stato e fonte
- Budget di peso della homepage definito per desktop e mobile

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-007-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-007 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-007-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-007.esito.md`](TASK-007.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

