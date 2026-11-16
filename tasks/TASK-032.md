# TASK-032 — Completa il SEO tecnico e il prerender delle pagine prodotto

> Progetto: Landing Page Monte Miele · Fase 6 — Ottimizzazione e rilascio · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Frontend Engineer (Frontend Engineer)

## Obiettivo

Meta title e description per ogni pagina, Open Graph, prerender di tutte le pagine pubbliche e dei prodotti attivi, sitemap, robots e dati strutturati con soli dati verificati.

## Perché esiste

§12 chiede SEO per pagina, una strategia di prerendering, la gestione dei metadati dei prodotti e un'ottimizzazione locale senza keyword stuffing.

## Scope

Include meta, Open Graph, prerender dei prodotti, sitemap, robots, JSON-LD, canonical e deploy hook. Esclude campagne o contenuti di marketing.

## Come implementarla

1) Export meta per ogni route, con titoli centrati su Monte Miele e Liberi (CE) senza keyword stuffing. 2) Immagini Open Graph per home, store e prodotti. 3) In react-router.config.ts, prerender che legge gli slug attivi da Supabase durante la build. 4) Generazione di sitemap.xml e robots.txt in build. 5) JSON-LD: Organization o LocalBusiness con soli dati verificati, Product senza offerte né prezzi, BreadcrumbList. 6) Canonical, e noindex sulla 404. 7) Deploy hook Vercel documentato per rigenerare il sito dopo modifiche al catalogo.

## Software e tool necessari

- claude-code
- vercel
- supabase

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_6.md`
- frontend/react-router.config.ts
- frontend/app/routes/*.tsx
- frontend/app/seo/structuredData.ts
- scripts/generate-sitemap.ts
- frontend/public/robots.txt

## Cartelle rilevanti

- frontend/app/seo/
- scripts/

## Contratti, API, schema interessati

- Meta per route: title, description, og:title, og:description, og:image, canonical

## Grafi rilevanti

—

## Test richiesti

- Ogni HTML prerenderizzato contiene title, description e og:image specifici
- La sitemap contiene tutte le route pubbliche e un URL per ogni prodotto attivo
- Il JSON-LD è valido e non contiene campi non verificati

## Debiti collegati

—

## Criteri di completamento

- Tutte le pagine pubbliche e i prodotti attivi sono prerenderizzati
- Sitemap e robots pubblicati

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-032-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-032 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-032-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-032.esito.md`](TASK-032.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

