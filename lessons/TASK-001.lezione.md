# Lezione — Un monorepo npm con tre workspace

## In parole semplici

Il sito, il servizio che gli risponde e le definizioni che condividono vivono in tre cartelle dello stesso repository. È come un quaderno con tre sezioni e un indice unico. Dalla prima pagina puoi controllare tutte le sezioni, anche se ciascuna ha i propri file e i propri test.

## Prova a prevedere

Se aggiungi una cartella `tools/` con un suo `package.json`, `npm run test` dalla radice entrerà anche lì? Fai una previsione prima di leggere la risposta.

**Risposta**. Il comando continuerà a visitare `frontend`, `backend` e `shared`. Sono le cartelle elencate in `workspaces`. Per includere `tools` dovresti aggiungerla alla lista e darle uno script `test`.

## Passo 1 — Registra i pacchetti e i comandi comuni

**File**: `package.json` (già scritto)

```json
{
  "name": "landing-page-monte-miele",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "workspaces": [
    "frontend",
    "backend",
    "shared"
  ],
  "engines": {
    "node": "^24.0.0",
    "npm": ">=11"
  },
  "scripts": {
    "dev": "vitest watch",
    "build": "npm run build --workspaces",
    "test": "npm run test --workspaces",
    "lint": "eslint . --max-warnings 0",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/node": "^24.0.0",
    "eslint": "^10.15.0",
    "eslint-config-prettier": "^10.1.8",
    "prettier": "^3.10.1",
    "typescript": "~6.0.3",
    "typescript-eslint": "^8.73.0",
    "vite": "^8.0.0",
    "vitest": "^5.1.0"
  }
}
```

**Riga per riga**

- `name` identifica il pacchetto radice e `version` gli assegna la versione iniziale del setup.
- `private: true` impedisce di pubblicare questo pacchetto sul registro npm.
- `type: "module"` abilita la sintassi di importazione ES modules nei file JavaScript della radice.
- `workspaces` elenca i tre pacchetti locali che npm gestisce con un'installazione unica.
- `engines` dichiara le versioni di Node e npm previste dal progetto.
- `dev` avvia Vitest in modalità watch e rilancia i test quando cambiano i file osservati.
- `build` chiede a ciascun workspace di eseguire il proprio script `build`.
- `test` fa lo stesso con lo script `test`.
- `lint` controlla i file con ESLint e considera anche un avviso motivo di fallimento.
- `format` applica lo stile Prettier ai file selezionati.
- `format:check` verifica quello stile senza riscrivere i file.
- `@eslint/js` fornisce le regole JavaScript consigliate.
- `@types/node` fornisce le definizioni delle API Node.js usate dagli strumenti.
- `eslint` esegue i controlli sul codice.
- `eslint-config-prettier` disattiva le regole ESLint che interferiscono con la formattazione.
- `prettier` applica le convenzioni di stile.
- `typescript` fornisce il comando `tsc`.
- `typescript-eslint` permette a ESLint di leggere il codice TypeScript.
- `vite` legge e applica gli alias nei test.
- `vitest` trova ed esegue i test.

**Perché**. Installare gli strumenti una volta sola fa usare a tutti i pacchetti le stesse versioni. `package-lock.json` registra le versioni effettivamente installate e permette a `npm ci` di riprodurle.

## Passo 2 — Collega i comandi del singolo workspace

**File**: `frontend/package.json` (già scritto)

```json
{
  "name": "@monte-miele/frontend",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "vitest run --config ../vitest.config.ts"
  }
}
```

**Riga per riga**

- `name` assegna al pacchetto frontend un nome univoco.
- `version` indica che il pacchetto è allo stadio iniziale.
- `private` blocca la pubblicazione accidentale su npm.
- `type` indica a Node di trattare i file JavaScript del pacchetto come moduli ECMAScript.
- `build` chiede a TypeScript di controllare i file usando il `tsconfig.json` di questa cartella.
- `test` esegue Vitest una volta nella cartella corrente e carica la configurazione comune dalla radice.

**Perché**. La radice può lanciare lo stesso comando su tutti e tre i pacchetti, mentre ogni pacchetto può evolvere il proprio script. Per isolare il frontend puoi eseguire `npm run test --workspace frontend`.

## Passo 3 — Condividi le regole TypeScript

