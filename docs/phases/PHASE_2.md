# PHASE 2 — Homepage immersiva

> Progetto: Landing Page Monte Miele · Stato: PLANNED · Approvazione: PENDING

## Obiettivo

La homepage racconta guidata dallo scroll la sequenza di §5 del MASTER_PROMPT: hero con l'ape che attraversa lo schermo e si posa sul fiore, passaggio al favo con il miele che cola, vasetti che entrano e si compongono, poi categorie, territorio e chiusura. Su mobile e con reduced motion ha versioni ridotte.

## Scope

Include: storyboard; inventario di asset e contenuti; asset animati prodotti in Blender; le sei sezioni della homepage con dati e asset locali. Esclude Supabase, vietato in questa fase dal MASTER_PROMPT, lo store e le altre pagine.

## Prerequisiti

- Fase 1 completata
- Foto reali e nitide delle etichette e del logo per le texture dei vasetti
- Blender installato per il 3D Artist
- Panorama verificato di Liberi (CE) oppure la decisione di usare un placeholder segnalato

## Architettura rilevante

routes/home.tsx compone le sezioni di app/pages/Home/sections. Ogni scena usa useGSAP con un contesto e gsap.matchMedia per i tre livelli di movimento. Le sequenze passano da ImageSequenceCanvas. I testi editoriali stanno in content/home.ts tipizzato; gli asset in public/sequences/<scena>/<livello>/ e public/images/home/. Nessun effetto complesso realizzato solo in CSS.

## Strategia di implementazione

1) Storyboard: per ogni sezione intervalli di scroll, pin, timeline, asset e fallback. 2) In parallelo il 3D Artist produce in Blender ape, favo e vasetti come sequenze WebP/AVIF con trasparenza, in versione desktop e mobile, con poster. 3) Finché gli asset non arrivano, le scene usano placeholder segnalati con lo stesso manifest. 4) Si costruiscono hero e lavoro delle api come un'unica scena continua, poi la presentazione dei prodotti, poi categorie, territorio e chiusura.

## Task della fase

| Codice | Titolo | Agente | Priorità |
|---|---|---|---|
| [TASK-007](../../tasks/TASK-007.md) | Scrivi lo storyboard della homepage e l'inventario di asset e contenuti | Claude UI/UX Designer | HIGH |
| [TASK-008](../../tasks/TASK-008.md) | Produci in Blender le sequenze dell'ape | 3D Artist | HIGH |
| [TASK-009](../../tasks/TASK-009.md) | Produci in Blender il favo con il miele e i vasetti con le etichette reali | 3D Artist | HIGH |
| [TASK-010](../../tasks/TASK-010.md) | Realizza l'hero cinematografico e il passaggio a «Il lavoro delle api» | Claude Frontend Engineer | HIGH |
| [TASK-011](../../tasks/TASK-011.md) | Realizza la presentazione dei prodotti guidata dallo scroll | Claude Frontend Engineer | HIGH |
| [TASK-012](../../tasks/TASK-012.md) | Realizza categorie, territorio e chiusura della homepage | Claude Frontend Engineer | MEDIUM |

## Agenti coinvolti

- UI/UX Designer
- 3D Artist
- Frontend Engineer
- Test Engineer
- Learning Coach

## Software necessari

- claude-code
- blender
- google-drive

## File e contesto necessari

- `MASTER_PROMPT.md`
- `docs/IMPLEMENTATION_PLAN.md`
- i documenti delle task elencate sopra
- `references/` se la fase riguarda UI o grafica

## Debiti aperti

Nessuno registrato alla generazione.

## Rischi

- Peso delle sequenze: centinaia di frame con trasparenza possono superare decine di MB; servono budget per scena e risoluzioni ridotte su mobile
- Realismo dell'ape: un modello o un'animazione poco curati rovinano l'effetto più di un'immagine ferma
- Le etichette dei vasetti devono riprodurre quelle reali: senza foto nitide i render non si possono finalizzare
- Le reference sono generate con AI: il panorama di Liberi che mostrano non è una foto reale e non va usato come tale
- Scroll-jacking: pin troppo lunghi rendono la pagina faticosa; la storyboard fissa una lunghezza massima per scena

## Criteri di completamento

- Le sei sezioni di §5 sono presenti con i testi del MASTER_PROMPT
- L'hero esegue i sei passi di §5.1 e lo scroll prosegue nei passi di §5.2 senza tagli bruschi
- Su mobile e con reduced motion la pagina resta completa e leggibile
- docs/ASSETS.md elenca ogni asset con stato reale, placeholder o da produrre

## Criteri di review

- Confronto affiancato con references/images/apicoltura-monte-miele_-natura-e-tradizione.png
- Nessun effetto dichiarato e non realmente operativo
- Animazioni solo su transform e opacity, verificate nel pannello Performance senza layout shift
- Placeholder chiaramente riconoscibili dove mancano asset reali

## Prompt della fase

> Esegui la PHASE 2 seguendo `docs/phases/PHASE_2.md`: una task alla volta, nell'ordine, ciascuna col proprio file.
