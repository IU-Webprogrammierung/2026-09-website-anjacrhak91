# Persönlicher Webauftritt von Anja Crhak

## Projekt: Web-Programmierung (DLBUXPWP01)

Dieses Projekt entsteht im Rahmen des Fernstudiums an der **IU Internationalen Hochschule** im Studiengang **Medieninformatik (B.Sc.)** für den Kurs **Projekt: Web-Programmierung (DLBUXPWP01)** innerhalb eines Creative Labs.

Ziel ist die Entwicklung einer modernen, responsiven Portfolio-Website, die meinen beruflichen Werdegang, ausgewählte Projekte sowie persönliche Facetten (wie mein Hobby Kochen) anschaulich präsentiert. Der Fokus liegt dabei konsequent auf **Barrierefreiheit (Accessibility)**, **Responsive Design** und einer **nutzerzentrierten Informationsarchitektur**. Dabei wird der Content-First und Mobile-First-Ansatz verfolgt. 

## Inhaltsverzeichnis

- [Geplante Seitenstruktur](#geplante-seitenstruktur)
- [Geplante Technologien](#geplante-technologien)
- [Responsive Design](#responsive-design)
- [Autor](#autor)

## Geplante Seitenstruktur

| Seite | Datei | Geplante Inhalte |
| --- | --- | --- |
| **Home** | `index.html` | Hero-Bereich, Teaser zu Werdegang, Projekten und Kulinarik |
| **Karriere** | `karriere.html` | Berufliche Timeline |
| **Projekte** | `projekte.html` | Präsentation für Webdesign-Projekte und Studienarbeiten |
| **Story** | `story.html` | Erzählung der persönlichen Geschichte in vorwiegend Textform |
| **Kulinarik** | `kulinarik.html` | Kochbereich mit Sektionen "Blog", "Küchenschlacht" und "Rezepte" (eventuell Verlinkungen zu weiteren Seiten statt Sektionen) |
| **Kontakt** | `kontakt.html` | Kontaktformular, Social Links, Kontaktdaten |
| **Impressum** | `impressum.html` | Impressum mit Anbieter-Kennzeichnung: Name, Anschrift, Kontaktdaten |
| **Datenschutz** | `datenschutz.html` | Datenschutzerklärung nach DSGVO |
| **404** | `404.html` | Individuell gestaltete Fehlerseite |

## Geplante Technologien

- **HTML5** (Semantischer Aufbau)
- **CSS3** (Responsive Styling)
- **Media Queries** (Responsive Anpassung an verschiedene Bildschirmgrößen)
- **optional JavaScript**
- **Google Fonts** (Einbindung von Google Fonts)

## Responsive Design
Um das Design an verschiedene Bildschirmgrößen flexibel anzupassen, werden zwei Breakpoints verwendet, die mithilfe von Media Queries umgesetzt werden. Das Layout soll nach dem **Mobile-First-Ansatz** entwickelt werden. Die Basis-Styles gelten für kleine Bildschirme (Mobile). Über `@media (min-width: ...)` werden die Styles für größere Bildschirme erweitert:

| Bereich | Breakpoint (`min-width`) | Zielgeräte |
| --- | --- | --- |
| **Mobile** | `0px` (Keine Media Query) | Smartphones |
| **Tablet** | `768px` | Tablets, Smartphones (Querformat) |
| **Desktop** | `1024px` | Laptops & Desktop-Monitore |


## Autor
**Anja Crhak**  
- GitHub: [@anjacrhak91](https://github.com/anjacrhak91)  
- E-Mail: [anja.crhak@iu-study.org](mailto:anja.crhak@iu-study.org)