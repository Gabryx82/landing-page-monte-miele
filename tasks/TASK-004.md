# TASK-004 — Costruisci il layout globale con navbar, footer e transizioni

> Progetto: Landing Page Monte Miele · Fase 1 — Fondamenta · Stato: OPEN · Priorità: HIGH
> Agente principale: Claude Frontend Engineer (Frontend Engineer)

## Obiettivo

Un layout unico per tutte le pagine, con navbar, menu mobile, footer e transizioni leggere fra le pagine.

## Perché esiste

Il MASTER_PROMPT chiede navbar e footer uniformi e una navigazione fluida.

## Scope

Include: navbar con logo, Home, Store, About, Contattaci, pill Liberi (CE) e link attivo sottolineato; menu mobile accessibile; skip link; footer con logo, descrizione, link principali, Instagram, località e link legali, dove contatti e P.IVA compaiono solo se forniti; transizioni con Motion. Esclude i testi delle pagine legali.

## Come implementarla

1) components/layout/Navbar con NavLink e stato attivo. 2) Menu mobile con focus trap, chiusura con Esc e aria-expanded. 3) Footer che legge i dati aziendali da un unico siteConfig, con i campi vuoti dove mancano dati verificati. 4) Transizione di pagina con Motion che rispetta reduced motion. 5) Ripristino dello scroll a ogni cambio di pagina.

## Software e tool necessari

- claude-code

## File da leggere

- `AGENTS.md`
- `docs/phases/PHASE_1.md`
- frontend/app/root.tsx
- frontend/app/components/layout/Navbar.tsx
- frontend/app/components/layout/MobileMenu.tsx
- frontend/app/components/layout/Footer.tsx
- frontend/app/config/site.ts

## Cartelle rilevanti

- frontend/app/components/layout/
- frontend/app/config/

## Contratti, API, schema interessati

- siteConfig: { instagramUrl, location, email?, phone?, vatNumber?, address? }, solo con valori verificati; instagramUrl = https://www.instagram.com/monte_miele/

## Grafi rilevanti

—

## Test richiesti

- Il link della pagina corrente ha aria-current=page
- Il menu mobile si apre, intrappola il focus e si chiude con Esc
- Il footer non mostra email, telefono o P.IVA quando i campi sono vuoti
- Lo skip link porta il focus al contenuto principale

## Debiti collegati

—

## Criteri di completamento

- Il layout è presente su tutte le route
- Nessun dato aziendale inventato in siteConfig
- Navigazione completa da tastiera

## Come si consegna

Dalla console di AI Company OS: task → Master Orchestrator → strumento → «Prepara e apri». La consegna controlla che sia tutto pronto, scrive `.aicos/handoffs/TASK-004-<strumento>.md` con ruolo, skill, knowledge e regole dell'agente, e apre lo strumento con il prompt che lo legge. Se avvii l'agente a mano, dagli questo prompt: lo porta al pacchetto, e se la task non è ancora stata consegnata gli fa chiedere la consegna.

> Esegui TASK-004 partendo dal suo pacchetto di consegna, il più recente `.aicos/handoffs/TASK-004-*.md` (ruolo, skill, knowledge e regole); se non c'è, chiedi all'operatore di consegnare la task da AI Company OS prima di cominciare.

## Esito

_Da compilare dall'agente al termine: un riassunto di poche righe e il link a [`TASK-004.esito.md`](TASK-004.esito.md), dove va l'esito completo (cosa è stato fatto, file toccati, test eseguiti, cosa resta)._

## Note

