# TASK-035 — Pubblica in produzione e scrivi la documentazione

> Progetto: Landing Page Monte Miele · Fase 6 — Ottimizzazione e rilascio · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Code Engineer (Software Engineer) · Sottoagenti: Tech Writer

## Obiettivo

Il sito in produzione su Vercel collegato al Supabase di produzione, con README, runbook e una guida per gestire i prodotti.

## Perché esiste

L'obiettivo finale è un sito vetrina online che il titolare possa aggiornare da Supabase Dashboard.

## Scope

Include migrazioni di produzione, variabili d'ambiente, dominio, contenuti validati, smoke test e documentazione. Esclude nuove funzionalità.

## Come implementarla

1) Migrazioni applicate al progetto Supabase di produzione con supabase db push. 2) Variabili d'ambiente di produzione su Vercel, con le chiavi solo lato server. 3) Dominio e HTTPS. 4) Testi legali e dati aziendali validati al posto dei segnaposto, oppure conferma esplicita dell'operatore sui placeholder. 5) Smoke test sul dominio: route, modulo, email. 6) README, docs/runbook.md (deploy, rollback, deploy hook) e docs/gestione-prodotti.md per il titolare.

## Software e tool necessari

- vercel
- supabase
- github
- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_6.md`
- README.md
- docs/runbook.md
- docs/gestione-prodotti.md
- vercel.json
- .env.example

## Cartelle rilevanti

- docs/

## Contratti, API, schema interessati

- Variabili d'ambiente documentate in .env.example

## Grafi rilevanti

—

## Test richiesti

- Smoke test Playwright sull'URL di produzione
- Una richiesta di prova arriva in contact_requests e, se configurata, all'email ufficiale

## Debiti collegati

—

## Criteri di completamento

- Sito raggiungibile sul dominio definitivo
- Runbook e guida ai prodotti scritti
- Nessun placeholder rimasto senza il consenso dell'operatore

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-035-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-035 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-035-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-035.esito.md`](TASK-035.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

