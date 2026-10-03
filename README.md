# Portfolio-Website Anja Crhak
**Studienprojekt Web-Programmierung (DLBUXPWP01)| B.Sc. Medieninformatik**
**IU Internationale Hochschule**

## Projektbeschreibung

Dieses Projekt entsteht im Rahmen des Fernstudiums an der **IU Internationalen Hochschule** im Studiengang **Medieninformatik (B.Sc.)** für den Kurs **Projekt: Web-Programmierung (DLBUXPWP01)** innerhalb eines Creative Labs.

Ziel ist die Entwicklung einer modernen, responsiven Portfolio-Website, die den beruflichen Werdegang von Anja Crhak (von der Realschullehrerin zur Medieninformatikerin & Webentwicklerin), ausgewählte Web- und E-Commerce-Projekte sowie kulinarische Inhalte (Foodblog „Bauchgefühl Rezepte“ & ZDF Küchenschlacht). Der Fokus liegt dabei konsequent auf **Barrierefreiheit (Accessibility)**, **Responsive Design** und einer **nutzerzentrierten Informationsarchitektur**.

## Inhaltsverzeichnis

- [Seitenstruktur & geplante Inhalte](#seitenstruktur--geplante-inhalte)
- [Responsive Design](#responsive-design--breakpoint-konzept)
- [Design-Entwürfe](#design-entwürfe-figma-prototyping)
- [Barrierefreiheit](#barrierefreiheit)
- [Tech-Stack & Entwicklungsstand (Phase 1)](#tech-stack--entwicklungsstand-phase-1)
- [Repository-Struktur](#repository-struktur)
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

Die HTML-Dateien sind strikt nach Standards der digitalen Barrierefreiheit (WCAG 2.1 Level AA & WAI-ARIA) aufgebaut:

* **Landmark-Struktur:** Strikte Verwendung semantischer HTML5-Elemente (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
* **Skip-Link:** Versteckter Sprunglink `<a href="#main-content">` zu Beginn jeder Seite für Tastaturnutzer.
* **ARIA-Attribute:**
  * `aria-label` zur eindeutigen Benennung von Navigationen, Buttons und Formularelementen.
  * `aria-expanded` & `aria-controls` zur Steuerung des Hamburger-Menüs.
  * `aria-pressed` zur Statusanzeige des Dark-Mode-Toggles.
  * `aria-hidden="true"` für dekorative Icons und SVG-Grafiken.
* **Bilder & Medien:** Alle Bilder nutzen das `<picture>`-Element mit modernen Formaten (WebP/AVIF) sowie aussagekräftigen `alt`-Texten.
* **Formular-Zugänglichkeit & Pflichtfeld-Kennzeichnung:**
  * **Eindeutige Zuordnung:** Alle Eingabefelder und Textareas sind über `for`- und `id`-Attribute strikt mit ihren jeweiligen `<label>`-Elementen verknüpft.
  * **Pflichtfeld-Kennzeichnung:** Visuell durch ein Sternchen (`<span aria-hidden="true">*</span>`) und für Screenreader durch einen versteckten Textzusatz `<span class="visually-hidden">(Pflichtfeld)</span>` direkt im Label.
  * **Nationale HTML5-Standards & Autocomplete:** Verwendung des nativen `required`-Attributes bei Pflichtfeldern sowie ergonomische `autocomplete`-Attribute (`name`, `email`), um das Ausfüllen für Hilfstechnologien und Browser-Autofill zu optimieren.

## Tech-Stack & Entwicklungsstand (Phase 1)

* **HTML5:** Semantischer, valider HTML-Code für alle 9 Seitentypen
* **CSS3:** Vorbereitung von semantischen CSS-Klassen und UI-Komponenten (`.button`, `.badge`, `.content-card`, `.recipe-card`, `.timeline`). *(Styling folgt in der nächsten Phase)*.
* **Versionskontrolle:** Git & GitHub Repository mit strukturierter Commit-Historie.

## Repository-Struktur

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

## Autor
**Anja Crhak**  
- GitHub: [@anjacrhak91](https://github.com/anjacrhak91)  
- E-Mail: [anja.crhak@iu-study.org](mailto:anja.crhak@iu-study.org)