# Landing Page Monte Miele — governance per gli agenti

> Generato da AI Company OS (progetto #61). Questo file è letto da qualunque agente
> aperto in questa cartella: Claude Code (tramite `CLAUDE.md`), Codex, OpenCode, Antigravity.

## Regola principale

**Il contesto vive nei file.** Un prompt ti dice *che cosa* fare («Esegui TASK-007»); i file ti
dicono *come*. Leggi solo ciò che serve, nell'ordine sotto, e non chiedere di incollare nella chat
ciò che puoi leggere da qui.

## Dove sta cosa

| Cerchi | Leggi |
|---|---|
| Perché esiste il progetto, obiettivi, vincoli | `MASTER_PROMPT.md` |
| Il piano complessivo e le fasi | `docs/IMPLEMENTATION_PLAN.md` |
| La fase corrente: scope, strategia, criteri | `docs/phases/PHASE_N.md` |
| Il tuo ruolo, le skill e le knowledge per una task consegnata | `.aicos/handoffs/TASK-NNN-<strumento>.md` |
| La tua task: obiettivo, file, test, criteri di fine | `tasks/TASK-NNN.md` |
| L'esito completo di una task | `tasks/TASK-NNN.esito.md` |
| Decisioni architetturali | `docs/adr/` |
| Immagini, mockup, design target | `references/` |
| Mappa completa del contesto | `.aicos/CONTEXT_MAP.md` |
| Profilo del progetto (tipo, stack, autonomia) | `.aicos/project.json` |

## Come si lavora su una task

1. Parti dal pacchetto della tua task in `.aicos/handoffs/` (`TASK-NNN-<strumento>.md`, il più recente): contiene
   il ruolo, le skill, le knowledge e le regole che AI Company OS ha preparato per te. Se non c'è, chiedi all'operatore
   di consegnare la task da AI Company OS (Master Orchestrator → «Prepara e apri») prima di cominciare.
2. Leggi `tasks/TASK-NNN.md`, poi la sua fase, poi solo i file che la task elenca.
3. Resta nello scope della task. Quello che noti e non fai, scrivilo nella sezione *Note* della task.
4. Scrivi i test richiesti dalla task e falli girare.
5. Alla fine scrivi l'esito completo in `tasks/TASK-NNN.esito.md` (cosa hai fatto, file toccati, test, cosa
   resta) e nella sezione *Esito* della task lascia solo un riassunto di poche righe con il link a quel file.
6. Non dichiarare finita una task: la chiude l'operatore dopo la review (Human-in-the-Loop).

## Livello di autonomia: GUIDED — imparo facendo

- L'operatore sta **imparando facendo**: il codice lo scrivi tu, nei file lo porta lui.
- **Non modificare i file del progetto.** Scrivi una lezione in `lessons/<TASK>.lezione.md`: per ogni passo il file, il codice completo e la spiegazione **riga per riga**, in parole semplici. Il formato è nel pacchetto di consegna della task.
- Prima del codice fai **prevedere** qualcosa all'operatore; alla fine metti gli esercizi (quiz, completa, trova l'errore, spiega a parole tue): si impara facendo, non leggendo.
- Quando l'operatore ha copiato un passo, **verifica** quello che ha scritto; di un errore spiega la causa prima della correzione.
- Se l'operatore dice che non può seguire, lavora in autonomia e lascia la lezione di ripasso.

## Stack

React + Node.js + Supabase + Vercel
