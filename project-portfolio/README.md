# Portfolio Website — Dancher Silvanie

A personal portfolio website built from scratch with vanilla HTML, CSS, and JavaScript. No frameworks, no libraries — just clean, hand-written code.

## Live Pages

| Pagina | Beschrijving |
|--------|-------------|
| `index.html` | Home met hero-sectie en typed-effect |
| `about.html` | Over mij, fotogalerij en tijdlijn |
| `skills.html` | Vaardigheden met geanimeerde progress bars |
| `projects.html` | Overzicht van portfolio-projecten |
| `hobbies.html` | Interesses en hobby's |
| `contact.html` | Contactformulier en contactgegevens |

## Features

- **Typed effect** — roulerende rolnamen in de hero (Software Developer, Student, etc.)
- **Scroll-animaties** — elementen faden in via de IntersectionObserver API
- **Geanimeerde skill bars** — progress bars animeren wanneer ze in beeld komen
- **Foto-carousel** — swipeable galerij met dots-navigatie op de about-pagina
- **Responsive hamburger menu** — mobiel-vriendelijke navigatie vanaf 640px
- **Contactformulier** — client-side validatie met submit-feedback

## Tech Stack

- HTML5 (semantische markup, Nederlandse taal)
- CSS3 (custom properties, Flexbox, Grid, animaties)
- Vanilla JavaScript (geen frameworks of npm-packages)

## Project Structure

```
project-portfolio/
├── index.html        # Home
├── about.html        # Over mij
├── skills.html       # Vaardigheden
├── projects.html     # Projecten
├── hobbies.html      # Hobby's
├── contact.html      # Contact
├── css/
│   └── style.css     # Alle styling (dark theme)
├── js/
│   └── main.js       # Interactiviteit
└── images/
    ├── foto.jpg
    ├── foto2.jpg
    └── foto3.jpg
```

## Design

- **Kleurschema**: Indigo (`#6C63FF`) + Teal (`#00D9A3`) op donker navy achtergrond
- **Typografie**: Systeemfonts met `clamp()` voor responsive scaling
- **Breakpoints**: 900px (twee kolommen → één kolom), 640px (mobiel menu)
- **Geen externe dependencies** — volledig zelfgeschreven

## Installatie

Geen installatie vereist. Open een van de HTML-bestanden direct in de browser of via een lokale server (bijv. XAMPP):

```
http://localhost/Portofolio-opdrachten/project-portfolio/
```

## Portfolio Projecten

De projecten-pagina verwijst naar twee andere projecten:

- **KickOff** — FotMob-geïnspireerde voetbalsite (`../project-fotmob/`)
- **WatchList** — Media tracker voor films en series (`../project-html/`)

## Over de developer

- **Naam**: Dancher Silvanie
- **School**: Techniek College Rotterdam
- **Opleiding**: MBO Software Developer
- **Status**: Beschikbaar voor stage en werk

## License

Dit project is gebouwd als portfolio-opdracht voor educatieve doeleinden.