**File**: `tsconfig.base.json` (già scritto)

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "noEmit": true,
    "verbatimModuleSyntax": true,
    "skipLibCheck": true,
    "types": [],
    "paths": {
      "@shared/*": ["./shared/*"]
    }
  }
}
```

**Riga per riga**

- `target` indica a TypeScript quali funzionalità del linguaggio considerare disponibili.
- `module` usa la sintassi dei moduli ECMAScript.
- `moduleResolution` applica regole di risoluzione compatibili con strumenti come Vite.
- `strict` abilita controlli più rigorosi, per esempio quando un valore può essere `undefined`.
- `noEmit` fa controllare il progetto senza generare file JavaScript.
- `verbatimModuleSyntax` rende espliciti gli import che servono soltanto ai tipi.
- `skipLibCheck` evita di ricontrollare internamente le dichiarazioni dei pacchetti installati.
- `types: []` evita di caricare automaticamente le definizioni globali presenti in `@types`.
- `paths` traduce `@shared/types` in una ricerca sotto `shared/types/`, a partire dalla posizione del file base.

**File**: `frontend/tsconfig.json` (già scritto)

```json
{
  "extends": "../tsconfig.base.json",
  "include": ["**/*.ts", "**/*.tsx"]
}
```

- `extends` eredita la configurazione dalla radice.
- `include` seleziona i file `.ts` e `.tsx` di questa cartella e delle sue sottocartelle. TypeScript segue anche gli import verso i file condivisi.

**Perché**. I pacchetti ereditano le stesse regole e selezionano i propri file. Quando diventerà necessario produrre artefatti eseguibili, i comandi di build di frontend e backend potranno farlo usando i rispettivi strumenti.

## Passo 4 — Deriva un tipo da un valore condiviso

**File**: `shared/types/index.ts` (già scritto)

```ts
export const workspaceNames = ['frontend', 'backend', 'shared'] as const;

export type WorkspaceName = (typeof workspaceNames)[number];
```

**Riga per riga**

- `export const workspaceNames` rende disponibile ai test la lista dei nomi. `as const` fa ricordare a TypeScript il testo esatto dei tre elementi.
- `export type WorkspaceName` rende disponibile il tipo. `typeof workspaceNames` recupera il tipo della lista e `[number]` ne estrae i valori possibili.

**Perché**. La lista e il tipo vengono dalla stessa definizione. Se aggiorni la lista, quello che TypeScript considera un nome valido cambia insieme a essa.

## Passo 5 — Usa lo stesso percorso durante i test

**File**: `vitest.config.ts` (già scritto)

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
});
```

**Riga per riga**

- `import { defineConfig }` carica l'aiuto di Vitest per scrivere la configurazione.
- `export default defineConfig(...)` consegna le opzioni a Vitest.
- `resolve` configura come risalire da un import al suo file.
- `tsconfigPaths: true` dice a Vite di leggere gli alias dal `tsconfig.json` applicabile al file che importa.

**File**: `frontend/tests/workspace.test.ts` (già scritto)

```ts
import { expect, test } from 'vitest';

import { type WorkspaceName, workspaceNames } from '@shared/types';

test('includes the frontend workspace in the shared names', () => {
  const workspace: WorkspaceName = 'frontend';

  expect(workspaceNames).toContain(workspace);
});
```

- Il primo import carica `test` per dichiarare un caso e `expect` per verificarne il risultato.
- Il secondo chiede, tramite l'alias, sia il tipo `WorkspaceName` sia il valore `workspaceNames`.
- `test(..., () => {` dà un nome al caso e indica il codice che Vitest eseguirà.
- `const workspace: WorkspaceName = 'frontend'` è controllato da TypeScript durante la build.
- `expect(workspaceNames).toContain(workspace)` verifica durante il test che il valore importato includa `frontend`.

**Perché**. La build verifica il tipo. Il test verifica anche che durante l'esecuzione l'alias conduca al valore giusto. Il backend usa lo stesso import, mentre il test di `shared` importa il modulo dalla propria cartella.

## Passo 6 — Configura lint e formattazione

**File**: `eslint.config.js` (già scritto)

```js
import js from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  globalIgnores([
    '.aicos/',
    '**/dist/',
    '**/build/',
    '**/coverage/',
    '.vercel/',
  ]),
  js.configs.recommended,
  tseslint.configs.recommended,
  prettier,
);
```

**Riga per riga**

