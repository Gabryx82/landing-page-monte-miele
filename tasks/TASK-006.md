# TASK-006 — Prepara l'infrastruttura comune delle animazioni

> Progetto: Landing Page Monte Miele · Fase 1 — Fondamenta · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Frontend Engineer (Frontend Engineer)

## Obiettivo

GSAP con ScrollTrigger e Motion configurati una sola volta; un hook che sceglie il livello di animazione; un componente canvas che riproduce sequenze di immagini legate allo scroll.

## Perché esiste

La homepage si regge su scene guidate dallo scroll con sequenze prodotte in Blender. Prima di costruire le sezioni serve un motore unico, testato e rispettoso di prefers-reduced-motion.

## Scope

Include: registrazione dei plugin GSAP solo lato client; hook useMotionTier, che restituisce full su desktop, reduced su mobile o hardware debole, static con prefers-reduced-motion; ImageSequenceCanvas con precaricamento progressivo, disegno del frame in base al progresso, devicePixelRatio e poster di fallback; ParallaxLayer basato su transform. Esclude le scene della homepage.

## Come implementarla

1) lib/gsap.ts registra ScrollTrigger solo nel browser. 2) useMotionTier usa matchMedia. 3) MotionConfig reducedMotion='user' nel root. 4) ImageSequenceCanvas riceve un manifest { baseUrl, frameCount, pad, ext }, precarica i frame per priorità e disegna quello che corrisponde al progresso 0–1. 5) ParallaxLayer usa ScrollTrigger con scrub e anima solo transform e opacity. 6) Una sequenza di prova con frame segnaposto numerati.

## Software e tool necessari

- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_1.md`
- frontend/app/lib/gsap.ts
- frontend/app/hooks/useMotionTier.ts
- frontend/app/components/animations/ImageSequenceCanvas.tsx
- frontend/app/components/animations/ParallaxLayer.tsx
- frontend/app/components/animations/sequence.ts

## Cartelle rilevanti

- frontend/app/components/animations/
- frontend/public/sequences/

## Contratti, API, schema interessati

- SequenceManifest { id, baseUrl, frameCount, pad, ext: 'webp' | 'avif', width, height, poster }
- frameForProgress(progress, frameCount): number

## Grafi rilevanti

—

## Test richiesti

- frameForProgress restituisce 0 a progresso 0, l'ultimo frame a 1, e resta nei limiti con valori fuori intervallo
- Con prefers-reduced-motion useMotionTier restituisce static e ImageSequenceCanvas mostra solo il poster
- La build con prerender non accede a window fuori dagli effetti

## Debiti collegati

—

## Criteri di completamento

- La sequenza di prova scorre fluida legata allo scroll
- Con reduced motion non parte nessuna animazione legata allo scroll
- Test verdi

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-006-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-006 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-006-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-006.esito.md`](TASK-006.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

