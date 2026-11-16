# TASK-003 — Definisci il design system a partire dalle reference

> Progetto: Landing Page Monte Miele · Fase 1 — Fondamenta · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude UI/UX Designer (UI/UX Designer)

## Obiettivo

Token di colore, tipografia e spaziatura in Tailwind, il logo originale in versione chiara e scura, e i componenti base che usano tutte le pagine.

## Perché esiste

Le reference hanno un linguaggio visivo preciso: fondo pergamena, divisori ondulati, una parola dei titoli in corsivo ambra, ornamenti botanici dorati. Codificarlo una volta evita incoerenze fra le pagine.

## Scope

Include: la palette del MASTER_PROMPT e varianti accessibili per il testo; un font serif, uno sans e uno calligrafico in self-hosting; il logo chiaro e scuro; i componenti Button (primario a pillola ambra, secondario contornato), Eyebrow, SectionHeading con parola in corsivo, LocationPill, WaveDivider, BotanicalOrnament, Card, PlaceholderNotice. Esclude le sezioni di pagina.

## Come implementarla

1) Analizza le reference e annota misure, raggi e spaziature ricorrenti in docs/design-system.md. 2) Definisci i token in @theme di Tailwind: crema, pergamena, ambra, oro miele, marrone scuro, verde oliva, bianco caldo, più un'ambra-testo con contrasto ≥ 4,5:1 sul crema. 3) Installa i font con Fontsource, senza Google Fonts remoti: un serif per i titoli (es. Cormorant Garamond o Fraunces), un sans per i testi, un calligrafico per gli accenti. 4) Ricava gli SVG chiaro e scuro dal logo originale senza ridisegnarlo. 5) Crea i componenti in components/ui con varianti tipizzate; sui pulsanti ambra il testo è marrone scuro per garantire il contrasto. 6) Aggiungi una pagina di anteprima visibile solo in sviluppo.

## Software e tool necessari

- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_1.md`
- references/images/apicoltura-monte-miele_-sito-completo.png
- references/images/apicoltura-monte-miele_-quattro-pagine-web.png
- frontend/app/styles/app.css
- frontend/app/components/ui/*.tsx
- frontend/public/images/brand/logo-light.svg
- frontend/public/images/brand/logo-dark.svg
- docs/design-system.md

## Cartelle rilevanti

- frontend/app/components/ui/
- frontend/public/images/brand/

## Contratti, API, schema interessati

- Button: variant primary | secondary, reso come link o button, icona opzionale
- SectionHeading: eyebrow, titolo, parola accentata, livello del heading

## Grafi rilevanti

—

## Test richiesti

- Testing Library: Button rende un link o un button a seconda delle props ed è raggiungibile da tastiera
- Script di verifica dei contrasti: ogni coppia testo/sfondo dei token rispetta WCAG AA
- SectionHeading rende un solo heading del livello richiesto

## Debiti collegati

—

## Criteri di completamento

- Tutte le coppie testo/sfondo del design system passano AA
- Logo chiaro e scuro ricavati dall'originale, non reinventati
- docs/design-system.md descrive token, font e componenti

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-003-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-003 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-003-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-003.esito.md`](TASK-003.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

