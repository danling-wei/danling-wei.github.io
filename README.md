# danling-wei.github.io

Personal portfolio for **Danling Wei** — AI Engineer based in New York City.
A minimalist Apple-flavored dark site built with vanilla HTML, CSS, and JavaScript.
Zero build step, deployed directly via GitHub Pages.

> Live: <https://danling-wei.github.io>

---

## Project structure

```
.
├── index.html                            # Home — markup only, links to assets
├── projects/                             # Case-study detail pages
│   ├── skills-orchestrator.html          # P / 01
│   ├── agentic-rag.html                  # P / 02
│   └── data-pipeline.html                # P / 03
├── assets/
│   ├── favicon.svg                       # DW monogram
│   └── Danling-Wei-Resume.pdf
├── styles/
│   ├── base.css                          # Reset · tokens · fonts · aurora glow
│   ├── layout.css                        # Glass nav · wrap · section framework
│   ├── components.css                    # Pill buttons · tags · metric cards
│   ├── hero.css                          # Hero section
│   ├── sections.css                      # About · work cards · skills · education
│   ├── footer.css                        # Home CTA + footer
│   └── project.css                       # Case-study hero · highlights · next-nav
├── scripts/
│   └── main.js                           # Nav scroll · reveal animations · year
├── .nojekyll                             # Disable Jekyll on GitHub Pages
├── .gitignore
└── README.md
```

## Design system

| Token       | Value                                              |
| ----------- | -------------------------------------------------- |
| Background  | `#000000` (true OLED black)                        |
| Surface     | `#161617` / `#1d1d1f` (Apple-style elevated)       |
| Text        | `#f5f5f7` (Apple white)                            |
| Muted       | `#86868b` (Apple gray)                             |
| Hairline    | `rgba(255,255,255,0.08)`                           |
| Display     | `Inter Tight` — Apple SF Pro Display feel          |
| Body        | `Inter`                                            |
| Mono labels | `JetBrains Mono`                                   |
| Radius      | `22px` (card) · `999px` (pill)                     |
| Max width   | `1280px`                                           |

Apple signature elements: ambient aurora gradient (halo) behind the page, glass nav with
saturated backdrop blur, pill buttons, elevated card surfaces, gradient-clipped headlines.
Sections are numbered `01 – 05` like an editorial table of contents.

## Local development

No tooling needed — just open the file or serve the folder.

```bash
# Option 1: open directly
start index.html

# Option 2: any static server (recommended for correct font/asset loading)
python -m http.server 8080
# or
npx serve .
```

Then visit <http://localhost:8080>.

## Deployment

This repo is a [user GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-sites).
Anything pushed to the default branch is published automatically — no Actions required.

```bash
git add .
git commit -m "Update site"
git push
```

## Updating content

| Change            | Where to edit                                                 |
| ----------------- | ------------------------------------------------------------- |
| Hero / bio        | `index.html` — `#top` and `#about` sections                   |
| Project preview   | `index.html` — `#work` section (bullets + tags)               |
| Project case study| `projects/<slug>.html` — full hero · highlights · stack       |
| Skills            | `index.html` — `#skills` section                              |
| Education         | `index.html` — `#education` section                           |
| Contact / résumé  | `#contact` block + `assets/Danling-Wei-Resume.pdf`            |
| Colors / fonts    | `styles/base.css` (CSS custom properties)                     |
| Animations        | `scripts/main.js`                                             |

### Adding a new case study

1. Duplicate any file in `projects/` as `projects/<slug>.html`.
2. Update the hero (`project-title`, `project-sub`, `metrics`), `highlights`, `stack`, and `next-link`.
3. On `index.html`, add a new `<a class="work-item" href="projects/<slug>.html">` card under `#work`.

## Accessibility

- Semantic landmarks (`<header>`, `<nav>`, `<main>`-equivalent sections, `<footer>`)
- Color contrast meets WCAG AA on all text
- Respects `prefers-reduced-motion` — all animations disabled when requested
- Keyboard-navigable with visible focus states
- Resume PDF available as a direct download

## License

© 2026 Danling Wei. All rights reserved.
