# Portfolio-Website Anja Crhak
**Studienprojekt Web-Programmierung (DLBUXPWP01)| B.Sc. Medieninformatik**
**IU Internationale Hochschule**

## Projektbeschreibung

Dieses Projekt entsteht im Rahmen des Fernstudiums an der **IU Internationalen Hochschule** im Studiengang **Medieninformatik (B.Sc.)** für den Kurs **Projekt: Web-Programmierung (DLBUXPWP01)** innerhalb eines Creative Labs.

Ziel ist die Entwicklung einer modernen, responsiven Portfolio-Website, die den beruflichen Werdegang von Anja Crhak (von der Realschullehrerin zur Medieninformatikerin & Webentwicklerin), ausgewählte Web- und E-Commerce-Projekte sowie kulinarische Inhalte (Foodblog „Bauchgefühl Rezepte“ & ZDF Küchenschlacht) anschaulich und modern darstellt. Der Fokus liegt dabei konsequent auf **Barrierefreiheit (Accessibility)**, **Responsive Design** und einer **nutzerzentrierten Informationsarchitektur**.

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
Um das Design an verschiedene Bildschirmgrößen von **360px bis 1920px Bildschirmbreite** flexibel anzupassen, werden zwei Breakpoints verwendet, die mithilfe von Media Queries umgesetzt werden.

### Breakpoint-Definitionen
* **Mobile (< 768px):** Basis-Layout (360px Minimum). Einspaltiger Fluss, gestapelte Elemente, eingeklappte Navigation (Hamburger-Menü).
* **Tablet (768px – 1023px):** Zweispaltige Grid- und Flexbox-Raster für Projekt- und Rezeptkarten, angepasste Schriftgrößen und Abstände.
* **Desktop (≥ 1024px bis 1920px):** Mehrspaltiges Layout, ausgeklappte Hauptnavigation im Header, Side-by-Side Ausrichtung von Medien und Texten.

### Responsives Verhalten der Kernkomponenten
* **Header & Navigation:**
  * *Mobile/Tablet:* Logo links, Theme-Toggle-Button, Hamburger-Button (`.site-nav__hamburger`) steuert Menü per JavaScript/CSS.
  * *Desktop:* Hauptnavigation wird als horizontale Liste im Header eingeblendet; Hamburger-Button wird verborgen.
* **Hero- & Text-Sektionen:**
  * *Mobile/Tablet:* Bild- und Textblöcke untereinander angeordnet.
  * *Desktop:* Rasteranzeige (Bild & Text nebeneinander, optimierte Lesebreite).
* **Karten-Layouts (Projekte, Rezepte, Tools):**
  * *Mobile:* 1 - 2 Karte pro Zeile (abhängig von der Art der Karten)
  * *Tablet:* 1 - 2 Karten pro Zeile (abhängig von der Art der Karten)
  * *Desktop:* 2 bis 4 Karten pro Zeile im CSS Grid (abhängig von der Art der Karten)
* **Akkordeons & Timelines (`<details>` / `<summary>`):**
  * Auf allen Geräten platzsparend einklappbar, um den vertikalen Scrollaufwand mobil gering zu halten.

## Design-Entwürfe (Figma Prototyping)

Zur visuellen und strukturellen Planung wurden alle Screens in **Figma** für drei Gerätegrößen (Mobile, Tablet, Desktop) ausgearbeitet:
* Layout-Raster & Spaltenaufteilung
* Typografie, Farben & Abstände
* Responsive Verhaltensmuster der Komponenten

## Barrierefreiheit 

Die HTML-Dateien sind nach Standards der digitalen Barrierefreiheit (WCAG 2.1 Level AA & WAI-ARIA) aufgebaut:

* **Landmark-Struktur:** Strikte Verwendung semantischer HTML5-Elemente (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
* **Skip-Link:** Versteckter Sprunglink `<a href="#main-content">` zu Beginn jeder Seite für Tastaturnutzer.
* **ARIA-Attribute:**
  * `aria-label` zur eindeutigen Benennung von Navigationen, Buttons und Formularelementen.
  * `aria-expanded` & `aria-controls` zur Steuerung des Hamburger-Menüs.
  * `aria-pressed` zur Statusanzeige des Dark-Mode-Toggles.
  * `aria-hidden="true"` für dekorative Icons und SVG-Grafiken.
* **Bilder & Medien:** Alle Bilder nutzen das `<picture>`-Element mit modernen Formaten (WebP/AVIF) sowie aussagekräftigen `alt`-Texten.
* **Formular-Zugänglichkeit & Pflichtfeld-Kennzeichnung:**
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
│   ├── favicon/          # Favicons & Manifest
│   ├── logos/            # Site-Logos (SVG)
│   ├── images/           # Optimierte Bildressourcen
│   │   ├── portraits/
│   │   ├── projects/
│   │   ├── culinary/
│   │   └── tools/
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

Die Funktionalitäten der Website werden schrittweise aufgebaut: In **Phase 1** erfolgt die vollständige Vorbereitung der semantischen HTML-Struktur, ARIA-Attribute und Ressourcen. In **Phase 2 und 3** werden das responsive Styling via CSS sowie die interaktive Logik via JavaScript ergänzt.


| Funktionalität | Beschreibung | Phase |
| :--- | :--- | :--- |
| **Favicon & App-Icons** | Einbindung von SVG/PNG-Icons für Browser-Tabs und Mobile Home-Screens | Phase 1 |
| **Web-optimierte Bilder** | Einsatz des `<picture>`-Elements mit AVIF/WebP für optimierte Ladezeiten | Phase 1 |
| **Hamburger-Navigation** | Barrierefreies Klappmenü für mobile Bildschirme (< 1024px). HTML-Button mit `aria-expanded` & `aria-controls` vorbereitet, Interaktivität folgt in weiteren Phasen | Phase 1–3 |
| **Dark- / Light-Mode Toggle** | Umschalten des Farbschemas; Button mit `aria-pressed="false"` im Header integriert, Interaktivität folgt in weiteren Phasen | Phase 1-3 |
| **Sticky Header** | Fixierte Navigationsleiste beim Scrollen; Semantisches `<header>`-Element mit allen Navigationskomponenten integriert, CSS-Styling folgt in weiteren Phasen | Phase 1-2 |
| **Sprachumschalter (DE/EN)** | Optionale Umschaltung der Inhaltssprache für internationale Besucher. | Phase 2–3 |
| **Akkordeons & Details** | Platzsparendes Ein-/Ausklappen von Inhalten via HTML5 `<details>`; CSS-Styling folgt in weiteren Phasen | Phase 1–2 |
| **Skip-To-Content Link** | Direktes Überspringen der Hauptnavigation für Tastatur- und Screenreader-Nutzung; Anker-Link `<a href="#main-content">` eingebunden, CSS-Styling folgt in Phase 2 | Phase 1–2 |
| **Back-to-Top Button** | Zurückspringen zum Seitenanfang bei langen Abschnitten; Anker-Link zum Seitenanfang vorbereitet, Interakvitität und Smooth Scrolling folgt in weiteren Phasen | Phase 1–3 |

## Autor
**Anja Crhak**  
- GitHub: [@anjacrhak91](https://github.com/anjacrhak91)  
- E-Mail: [anja.crhak@iu-study.org](mailto:anja.crhak@iu-study.org)