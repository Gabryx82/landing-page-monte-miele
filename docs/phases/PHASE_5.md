# PHASE 5 — Supabase: database, storage e integrazione

> Progetto: Landing Page Monte Miele · Stato: PLANNED · Approvazione: PENDING

## Obiettivo

Catalogo e richieste vivono su Supabase, con migrazioni versionate, RLS attiva e immagini su Storage. Il frontend legge il catalogo dalle API del backend; le richieste di contatto vengono salvate e, quando il servizio è configurato, notificate via email.

## Scope

Include: schema di §10; vincoli; indici; RLS; bucket delle immagini; seed; API del catalogo; adapter HTTP del frontend; repository Supabase per le richieste; notifica email facoltativa. Esclude il pannello amministrativo (i prodotti si gestiscono da Supabase Dashboard) e l'autenticazione degli utenti.

## Prerequisiti

- Fase 4 completata
- Progetti Supabase di sviluppo e di produzione creati
- Docker Desktop per il database locale
- Foto reali dei prodotti, o placeholder, pronte per lo Storage

## Architettura rilevante

Database: categories 1–N products 1–N product_images; contact_requests con product_id facoltativo. Il backend usa due client, entrambi solo lato server: anon per leggere il catalogo, soggetto a RLS, e service role solo per inserire le richieste. Le immagini sono URL pubblici del bucket product-images. Le risposte del catalogo hanno un Cache-Control con s-maxage per la CDN di Vercel. Nessuna chiave Supabase nel bundle del frontend.

## Strategia di implementazione

1) Migrazioni con la Supabase CLI su un database locale in Docker. 2) RLS e test delle policy. 3) Storage e seed. 4) Endpoint del catalogo nel backend. 5) Adapter HTTP nel frontend al posto di quello locale. 6) Repository Supabase con la service role solo lato server, più la notifica email.

## Task della fase

| Codice | Titolo | Agente | Priorità |
|---|---|---|---|
| [TASK-024](../../tasks/TASK-024.md) | Crea lo schema del database con le migrazioni | Claude Database Engineer | HIGH |
| [TASK-025](../../tasks/TASK-025.md) | Abilita la Row Level Security e verifica le policy | Claude Database Engineer | HIGH |
| [TASK-026](../../tasks/TASK-026.md) | Configura lo Storage delle immagini e carica il seed | Claude Database Engineer | MEDIUM |
| [TASK-027](../../tasks/TASK-027.md) | Esponi il catalogo con le API del backend | Claude Backend Engineer | HIGH |
| [TASK-028](../../tasks/TASK-028.md) | Collega il frontend al catalogo remoto | Claude Frontend Engineer | HIGH |
| [TASK-029](../../tasks/TASK-029.md) | Salva le richieste di contatto e invia la notifica email | Claude Backend Engineer | HIGH |

## Agenti coinvolti

- Database Engineer
- Backend Engineer
- Frontend Engineer
- Test Engineer
- Learning Coach

## Software necessari

- supabase
- docker-desktop
- claude-code
- postman
- vercel

## File e contesto necessari

- `MASTER_PROMPT.md`
- `docs/IMPLEMENTATION_PLAN.md`
- i documenti delle task elencate sopra
- `references/` se la fase riguarda UI o grafica

## Debiti aperti

Nessuno registrato alla generazione.

## Rischi

- Una policy RLS sbagliata espone le richieste di contatto: servono test con il ruolo anon
- La service role key nel frontend comprometterebbe il database: va solo fra le variabili server di Vercel
- Il seed provvisorio in produzione: i prodotti non verificati vanno inseriti con active = false
- Le pagine prodotto sono prerenderizzate, quindi un catalogo modificato da Dashboard richiede un nuovo deploy (deploy hook) oppure il fallback lato client

## Criteri di completamento

- supabase db reset applica tutte le migrazioni senza errori
- Il ruolo anon legge solo categorie, prodotti attivi e le loro immagini, e non legge né scrive contact_requests
- Store e dettaglio funzionano con i dati di Supabase senza modifiche ai componenti
- Una richiesta valida viene salvata in contact_requests con status nuova
- La notifica email parte solo se le variabili del servizio sono configurate

## Criteri di review

- Migrazioni additive e documentate
- Vincoli e indici coerenti con le query reali
- Nessun segreto nel repository o nel bundle (ricerca nell'output della build)
- Contratto delle API invariato rispetto alla fase 3

## Prompt della fase

> Esegui la PHASE 5 seguendo `docs/phases/PHASE_5.md`: una task alla volta, nell'ordine, ciascuna col proprio file.
