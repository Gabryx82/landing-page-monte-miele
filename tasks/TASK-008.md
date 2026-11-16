# TASK-008 — Produci in Blender le sequenze dell'ape

> Progetto: Landing Page Monte Miele · Fase 2 — Homepage immersiva · Stato: OPEN · Priorità: HIGH
> Agente principale: 3D Artist (3D Artist)

## Obiettivo

Sequenze di frame con trasparenza dell'ape in volo, in atterraggio sul fiore e in movimento sul fiore, in risoluzione desktop e mobile, con poster.

## Perché esiste

L'ape è il filo narrativo dell'hero e del passaggio al favo. Il MASTER_PROMPT chiede movimenti realistici, impossibili con il solo CSS.

## Scope

Include: modello dell'ape (ali, zampe, peluria con dettaglio adatto alla scala a schermo); rig; tre clip (volo, atterraggio, idle con le ali); fiore in primo piano coerente con la reference; render con canale alfa ed export WebP/AVIF. Esclude il paesaggio di sfondo, che è fotografico, e il codice.

## Come implementarla

1) Parti da un modello creato da zero o da un asset con licenza verificata, con riferimenti fotografici di Apis mellifera. 2) Rig e animazione delle ali con motion blur. 3) Camera e prospettiva allineate allo storyboard. 4) Render con trasparenza in PNG/EXR, conversione in WebP/AVIF con uno script, in due risoluzioni. 5) Un manifest JSON per ogni sequenza. 6) Il file .blend va su Git LFS o Google Drive, e assets-src/README.md indica dove si trova.

## Software e tool necessari

- blender
- google-drive

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_2.md`
- docs/home-storyboard.md
- docs/ASSETS.md
- assets-src/README.md
- frontend/public/sequences/bee-flight/
- frontend/public/sequences/bee-landing/
- frontend/public/sequences/bee-idle/

## Cartelle rilevanti

- assets-src/
- frontend/public/sequences/

## Contratti, API, schema interessati

- SequenceManifest della fase 1 per ogni sequenza

## Grafi rilevanti

—

## Test richiesti

- Script che verifica numero di frame, dimensioni e peso totale rispetto al budget dello storyboard
- Revisione visiva della sequenza in ImageSequenceCanvas sul fondale della reference

## Debiti collegati

—

## Criteri di completamento

- Tre sequenze con manifest e poster in due risoluzioni
- Peso entro il budget
- Licenza di eventuali asset di base documentata in docs/ASSETS.md

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-008-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-008 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-008-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-008.esito.md`](TASK-008.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