- Il primo import carica le regole consigliate per JavaScript.
- Il secondo carica le disattivazioni che permettono a ESLint e Prettier di convivere.
- Il terzo importa le funzioni per comporre la configurazione e dichiarare le cartelle ignorate.
- Il quarto carica le regole consigliate per TypeScript.
- `export default defineConfig(...)` combina le impostazioni in ordine.
- `globalIgnores(...)` esclude lo stato locale e le cartelle generate da build, test e deploy.
- `js.configs.recommended` applica le regole JavaScript.
- `tseslint.configs.recommended` aggiunge il supporto e le regole TypeScript.
- `prettier` va in coda per disattivare eventuali regole di stile già incluse.

**File**: `.prettierrc` (già scritto)

```json
{
  "singleQuote": true,
  "trailingComma": "all"
}
```

- `singleQuote` preferisce gli apici singoli dove il formato li consente.
- `trailingComma` mantiene la virgola dopo l'ultimo elemento quando la sintassi lo permette.

**Perché**. ESLint cerca problemi nel codice e Prettier stabilisce come disporlo. `.prettierignore` limita la formattazione ai file pertinenti al setup e al codice.

## Passo 7 — Tieni i valori locali fuori da Git

**File**: `.gitignore` (già scritto)

```gitignore
node_modules/
dist/
build/
coverage/
.vite/
.vercel/
*.tsbuildinfo
*.log

.env
.env.*
!.env.example

.DS_Store
Thumbs.db

# Pacchetti di consegna e stato locale di AI Company OS
.aicos/
tasks/*.diario.md
```

**Riga per riga**

- `node_modules/` esclude i pacchetti reinstallabili dal lockfile.
- `dist/`, `build/`, `coverage/`, `.vite/` e `.vercel/` escludono output e cache.
- `*.tsbuildinfo` e `*.log` escludono cache di compilazione e log.
- `.env` e `.env.*` escludono i file che possono contenere valori locali.
- `!.env.example` riabilita il tracciamento del solo esempio.
- `.DS_Store` e `Thumbs.db` escludono metadati creati dal sistema operativo.
- `.aicos/` e `tasks/*.diario.md` lasciano locali i pacchetti di consegna, lo stato e i diari di AI Company OS.

**File**: `.env.example` (già scritto)

```dotenv
# Porta prevista per il backend locale
PORT=3001
```

- Il commento indica quale parte del progetto userà la variabile.
- `PORT=3001` documenta la porta prevista per il servizio locale.

**File**: `.gitattributes` (già scritto)

```gitattributes
* text=auto eol=lf
```

- `text=auto` fa riconoscere a Git i file testuali. `eol=lf` applica ai file di testo gli stessi terminatori su Windows e sugli altri sistemi.

**Perché**. Chi clona il progetto può vedere quale configurazione servirà. I file che contengono i valori effettivi restano sulla macchina che li usa.

## Mettiti alla prova

### Quiz — Quale comando controlla i tipi nei tre workspace?

- [ ] `npm run lint`
- [x] `npm run build`
- [ ] `npm run format:check`

**Spiegazione**. Lo script `build` della radice chiama lo script di ogni workspace e ciascuno esegue `tsc`.

### Completa — Importa il tipo usando l'alias

```ts
import type { WorkspaceName } from '___';
```

**Soluzione**. `@shared/types`.

**Spiegazione**. La parte `types` sostituisce l'asterisco nel percorso `./shared/*`.

### Trova l'errore — Quale riga fa fallire la build?

```ts
import type { WorkspaceName } from '@shared/types';
const workspace: WorkspaceName = 'api';
```

**Soluzione**. Riga 2.

**Spiegazione**. Il valore `'api'` è assente dalla lista dalla quale deriva il tipo. Usa uno dei nomi ammessi, per esempio `'backend'`.

### Spiega a parole tue — Perché il test importa anche `workspaceNames`?

**Punti chiave**

- Il compilatore può eliminare un import usato soltanto come tipo.
- Il test usa il valore a runtime e l'import deve quindi raggiungere il file reale.
- Vitest delega la risoluzione a Vite, che legge la mappa da TypeScript.

## Cosa hai imparato

- **Workspace npm**. Un'installazione alla radice può servire più pacchetti, ognuno con i propri script.
- **Configurazione ereditata**. Un file base può applicare le stesse regole a più progetti.
- **Alias nei test**. TypeScript e lo strumento che esegue il codice devono entrambi sapere dove cercare gli import.
- **Configurazione locale**. Un esempio versionato comunica i nomi e i valori di esempio delle variabili.
