# Landing Page Monte Miele

Monorepo npm per la landing page di Apicoltura Monte Miele.

## Avvio locale

Servono Node.js 24 LTS e npm 11 o successivo. Esegui i comandi dalla radice.

```sh
npm install
npm run lint
npm run test
npm run build
```

| Comando                | Scopo                                                   |
| ---------------------- | ------------------------------------------------------- |
| `npm run dev`          | Riesegue i test quando modifichi un file. Esci con `q`. |
| `npm run build`        | Controlla i tipi TypeScript in tutti i workspace.       |
| `npm run test`         | Esegue Vitest una volta per workspace.                  |
| `npm run lint`         | Esegue ESLint.                                          |
| `npm run format:check` | Controlla la formattazione dei file di setup.           |
| `npm run format`       | Applica Prettier ai file di setup.                      |

Per eseguire i test di un solo workspace usa, per esempio, `npm run test --workspace frontend`.

## Struttura

```text
frontend/             Workspace per l'interfaccia web
backend/              Workspace per il servizio Node.js
shared/               Tipi e moduli condivisi
supabase/migrations/  Spazio per le migrazioni
docs/adr/             Decisioni architetturali
```

Frontend e backend possono importare `WorkspaceName` da `@shared/types`.
I tre workspace ereditano il controllo strict e la mappa `@shared/*` da `tsconfig.base.json`.
Vitest legge la stessa mappa tramite Vite. I futuri comandi di avvio di frontend e backend
dovranno risolvere lo stesso percorso per gli import di valori.

Il setup iniziale funziona senza variabili d'ambiente. `.env.example` documenta la porta
prevista per il backend locale. Tieni i valori effettivi e i segreti nei file `.env` locali.
