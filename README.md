# Portfolio-Website Anja Crhak
**Studienprojekt Web-Programmierung (DLBUXPWP01)| B.Sc. Medieninformatik**
**IU Internationale Hochschule**

## Projektbeschreibung

Dieses Projekt entsteht im Rahmen des Fernstudiums an der **IU Internationalen Hochschule** im Studiengang **Medieninformatik (B.Sc.)** für den Kurs **Projekt: Web-Programmierung (DLBUXPWP01)** innerhalb eines Creative Labs.

Ziel ist die Entwicklung einer modernen, responsiven Portfolio-Website, die den beruflichen Werdegang von Anja Crhak (von der Realschullehrerin zur Medieninformatikerin & Webentwicklerin), ausgewählte Web- und E-Commerce-Projekte sowie kulinarische Inhalte (Foodblog „Bauchgefühl Rezepte“ & ZDF Küchenschlacht) anschaulich und modern darstellt. Der Fokus liegt dabei konsequent auf **Barrierefreiheit (Accessibility)**, **Responsive Design** und einer **nutzerzentrierten Informationsarchitektur**. Dabei wird der Content-First und Mobile-First-Ansatz verfolgt. 

## Inhaltsverzeichnis

- [Seitenstruktur & geplante Inhalte](#seitenstruktur--geplante-inhalte)
- [Responsive Design](#responsive-design--breakpoint-konzept)
- [Design-Entwürfe](#design-entwürfe-figma-prototyping)
- [Barrierefreiheit](#barrierefreiheit)
- [Technologien)](#technologien)
- [Repository-Organisation & Versionskontrolle](#repository-organisation--versionskontrolle)
- [Commit-Tags & Abgabe-Phasen](#commit-tags--abgabe-phasen)
- [Eingesetzte und geplante Funktionalitäten](#eingesetzte-und-geplante-funktionalitäten)
- [Autor](#autor)

## Seitenstruktur & geplante Inhalte

| Dateiname | Seitentitel | Geplante Inhalte & Funktion |
| :--- | :--- | :--- |
| `index.html` | Startseite | Hero-Section mit Portrait, Kurzübersicht Karriere & Tools, Projekt-Teaser, Story-Teaser, Kulinarik-Highlights, Kontaktformular & Global Footer |
| `karriere.html` | Karriere & Tools | Interaktive Timeline (Lehramt, Digitalbeauftragte, Studium, E-Commerce), Tech-Stack mit Badges & Icons, Kompetenz-Karten |
| `projekte.html` | Projekte | Galerie & Detailkarten ausgewählter B2B-, E-Commerce- und Studienprojekte mit Multi-Device Mockups. |
| `story.html` | Story | Ausführliche persönliche Geschichte („Vom Klassenzimmer zum Code“) und Lebensstationen |
| `kulinarik.html` | Kulinarik | Entstehungsgeschichte des Foodblogs „Bauchgefühl Rezepte“, Rezeptkarten mit Zubereitungsdetails & Timeline zum TV-Auftritt bei der ZDF Küchenschlacht |
| `kontakt.html` | Kontakt | Kontaktdaten (Adresse, E-Mail, Telefon), Social-Media-Links & Kontaktformular |
| `impressum.html` | Impressum | Anbieterkennzeichnung nach § 5 DDG, Haftungsausschluss & Bildnachweise für ein nicht-kommerzielles Studienprojekt. |
| `datenschutz.html` | Datenschutz | Datenschutzerklärung gemäß DSGVO (Kontaktformular, Server-Log-Dateien, Rechte der Betroffenen). |
| `404.html` | 404 Fehlerseite | Benutzerfreundliche Fehlerseite bei nicht vorhandenen Pfaden mit Schnelllinks zur Startseite und zu den Projekten. |

## Responsive Design & Breakpoint-Konzept
Die Website folgt dem Mobile-First-Ansatz: Das Basislayout wird über drei Hauptbreakpoints mit min-width-Media-Queries schrittweise für größere Viewports erweitert.

### Breakpoint-Definitionen
* **Mobile (< 48rem):** Einspaltiges Basislayout mit gestapelten Inhalten und Hamburger-Menü.
* **Tablet (≥ 48rem):** Zweispaltige Rezeptkarten sowie angepasste Schriftgrößen und Abstände.
* **Desktop (≥ 64rem):** Mehrspaltige Layouts, horizontale Hauptnavigation und ausgewählte Bild-Text-Bereiche nebeneinander. Maximale Inhaltsbreite: 75rem.
* **Widescreen (≥ 96rem):** Desktoplayout mit erweiterter maximaler Inhaltsbreite von 87.5rem.

### Responsives Verhalten der Kernkomponenten
* **Header & Navigation:**
  * *Mobile/Tablet:* Logo links, Theme-Toggle-Button, Hamburger-Button (`.site-nav__hamburger`) steuert Menü per JavaScript/CSS.
  * *Desktop:* Hauptnavigation wird als horizontale Liste im Header eingeblendet; Hamburger-Button wird verborgen, Logo & Theme-Toggle bleiben erhalten.
* **Hero- & Text-Sektionen:**
  * *Mobile/Tablet:* Bild- und Textblöcke untereinander angeordnet.
  * *Desktop:* Ausgewählte Bereiche werden in einem zweispaltigen Raster nebeneinander dargestellt.
* **Karten-Layouts (Projekte, Rezepte, Tools, Infos):**
  * *Mobile:* einspaltig
  * *Tablet:* Rezept-, Tool- & Infokarten zweispaltig, Projektkarten einspaltig
  * *Desktop:* Rezeptkarten dreispaltig, Projekt- & Infokarten zweispaltig, Toolkarten vierspaltig. 
  * *Allgemein:* Ausgewählte Kartenbereiche der Startseite sind auf kleineren Viewports horizontal scrollbar.
* **Akkordeons & Timelines (`<details>` / `<summary>`):**
  * Unabhängig von der Viewportbreite platzsparend einklappbar, um den vertikalen Scrollaufwand mobil gering zu halten.
* **Sidebars (`<aside>`):**
  * *Mobile/Tablet:* 1-spaltiges-Layout; auf Seite “Kulinarik” ist ergänzender Bildbereich komplett ausgeblendet
  * *Desktop:* Sticky Sidebar, Reihenfolge mit CSS vertauscht (Anordnung rechts)

## Design-Entwürfe (Figma Prototyping)

Zur visuellen und strukturellen Planung wurden alle Screens in **Figma** für drei Gerätegrößen (Mobile, Tablet, Desktop) ausgearbeitet:
* Layout-Raster & Spaltenaufteilung
* Typografie, Farben & Abstände
* Responsive Verhaltensmuster der Komponenten

## Barrierefreiheit 

Die HTML-Dateien sind nach Standards der digitalen Barrierefreiheit (WCAG 2.1 Level AA & WAI-ARIA) aufgebaut:

* **Semantische Struktur:** HTML5-Elemente gliedern Seiten und Inhalte (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
* **Tastaturbedieung & Fokus:** Sichtbare Fokusmarkierungen, bei Fokus eingeblendeter Skip-Link und Tastatursteuerung des Hamburger-Menüs inklusive Escape und Fokusrückgabe
* **ARIA-Attribute:**
  * `aria-label` zur eindeutigen Benennung von Navigationen, Buttons und Formularelementen.
  * `aria-expanded` & `aria-controls` zur Steuerung des Hamburger-Menüs.
  * `aria-pressed` zur Statusanzeige des Dark-Mode-Toggles.
  * `aria-hidden="true"` für dekorative Icons und SVG-Grafiken.
* **Bilder & Medien:** Alle Bilder nutzen das `<picture>`-Element mit modernen Formaten (WebP/AVIF) sowie aussagekräftigen `alt`-Texten. Dekorative Grafiken für Screenreader ausgeblendet.
* **Formulare:**
  * **Eindeutige Zuordnung:** Alle Eingabefelder und Textareas sind über `for`- und `id`-Attribute strikt mit jeweiligen `<label>`-Elementen verknüpft.
  * **Pflichtfeld-Kennzeichnung:** Visuell durch ein Sternchen (`<span aria-hidden="true">*</span>`) und für Screenreader durch einen versteckten Textzusatz `<span class="visually-hidden">(Pflichtfeld)</span>` direkt im Label.
  * **Nationale HTML5-Standards & Autocomplete:** Natives `required`-Attribut bei Pflichtfeldern sowie ergonomische `autocomplete`-Attribute (`name`, `email`), um das Ausfüllen für Hilfstechnologien und Browser-Autofill zu optimieren.

## Technologien

| Technologie | Einsatzphase | Funktion / Einsatzbereich |
| :--- | :--- | :--- |
| **Figma** | Phase 1 | Design-Prototypen, Wireframing & Layout-Planung (Mobile, Tablet, Desktop) |
| **HTML5** | Phase 1–3 | Semantischer & barrierefreier Seitenaufbau (WCAG 2.1 AA) aller 9 Seitentypen |
| **CSS3** | Phase 2–3 | Visuals, Komponenten-Styling, Layout-Raster & UI-Design |
| **Media Queries** | Phase 2–3 | Responsive Anpassung & Breakpoint-Steuerung (360px bis 1920px) |
| **JavaScript (Vanilla JS)** | Phase 2–3 | Interaktive UI-Steuerung (Hamburger-Menü, Dark-Mode-Toggle, evtl. Sprach-Toggle) |
| **Git & GitHub** | Phase 1–3 | Versionskontrolle, Commit-Historie, Tagging der Phasen & Code-Repository |
| **Webfonts / Google Fonts (Self-Hosted)** | Phase 2 | Lokale Einbindung im Repository |

## Repository-Organisation & Versionskontrolle

### Verzeichnisstruktur

```text
.
├── assets/
│   ├── favicon/          # Favicons & Web-App-Manifest
│   ├── fonts/            # Lokale Webfonts (Self-Hosted)
│   ├── images/           # Optimierte Bildressourcen (AVIF/WebP)
│   │   ├── portraits/
│   │   ├── projects/
│   │   ├── culinary/
│   │   └── tools/
│   └── logos/            # Site-Logos (SVG)
├── components/           # Wiederverwendbare HTML-Fragmente (Header, Footer)
├── css/                  # Modulares Stylesheet-System
│   ├── base/             # Grundstyling, Tokens & Reset
│   ├── components/       # UI-Komponenten (Cards, Buttons, Forms etc.)
│   ├── pages/            # Seitenspezifische Styles
│   └── style.css         # Zentrale Import-Datei
├── script/               # JavaScript-Module (Loader, Theme-Toggle)
├── 404.html              # Fehlerseite
├── datenschutz.html      # Datenschutzerklärung
├── impressum.html        # Impressum
├── index.html            # Startseite
├── karriere.html         # Karriere & Werkzeuge
├── kontakt.html          # Kontakt & Formular
├── kulinarik.html        # Foodblog & Küchenschlacht
├── projekte.html         # Projektübersicht
├── story.html            # Persönliche Story
└── README.md             # Projektdokumentation
```
### Commit-Tags & Abgabe-Phasen

Die einzelnen Projektphasen werden im Repository über drei Git-Tags gekennzeichnet:

* **Phase 1 (Konzeption):** `v1-submission1/concept`
* **Phase 2 (Erarbeitung):** `v2-submission2/development`
* **Phase 3 (Finalisierung):** `v3-submission3/finalization`

## Eingesetzte und geplante Funktionalitäten

In **Phase 1** wurden die semantische HTML-Struktur und die Ressourcen vorbereitet. In **Phase 2** wurden das responsive CSS-Layout sowie die interaktiven Funktionen mit JavaScript umgesetzt. **Phase 3** dient der abschließenden Prüfung, Optimierung und Finalisierung.


| Funktionalität | Phase | Umsetzungsstand (Phase 2) |
| :--- | :--- | :--- |
| **Favicon & App-Icons** | Phase 1 | SVG-/ICO-Favicon, Apple-Touch-Icon und Web-App-Manifest eingebunden. |
| **Web-optimierte Bilder** | Phase 1 | AVIF mit WebP-Fallback über `<picture>` eingebunden; responsive Darstellung umgesetzt. |
| **Hamburger-Navigation** | Phase 1–3 | Per JavaScript steuerbar; dynamische ARIA-Zustände, Fokussteuerung und Schließen mit Escape umgesetzt. |
| **Dark-/Light-Mode-Toggle** | Phase 1–3 | Farbschema umschaltbar; Auswahl wird lokal gespeichert und der Zustand über `aria-pressed` vermittelt. |
| **Sticky Header** | Phase 1–2 | Per CSS umgesetzt; Hintergrund wird beim Scrollen dynamisch angepasst. |
| **Akkordeons & Details** | Phase 1–2 | Native Aufklappfunktion mit `<details>` und `<summary>` umgesetzt und gestaltet. |
| **Skip-to-Content-Link** | Phase 1–2 | Bei Tastaturfokus sichtbar; direkter Sprung zum Hauptinhalt umgesetzt. |
| **Back-to-Top-Link** | Phase 1–3 | Scrollabhängige Einblendung und sanftes Zurückscrollen umgesetzt; reduzierte Bewegung berücksichtigt. |
| **Mehrsprachigkeit** | Phase 3 | Optional vorgesehen; bislang nicht implementiert. |

## Autor
**Anja Crhak**  
- GitHub: [@anjacrhak91](https://github.com/anjacrhak91)  
- E-Mail: [anja.crhak@iu-study.org](mailto:anja.crhak@iu-study.org)