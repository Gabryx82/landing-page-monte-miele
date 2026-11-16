# PHASE 1 — Fondamenta

> Progetto: Landing Page Monte Miele · Stato: PLANNED · Approvazione: PENDING

## Obiettivo

Il monorepo si installa e compila. Il frontend mostra tutte le route del MASTER_PROMPT con layout globale e design system. Il backend risponde a /api/health in locale e su un deploy di anteprima Vercel. Le animazioni hanno un'infrastruttura comune che rispetta prefers-reduced-motion.

## Scope

Include: struttura frontend/backend/shared/supabase; TypeScript strict, lint e test; routing con pagine segnaposto; token e componenti base; navbar e footer; transizioni fra le pagine; Express con healthcheck; deploy di anteprima su Vercel; infrastruttura GSAP e Motion. Esclude: contenuti delle pagine, asset animati e Supabase.

## Prerequisiti

- Node.js LTS e npm installati
- Account GitHub e Vercel
- Logo originale Apicoltura Monte Miele in alta risoluzione, fornito dall'operatore
- MASTER_PROMPT.md e reference in references/images letti

## Architettura rilevante

frontend/ contiene l'app React Router: app/routes, app/components/{layout,ui,animations,products}, app/hooks, app/services, app/content, app/styles. backend/src contiene app.ts, server.ts, routes, controllers, services, middleware, validation e config. shared/ ospita i tipi e gli schemi Zod. api/index.ts importa l'app Express come funzione serverless Vercel. vercel.json definisce la build del frontend, l'output statico e il rewrite /api/(.*). In sviluppo Vite inoltra /api a Express su localhost:3001. Nessuna chiave Supabase nel frontend.

## Strategia di implementazione

1) Monorepo con npm workspaces, TypeScript strict, ESLint, Prettier e Vitest. 2) Frontend Vite + React Router in framework mode con prerender e le route del MASTER_PROMPT, più l'ADR sul prerendering. 3) Design system ricavato da palette e reference: token Tailwind, font in self-hosting, logo chiaro e scuro, componenti base. 4) Layout globale con navbar, footer e transizioni Motion. 5) Express esportato come app: montato in api/ per Vercel e avviato in locale dietro il proxy di Vite. 6) Infrastruttura delle animazioni: plugin GSAP, livelli di movimento e canvas per le sequenze di immagini.

## Task della fase

| Codice | Titolo | Agente | Priorità |
|---|---|---|---|
| [TASK-001](../../tasks/TASK-001.md) | Inizializza il monorepo con i workspace frontend, backend e shared | Claude Code Engineer | HIGH |
| [TASK-002](../../tasks/TASK-002.md) | Configura il frontend con Vite, Tailwind e le route di React Router | Claude Frontend Engineer | HIGH |
| [TASK-003](../../tasks/TASK-003.md) | Definisci il design system a partire dalle reference | Claude UI/UX Designer | HIGH |
| [TASK-004](../../tasks/TASK-004.md) | Costruisci il layout globale con navbar, footer e transizioni | Claude Frontend Engineer | HIGH |
| [TASK-005](../../tasks/TASK-005.md) | Predisponi il backend Express e il deploy di anteprima su Vercel | Claude Backend Engineer | HIGH |
| [TASK-006](../../tasks/TASK-006.md) | Prepara l'infrastruttura comune delle animazioni | Claude Frontend Engineer | HIGH |

## Agenti coinvolti

- Software Engineer
- Frontend Engineer
- UI/UX Designer
- Backend Engineer
- Learning Coach

## Software necessari

- claude-code
- github
- vercel
- powershell

## File e contesto necessari

- `MASTER_PROMPT.md`
- `docs/IMPLEMENTATION_PLAN.md`
- i documenti delle task elencate sopra
- `references/` se la fase riguarda UI o grafica

## Debiti aperti

Nessuno registrato alla generazione.

## Rischi

- Express su Vercel insieme a un frontend prerenderizzato: la struttura api/ va verificata subito con un deploy di anteprima, non alla fine
- Prerender e GSAP: ogni accesso a window deve stare in effetti client (useGSAP/useEffect), altrimenti la build fallisce
- Contrasto: l'ambra #C98A12 sul crema #F8F3E7 vale circa 2,7:1 e il bianco sull'ambra circa 2,9:1, sotto i minimi WCAG; servono varianti più scure per il testo
- Il logo esiste solo come foto o immagine: la versione vettoriale va ricalcata senza alterarne il disegno

## Criteri di completamento

- npm install e npm run build passano dalla radice
- Tutte le route del MASTER_PROMPT rispondono con layout, navbar e footer
- GET /api/health risponde 200 in locale e sul deploy di anteprima Vercel
- Lint e test verdi
- ADR sul prerendering e sulla struttura di deploy scritti in docs/adr/

## Criteri di review

- Navbar e footer coerenti con le reference: logo a sinistra, link al centro con sottolineatura attiva, pill Liberi (CE)
- Nessuna chiave o segreto nel repository; .env.example completo
- Navigazione da tastiera e focus visibile su navbar e menu mobile
- Con prefers-reduced-motion attivo le transizioni si riducono

## Prompt della fase

> Esegui la PHASE 1 seguendo `docs/phases/PHASE_1.md`: una task alla volta, nell'ordine, ciascuna col proprio file.
