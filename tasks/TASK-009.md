# TASK-009 — Produci in Blender il favo con il miele e i vasetti con le etichette reali

> Progetto: Landing Page Monte Miele · Fase 2 — Homepage immersiva · Stato: OPEN · Priorità: HIGH
> Agente principale: 3D Artist (3D Artist)

## Obiettivo

Sequenze con trasparenza del favo in primo piano con il miele che cola lentamente, e dei prodotti (Millefiori, Castagno, una crema, confezione di pappa reale) che entrano, ruotano leggermente e si posano. Le texture delle etichette vengono dalle foto reali.

## Perché esiste

§5.2 e §5.3 chiedono oggetti tridimensionali con ombre realistiche. Il packaging non si può inventare, quindi le texture devono venire dalle foto reali.

## Scope

Include: favo; animazione o simulazione della colata; modelli di vasetto e confezione; texture ricavate dalle foto reali delle etichette; luce coerente con le reference; ombre su un livello separato. Esclude i prodotti senza una foto reale dell'etichetta: per quelli si prepara un placeholder segnalato.

## Come implementarla

1) Favo con materiale di cera e celle; miele con simulazione di fluido o shape key rallentate. 2) Vasetti modellati sulle misure reali, con la texture dell'etichetta presa dalla foto e non ridisegnata. 3) Animazioni secondo lo storyboard: entrata dal basso, rotazione leggera, posa. 4) Render con alfa e ombre a parte; export WebP/AVIF in due risoluzioni, con manifest e poster. 5) Un'immagine statica scontornata di ogni prodotto animato, per mobile e reduced motion.

## Software e tool necessari

- blender
- google-drive

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_2.md`
- docs/home-storyboard.md
- docs/ASSETS.md
- assets-src/README.md
- frontend/public/sequences/honeycomb-drip/
- frontend/public/sequences/products/
- frontend/public/images/products/

## Cartelle rilevanti

- assets-src/
- frontend/public/sequences/
- frontend/public/images/products/

## Contratti, API, schema interessati

- SequenceManifest della fase 1 per ogni sequenza

## Grafi rilevanti

—

## Test richiesti

- Script di verifica di frame, dimensioni e peso
- Confronto delle etichette renderizzate con le foto reali: testo, logo e peso netto identici

## Debiti collegati

—

## Criteri di completamento

- Sequenze di favo e prodotti con manifest e poster
- Etichette fedeli alle foto reali
- Un'immagine statica scontornata per ogni prodotto animato

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-009-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-009 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-009-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-009.esito.md`](TASK-009.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

