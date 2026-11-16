# IMPLEMENTATION PLAN — Landing Page Monte Miele

> Generato dal Master Orchestrator di AI Company OS (import di .aicos/plan.json) a partire da `MASTER_PROMPT.md`. Forma canonica: `.aicos/plan.json`.
> Stato: **da approvare** — nessuna task parte finché la sua fase non è approvata.
> Human-in-the-Loop: GUIDED — imparo facendo

## Sintesi

Sito vetrina, non e-commerce, per Apicoltura Monte Miele di Liberi (CE). La homepage è narrativa e guidata dallo scroll: api, favi, miele e vasetti si animano con asset prodotti in Blender. Il sito ha anche catalogo, dettaglio prodotto, About e un modulo «Richiedi informazioni». Il frontend è React + TypeScript + Vite + Tailwind, con React Router in framework mode che prerenderizza le pagine pubbliche e con GSAP ScrollTrigger e Motion per le animazioni. Il backend è Express in TypeScript, come funzione serverless su Vercel. Catalogo e richieste vivono su Supabase PostgreSQL e Storage con RLS, e nessuna chiave Supabase arriva al frontend. Le reference in references/images guidano lo stile ma sono generate con AI: prezzi, carrello, contatti, panorama ed etichette che mostrano non sono dati reali.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router v7 (framework mode, ssr: false + prerender)
- GSAP + ScrollTrigger
- Motion for React
- Lucide React
- Node.js
- Express
- Zod (schemi condivisi frontend/backend)
- Supabase PostgreSQL
- Supabase Storage
- Vercel (output statico + funzioni serverless)
- Blender (asset animati)
- Vitest + Testing Library
- Supertest
- Playwright + axe
- npm workspaces

## Fasi

| Fase | Titolo | Task | Documento |
|---|---|---|---|
| 1 | Fondamenta | 6 | `docs/phases/PHASE_1.md` |
| 2 | Homepage immersiva | 6 | `docs/phases/PHASE_2.md` |
| 3 | Store e dettaglio prodotto | 5 | `docs/phases/PHASE_3.md` |
| 4 | About e Contattaci | 6 | `docs/phases/PHASE_4.md` |
| 5 | Supabase: database, storage e integrazione | 6 | `docs/phases/PHASE_5.md` |
| 6 | Ottimizzazione e rilascio | 6 | `docs/phases/PHASE_6.md` |

## Come si procede

1. L'operatore legge questo piano e le fasi, poi le approva (o chiede modifiche) dalla console.
2. Per ogni task il Master Orchestrator propone agente, modello, software e contesto.
3. La task viene eseguita dall'AI Engine o consegnata a un agente esterno con un prompt compatto.
4. L'operatore revisiona l'esito e chiude la task.
