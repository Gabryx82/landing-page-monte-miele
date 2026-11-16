# MASTER PROMPT — Landing Page Monte Miele

# PROGETTO: APICOLTURA MONTE MIELE

## Sito vetrina professionale, animato e responsive

### 1. Obiettivo del progetto

Realizza un sito web vetrina professionale per **Apicoltura Monte Miele**, attività artigianale situata a Liberi, in provincia di Caserta, specializzata nella produzione di miele e nella vendita di prodotti derivati dall'alveare.&#x20;

Link instagram dove trovare prodotti e immagini: [https://www.instagram.com/monte_miele/](https://www.instagram.com/monte_miele/)

Il sito deve valorizzare:

- L'identità del marchio Monte Miele.
- La produzione artigianale e il territorio.
- La qualità e le caratteristiche dei prodotti.
- La storia dell'attività e il lavoro degli apicoltori.
- La possibilità di richiedere informazioni su uno o più prodotti.

**IMPORTANTE: NON È UN E-COMMERCE.**

Non implementare:

- Carrello.
- Checkout.
- Acquisti online.
- Pagamenti.
- Registrazione degli utenti.
- Login dei clienti.
- Gestione degli indirizzi di spedizione.
- Wishlist.
- Funzionalità di vendita.

L'intero progetto deve funzionare esclusivamente come **sito vetrina con catalogo interattivo**.

L'azione commerciale principale sarà il pulsante **"Richiedi informazioni"**.

---

# 2. Stack tecnologico

Utilizza obbligatoriamente:

### Frontend

- React.
- TypeScript.
- Vite.
- Tailwind CSS.
- Motion for React per animazioni e transizioni.
- GSAP con ScrollTrigger per le sequenze animate legate allo scrolling.
- React Router per la navigazione.
- Lucide React per le icone.

### Backend

- Node.js.
- Express.
- TypeScript.
- API REST.

### Database e storage

- Supabase PostgreSQL.
- Supabase Storage per immagini e asset dei prodotti.

### Deployment

- Vercel per frontend e backend, utilizzando funzioni serverless per le API Express, con una struttura compatibile con il deployment previsto.

Organizza il repository in modo modulare, distinguendo frontend, backend, componenti condivisi e configurazioni.

Adotta una struttura facilmente manutenibile e predisposta all'aggiunta futura di funzionalità.

---

# 3. Identità visiva

Il design deve riprendere fedelmente le reference grafiche fornite.

L'ispirazione principale è il sito SOTA Honey, soprattutto per:

- Esperienza immersiva.
- Storytelling visivo.
- Animazioni cinematografiche.
- Transizioni controllate dallo scrolling.
- Elementi naturali animati.
- Interazione tra fotografie e prodotti.
- Utilizzo dello spazio e della profondità.

Non copiare il sito SOTA: reinterpretane l'approccio per Monte Miele.

## Palette cromatica

Colori principali:

- Crema: `#F8F3E7`
- Pergamena: `#F1E5CF`
- Ambra: `#C98A12`
- Oro miele: `#D99B18`
- Marrone scuro: `#342315`
- Verde oliva: `#667044`
- Bianco caldo: `#FFFDF8`

Il design deve risultare elegante, naturale, luminoso e professionale.

Evitare colori eccessivamente saturi, gradienti artificiali e interfacce troppo tecnologiche.

## Tipografia

Utilizzare una combinazione di:

- Font serif elegante per i titoli.
- Font sans-serif moderno per i contenuti.
- Font calligrafico per brevi elementi decorativi.

Mantenere una gerarchia tipografica chiara.

## Logo

Utilizzare il logo originale **Apicoltura Monte Miele** fornito nelle reference e nelle fotografie dei prodotti.

Non reinventare il logo.

Prevedere versioni chiare e scure, ricavandole dagli asset originali quando tecnicamente possibile.

## Packaging

Le confezioni dei prodotti devono riprodurre le caratteristiche delle fotografie reali.

In particolare, i vasetti di miele presentano:

- Etichetta color crema.
- Logo originale Monte Miele.
- Nome dell'attività in carattere calligrafico.
- Denominazione del prodotto.
- Peso netto.

Non generare etichette arbitrarie e non sostituire il packaging originale con confezioni inventate.

Utilizzare le immagini reali quando disponibili.

---

# 4. Architettura delle pagine

Implementare le seguenti route:

```text
/
├── /store
│   ├── /store?categoria=miele
│   ├── /store?categoria=creme
│   ├── /store?categoria=pappa-reale
│   └── /prodotti/:slug
├── /about
├── /contattaci
├── /privacy
└── /cookie-policy
```

Utilizzare uno stesso layout globale con navbar e footer.

La navigazione deve essere fluida, con transizioni leggere tra le pagine.

---

# 5. HOME PAGE — ESPERIENZA IMMERSIVA

**Questa è la sezione più importante dell'intero progetto.**

Non realizzare una normale landing page composta da sezioni statiche sovrapposte.

La homepage deve essere un'esperienza visiva narrativa, in cui lo scrolling controlla animazioni e transizioni.

## 5.1 Hero cinematografico

La prima schermata deve occupare almeno l'intera altezza del viewport.

Elementi visivi:

- Paesaggio naturale delle colline di Liberi (CE)
- Fiori in primo piano.
- Api realistiche.
- Illuminazione naturale.
- Elementi botanici.
- Profondità e parallasse.

Testo principale:

**Monte Miele**

*Dalla natura, alla tua tavola.*

Sottotitolo:

"Miele genuino, creme artigianali e prodotti dell'alveare dal cuore delle colline campane."

CTA:

- Scopri i prodotti.
- La nostra storia.

### Animazioni dell'hero

Realizzare una sequenza iniziale nella quale:

1. Il paesaggio compare gradualmente.
2. Il logo e il testo entrano con un'animazione delicata.
3. Un'ape attraversa lo schermo.
4. L'ape raggiunge un fiore.
5. L'ape si posa sul fiore e interagisce con esso.
6. Una leggera animazione ambientale mantiene viva la scena.

Le animazioni devono essere realistiche e fluide.

Per gli elementi naturali complessi utilizzare asset video, sequenze di immagini o modelli 3D ottimizzati, quando disponibili.

Non tentare di simulare animazioni fotorealistiche complesse usando esclusivamente CSS.

### Scrolling

Durante lo scroll:

- Il paesaggio si muove con effetto parallasse.
- L'ape può continuare il proprio percorso.
- Alcuni fiori si spostano leggermente.
- Il testo scompare progressivamente.
- La scena si trasforma nella sezione successiva.

Utilizzare GSAP ScrollTrigger per coordinare la sequenza.

---

## 5.2 Il lavoro delle api

Titolo:

**Un ciclo naturale, una qualità autentica.**

Questa sezione deve mostrare il passaggio dalla raccolta del nettare alla produzione del miele.

Animazione prevista:

1. L'ape lascia il fiore.
2. La telecamera virtuale segue il movimento.
3. Il paesaggio sfuma progressivamente.
4. Compare un favo.
5. Il favo viene mostrato in primo piano.
6. Il miele inizia a colare lentamente.

Il passaggio deve essere cinematografico, senza cambi di scena bruschi.

Integrare quattro valori:

- Fiori selezionati.
- Cura delle api.
- Produzione artigianale.
- Qualità del prodotto.

Questi contenuti devono comparire progressivamente durante lo scrolling.

---

## 5.3 Presentazione dei prodotti

Titolo:

**Miele e creme, per ogni esigenza.**

Sottotitolo:

"Dal miele puro alle creme spalmabili, prodotti naturali e genuini."

La sezione deve presentare i prodotti attraverso una composizione fotografica professionale.

Prodotti rappresentativi:

- Miele di Millefiori.
- Miele di Castagno.
- Creme artigianali.
- Pappa reale.

### Animazione scroll-driven

Durante lo scroll:

1. Lo sfondo diventa progressivamente color crema.
2. Un vasetto di miele appare dal basso.
3. Il vasetto ruota leggermente e raggiunge la posizione finale.
4. Compare un secondo prodotto.
5. Compare la confezione della pappa reale.
6. Gli elementi si dispongono in una composizione ordinata.
7. Appaiono titolo, descrizione e CTA.

Gli oggetti devono apparire tridimensionali, con movimenti morbidi e ombre realistiche.

Utilizzare fotografie dei prodotti scontornate oppure asset 3D dedicati.

CTA:

**Esplora lo store**

---

## 5.4 Le categorie

Presentare tre categorie principali:

### Miele

Fotografia di un vasetto e di un favo.

### Creme

Fotografia di una crema artigianale.

### Pappa reale

Fotografia della confezione originale.

Ogni categoria deve avere:

- Immagine.
- Titolo.
- Breve descrizione.
- Collegamento al catalogo filtrato.

Durante lo scroll le card devono entrare nella viewport con animazioni progressive.

---

## 5.5 Il nostro territorio

Titolo:

**Radici nel territorio, qualità in ogni vasetto.**

Utilizzare una **vera fotografia panoramica del comune di Liberi (CE)**.

La fotografia deve rappresentare il territorio autentico, senza inventare edifici o panorami.

Se non è disponibile un'immagine verificata, predisporre il contenitore e utilizzare temporaneamente un placeholder chiaramente identificato.

Il panorama deve occupare una sezione ampia, preferibilmente full-width.

Prevedere un effetto parallasse delicato.

Integrare una breve descrizione della produzione locale e una CTA verso la pagina About.

---

## 5.6 Chiusura della homepage

Realizzare un'ultima sezione con:

- Grande fotografia del miele.
- Elementi floreali.
- Breve messaggio sul marchio.
- Pulsante "Scopri i nostri prodotti".
- Pulsante "Contattaci".

Aggiungere un footer professionale.

---

# 6. STORE — CATALOGO PRODOTTI

Lo store è esclusivamente un catalogo.

Non mostrare pulsanti di acquisto, carrello o checkout.

## Layout

Realizzare una pagina composta da:

- Hero introduttivo.
- Selezione categorie.
- Filtri.
- Griglia prodotti.
- Eventuale ordinamento.
- Footer.

## Categorie principali

- Tutti i prodotti.
- Miele.
- Creme.
- Pappa reale.

Le categorie devono essere gestite dinamicamente attraverso Supabase.

Non codificare rigidamente l'elenco dei prodotti nei componenti React.

## Card prodotto

Ogni card deve contenere:

- Fotografia.
- Nome del prodotto.
- Breve descrizione.
- Formato o peso.
- Categoria.
- Pulsante "Scopri il prodotto".
- Pulsante "Richiedi informazioni".

**Non inserire il prezzo, salvo futura richiesta esplicita.**

Al passaggio del mouse:

- La fotografia può ingrandirsi leggermente.
- La card può sollevarsi di pochi pixel.
- Il pulsante può comparire con una transizione morbida.

Il layout deve mantenere la stessa estetica della homepage.

---

# 7. PAGINA DETTAGLIO PRODOTTO

Route:

`/prodotti/:slug`

La pagina deve avere un design editoriale, elegante e immersivo.

## Layout desktop

Colonna sinistra:

- Fotografia principale del prodotto.
- Eventuali fotografie secondarie.
- Zoom sull'immagine.
- Galleria fotografica.

Colonna destra:

- Nome prodotto.
- Categoria.
- Descrizione.
- Formato.
- Caratteristiche.
- Informazioni disponibili.
- Pulsante "Richiedi informazioni".

## Informazioni del prodotto

Predisporre campi strutturati per:

- Nome.
- Descrizione breve.
- Descrizione completa.
- Categoria.
- Formato.
- Ingredienti, quando applicabile.
- Provenienza.
- Modalità di conservazione.
- Eventuali caratteristiche aggiuntive.

Mostrare soltanto le informazioni effettivamente disponibili e verificate.

Non generare automaticamente proprietà nutrizionali, benefici medici o indicazioni salutistiche non documentate.

## CTA

Il pulsante principale deve essere:

**Richiedi informazioni su questo prodotto**

Al clic:

1. Navigare a `/contattaci`.
2. Trasmettere l'identificativo del prodotto.
3. Preselezionare automaticamente il prodotto nel modulo.
4. Consentire all'utente di scrivere la richiesta.

Non creare alcun carrello.

## Prodotti correlati

In fondo alla pagina mostrare:

**Potrebbero interessarti anche**

Visualizzare fino a quattro prodotti della stessa categoria.

---

# 8. ABOUT — CHI SIAMO

Questa pagina deve raccontare l'identità di Apicoltura Monte Miele.

## Sezioni

### Hero

Titolo:

**La nostra storia**

Sottotitolo:

*Tradizione, territorio e passione per le api.*

Fotografia ambientale dell'attività o degli alveari.

### La nostra passione

Raccontare:

- Origine dell'attività.
- Filosofia produttiva.
- Cura degli alveari.
- Rapporto con il territorio.

Non inventare informazioni storiche, certificazioni o dettagli aziendali.

Utilizzare testi provvisori chiaramente segnalati dove mancano contenuti ufficiali.

### Dall'alveare al vasetto

Rappresentare il processo attraverso una timeline animata:

1. Fioritura.
2. Lavoro delle api.
3. Raccolta del miele.
4. Estrazione.
5. Lavorazione.
6. Confezionamento.

Utilizzare fotografie e icone coerenti.

### Il territorio

Inserire una panoramica autentica di Liberi (CE).

Aggiungere informazioni sul territorio e sul legame con la produzione.

### Dove siamo

Mostrare:

- Comune di Liberi (CE).
- Indirizzo effettivo, quando fornito.
- Mappa.
- Eventuali contatti ufficiali.

Non inventare indirizzi, numeri di telefono o orari di apertura.

---

# 9. CONTATTACI

Realizzare una pagina dedicata alle richieste di informazioni.

Il design deve mantenere lo stile delle reference.

## Modulo contatti

Campi:

- Nome e cognome — obbligatorio.
- Email — obbligatoria.
- Telefono — facoltativo.
- Tipologia richiesta — obbligatoria.
- Prodotto di interesse — condizionale.
- Messaggio — obbligatorio.
- Consenso privacy — obbligatorio.

### Tipologie richiesta

- Informazioni generali.
- Informazioni su un prodotto.
- Collaborazioni.
- Altre richieste.

### Selezione prodotto

Quando l'utente seleziona "Informazioni su un prodotto":

Mostrare un selettore collegato dinamicamente al catalogo Supabase.

Il selettore deve permettere di scegliere un prodotto specifico.

Se l'utente arriva dalla pagina dettaglio prodotto, il prodotto deve essere già preselezionato.

Per le richieste generali il prodotto non è obbligatorio.

## Invio modulo

Al submit:

1. Validare i dati.
2. Inviare la richiesta al backend Node.js.
3. Validare nuovamente sul server.
4. Salvare la richiesta su Supabase.
5. Inviare una notifica all'indirizzo email ufficiale dell'attività, quando configurato il servizio email.
6. Mostrare un messaggio di conferma.

Prevedere stati di caricamento, successo ed errore.

Implementare protezione antispam, rate limiting e validazione degli input.

Non esporre credenziali privilegiate di Supabase nel frontend.

## Informazioni laterali

Prevedere:

- Posizione dell'attività.
- Link alla mappa.
- Email ufficiale.
- Eventuale telefono.
- Collegamento Instagram.
- Eventuali orari, se disponibili.

Non utilizzare informazioni di contatto inventate.

---

# 10. DATABASE SUPABASE

Progettare uno schema relazionale essenziale.

## Tabella categories

```text
id
name
slug
description
image_url
sort_order
created_at
```

## Tabella products

```text
id
category_id
name
slug
short_description
description
ingredients
origin
storage_info
format
featured
active
sort_order
created_at
updated_at
```

## Tabella product_images

```text
id
product_id
storage_path
alt_text
sort_order
```

## Tabella contact_requests

```text
id
name
email
phone
request_type
product_id
message
privacy_accepted_at
status
created_at
```

Utilizzare chiavi esterne, vincoli e indici appropriati.

Abilitare Row Level Security sulle tabelle esposte.

Il catalogo pubblico deve consentire esclusivamente la lettura dei prodotti attivi.

Le richieste di contatto devono essere inserite attraverso il backend e non devono essere consultabili pubblicamente.

Non implementare un pannello amministrativo completo in questa prima versione.

I prodotti potranno essere gestiti inizialmente attraverso Supabase Dashboard.

---

# 11. ANIMAZIONI E PERFORMANCE

Il sito deve essere particolarmente curato dal punto di vista delle animazioni.

Tuttavia, la qualità visiva non deve compromettere le prestazioni.

Utilizzare:

- GSAP ScrollTrigger.
- Motion for React.
- CSS transforms.
- Parallax scrolling.
- Lazy loading.
- Immagini WebP/AVIF.
- Video ottimizzati, dove necessari.

Evitare animazioni basate continuamente su proprietà che provocano reflow.

Prediligere transform e opacity.

## Mobile

Su dispositivi mobili:

- Ridurre la complessità delle animazioni.
- Utilizzare versioni ottimizzate degli asset.
- Mantenere leggibilità e navigazione.
- Evitare contenuti tagliati.
- Garantire il funzionamento dei moduli.

Rispettare `prefers-reduced-motion`.

Le animazioni non devono impedire l'utilizzo del sito.

---

# 12. SEO E ACCESSIBILITÀ

Implementare:

- Meta title e description specifici per pagina.
- Open Graph.
- Sitemap.
- Robots.txt.
- URL leggibili.
- Dati strutturati appropriati.
- HTML semantico.
- Alt text delle immagini.
- Navigazione da tastiera.
- Focus visibili.
- Contrasti accessibili.

Poiché si utilizza React con Vite, prevedere una strategia di prerendering per le pagine pubbliche e una gestione adeguata dei metadati dei prodotti.

Il sito deve essere ottimizzato per ricerche locali pertinenti a Monte Miele e Liberi (CE), senza keyword stuffing.

---

# 13. FOOTER

Il footer deve essere uniforme in tutte le pagine.

Contenuti:

- Logo Monte Miele.
- Breve descrizione dell'attività.
- Collegamenti principali.
- Instagram.
- Contatti ufficiali.
- Località.
- Privacy policy.
- Cookie policy.
- Partita IVA, se applicabile e fornita.
- Informazioni legali obbligatorie applicabili.

Non inventare dati aziendali.

---

# 14. STRUTTURA DEL REPOSITORY

Organizzare il progetto indicativamente così:

```text
monte-miele/
│
├── frontend/
│   ├── public/
│   │   ├── images/
│   │   ├── videos/
│   │   └── fonts/
│   │
│   └── src/
│       ├── app/
│       ├── components/
│       │   ├── layout/
│       │   ├── ui/
│       │   ├── animations/
│       │   └── products/
│       │
│       ├── pages/
│       │   ├── Home/
│       │   ├── Store/
│       │   ├── ProductDetail/
│       │   ├── About/
│       │   └── Contact/
│       │
│       ├── hooks/
│       ├── services/
│       ├── types/
│       ├── styles/
│       └── utils/
│
├── backend/
│   └── src/
│       ├── routes/
│       ├── controllers/
│       ├── services/
│       ├── middleware/
│       ├── validation/
│       └── config/
│
├── shared/
│   ├── types/
│   └── schemas/
│
├── supabase/
│   └── migrations/
│
├── docs/
│
└── README.md
```

Adatta la struttura alle esigenze effettive del deployment su Vercel.

---

# 15. METODOLOGIA DI SVILUPPO

Procedere per fasi.

### Fase 1 — Fondamenta

- Inizializzazione repository.
- Configurazione React, Vite e TypeScript.
- Configurazione Tailwind.
- Configurazione backend Node.js.
- Routing.
- Layout condiviso.
- Design system.
- Setup ambiente.

### Fase 2 — Homepage

Realizzare la homepage secondo le reference.

In questa fase concentrarsi principalmente su:

- Qualità estetica.
- Animazioni.
- Scrolling cinematografico.
- Responsive.
- Performance.

Utilizzare inizialmente dati e asset locali.

Non introdurre Supabase prima che la componente visiva principale sia funzionante.

### Fase 3 — Store

- Catalogo.
- Categorie.
- Filtri.
- Card.
- Dettaglio prodotto.
- Collegamenti verso Contattaci.

### Fase 4 — About e Contattaci

- Storia.
- Produzione.
- Territorio.
- Form.
- Selezione prodotto.

### Fase 5 — Supabase

- Schema database.
- Storage.
- Integrazione catalogo.
- API backend.
- Persistenza richieste.
- Sicurezza.

### Fase 6 — Ottimizzazione

- Responsive.
- Animazioni.
- Accessibilità.
- SEO.
- Ottimizzazione immagini.
- Testing.
- Deployment.

---

# 16. REQUISITI DI QUALITÀ

Il progetto deve essere:

- Professionale.
- Visivamente distintivo.
- Responsive.
- Accessibile.
- Ottimizzato.
- Facilmente manutenibile.
- Modulare.
- Sicuro.
- Coerente con le reference.

Evitare interfacce generiche tipiche dei template e-commerce.

Non aggiungere funzionalità non richieste.

Non introdurre carrello, acquisti o autenticazione dei clienti.

Non inventare prodotti, informazioni aziendali, immagini ufficiali o proprietà dei prodotti presentandoli come reali.

Utilizzare placeholder identificabili quando mancano materiali.

## Priorità assoluta

**La homepage deve essere il principale elemento distintivo del sito.**

Deve offrire un'esperienza narrativa simile per qualità a SOTA Honey, con api, fiori, favi, miele e confezioni che si animano progressivamente durante lo scorrimento.

Le altre pagine devono mantenere la stessa identità visiva, pur privilegiando semplicità di navigazione e accessibilità.

---

# 17. ISTRUZIONI OPERATIVE FINALI

Prima di implementare:

1. Analizza le reference grafiche allegate.
2. Esamina gli asset disponibili, compreso il logo originale e le fotografie delle confezioni.
3. Definisci i componenti riutilizzabili.
4. Progetta le sequenze animate della homepage.
5. Identifica quali animazioni richiedono video o asset grafici dedicati.
6. Prepara un piano di implementazione suddiviso in task.
7. Inizia dalla Fase 1 e procedi con lo sviluppo.

Non dichiarare implementate animazioni o funzionalità che non sono realmente operative.

Non sostituire gli effetti complessi con semplici fade-in fingendo di aver realizzato l'esperienza prevista.

Se servono asset aggiuntivi, documenta precisamente quali materiali sono necessari e predisponi componenti capaci di integrarli successivamente.

**Obiettivo finale: realizzare un sito vetrina distintivo per Apicoltura Monte Miele, capace di raccontare l'azienda, valorizzare i suoi prodotti e trasformare l'interesse dei visitatori in richieste di contatto.**


## Idea

## Obiettivi

## Utenti e scenari

## Funzionalità

## Vincoli tecnici e stack desiderato

## Fuori scope

## Criteri di successo
