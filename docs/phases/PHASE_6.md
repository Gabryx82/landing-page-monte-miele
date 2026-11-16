# PHASE 6 — Ottimizzazione e rilascio

> Progetto: Landing Page Monte Miele · Stato: PLANNED · Approvazione: PENDING

## Obiettivo

Il sito rispetta i budget di performance e accessibilità su mobile e desktop, ha un SEO tecnico completo con pagine prerenderizzate anche per i prodotti, è coperto da test end-to-end ed è in produzione su Vercel con il Supabase di produzione.

## Scope

Include: ottimizzazione di immagini e sequenze; rifinitura del responsive e delle animazioni su mobile; SEO (meta, Open Graph, sitemap, robots, dati strutturati, prerender dei prodotti); audit di accessibilità; e2e e controlli di qualità in CI; rilascio e documentazione. Esclude nuove funzionalità.

## Prerequisiti

- Fasi 1–5 completate
- Dominio definitivo deciso
- Testi legali e dati aziendali validati dal titolare, oppure placeholder accettati dall'operatore
- Progetto Supabase di produzione

## Architettura rilevante

Pipeline delle immagini con sharp o vite-imagetools (AVIF, WebP, srcset). Prerender delle pagine prodotto con React Router, leggendo gli slug a build time. sitemap.xml e robots.txt generati in build. JSON-LD solo con dati verificati. GitHub Actions per lint, test, e2e e Lighthouse CI. Deploy hook Vercel per rigenerare il sito dopo modifiche al catalogo.

## Strategia di implementazione

1) Prima gli asset, che sono la voce di peso maggiore. 2) Poi mobile e animazioni. 3) SEO e prerender dei prodotti. 4) Accessibilità. 5) CI con e2e e Lighthouse. 6) Produzione e documentazione.

## Task della fase

| Codice | Titolo | Agente | Priorità |
|---|---|---|---|
| [TASK-030](../../tasks/TASK-030.md) | Ottimizza immagini, sequenze e caricamento degli asset | Claude Code Engineer | HIGH |
| [TASK-031](../../tasks/TASK-031.md) | Rifinisci il responsive e le animazioni su mobile | Claude Frontend Engineer | HIGH |
| [TASK-032](../../tasks/TASK-032.md) | Completa il SEO tecnico e il prerender delle pagine prodotto | Claude Frontend Engineer | HIGH |
| [TASK-033](../../tasks/TASK-033.md) | Esegui l'audit di accessibilità e correggi | LFM Test Engineer | HIGH |
| [TASK-034](../../tasks/TASK-034.md) | Automatizza i controlli di qualità in CI | LFM Test Engineer | MEDIUM |
| [TASK-035](../../tasks/TASK-035.md) | Pubblica in produzione e scrivi la documentazione | Claude Code Engineer | HIGH |

## Agenti coinvolti

- Frontend Engineer
- Software Engineer
- Test Engineer
- Tech Writer
- Learning Coach

## Software necessari

- claude-code
- vercel
- supabase
- github

## File e contesto necessari

- `MASTER_PROMPT.md`
- `docs/IMPLEMENTATION_PLAN.md`
- i documenti delle task elencate sopra
- `references/` se la fase riguarda UI o grafica

## Debiti aperti

Nessuno registrato alla generazione.

## Rischi

- Le sequenze della homepage sono la voce di peso principale: senza budget rigidi l'LCP su mobile peggiora
- Il prerender dei prodotti richiede l'accesso a Supabase durante la build
- Un JSON-LD con dati non verificati (indirizzo, orari) violerebbe il vincolo di non inventare dati
- Il contrasto degli accenti ambra sopra le fotografie

## Criteri di completamento

- Lighthouse su mobile ≥ 90 in Performance, Accessibilità, Best practices e SEO per home, store, dettaglio e contattaci
- Core Web Vitals in laboratorio su mobile simulato: LCP < 2,5 s, CLS < 0,1, INP < 200 ms
- Sitemap con tutte le pagine pubbliche e i prodotti attivi; robots.txt valido
- Suite e2e verde in CI
- Sito in produzione su Vercel, con README e runbook aggiornati

## Criteri di review

- Confronto finale con le reference su desktop a 1440 px e mobile a 390 px
- Navigazione completa da tastiera e con screen reader sui percorsi principali
- Nessun dato inventato in pagine, metadati e dati strutturati
- Nessun segreto nel bundle

## Prompt della fase

> Esegui la PHASE 6 seguendo `docs/phases/PHASE_6.md`: una task alla volta, nell'ordine, ciascuna col proprio file.
