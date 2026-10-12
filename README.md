# An Art Illiterate’s Guide to Art History at the Met

An unofficial, chronological walking route through **The Metropolitan Museum of Art (Fifth Avenue)** for people with zero art background. Walk 5,000 years of art in order — Ancient Egypt to Jackson Pollock — with a 3D floor map that follows you from work to work.

**Live site:** `https://<your-github-username>.github.io/art-illiterate-met-guide/`

## Features

- **3D isometric map** of Floors 1 and 2, built from real gallery footprints. The current era’s wing lights up in its color, a pulsing “You are here” pin marks the current work, and animated arrows show the walk to the next stop. “Follow me” glides the camera to each piece; “Whole floor” zooms out.
- **8 eras, 41 stops** in chronological order, each era opening with its main trend and *why* art looked that way, plus a “how and why the style changed” explainer between eras.
- **18 optional side trips** — must-sees from other cultures made in the same centuries (Benin, Chola India, Yuan China, the Islamic world, the American Wing…).
- **Artwork cards** with an image, gallery number, “look for” and “the story”, opening as a side panel (a full-screen sheet on phones).
- **English / 简体中文** switch in the top-right corner (remembers your choice; `?lang=zh` links straight to Chinese).
- Suggested time per era (about 4 hours total), responsive layout for phone and desktop, keyboard and screen-reader friendly controls, and reduced-motion support.

## Run locally

No build step, no dependencies. From the repo folder:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

(Opening `index.html` directly from disk also works in most browsers.)

## Deploy to GitHub Pages

```bash
git remote add origin git@github.com:<your-github-username>/art-illiterate-met-guide.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`** → Save. The site is live at the URL above within a minute or two. The `.nojekyll` file tells Pages to serve the files as-is.

## Project structure

```
index.html        page shell
css/style.css     styles, 3D map styles and animations
js/runtime.js     tiny state/re-render helper
js/guide.js       eras, works, side trips, floor-plan geometry, route and camera logic
js/i18n.js        UI strings and the Simplified Chinese translation, swapped in at runtime
js/app.js         renders the map, timeline, panels and cards
images/           51 artwork images (Met Open Access, public domain)
```

To edit content, change the `ERAS` and `TRANS` arrays in `js/guide.js`. Each stop has a gallery number, floor and map position (`px`, `py` in metres, Fifth Avenue on the east edge).

## Sources and credits

- **Artwork images:** The Metropolitan Museum of Art, [Open Access](https://www.metmuseum.org/about-the-met/policies-and-documents/open-access) (CC0 / public domain). Works still under copyright, or without an open-access image, are shown without one.
- **Gallery numbers:** the Met Collection API, checked October 2026. Works move, so check the Met’s app or map on the day.
- **Floor plan:** gallery footprints were traced from the Met’s interactive map ([maps.metmuseum.org](https://maps.metmuseum.org)) and simplified to rectangles. Please review the Met’s terms of use before publishing widely.
- **Closures as of October 2026:** the modern and contemporary wing is closed for construction of the Tang Wing (planned 2030); the Ancient West Asian and Cypriot galleries reopen in 2027.

This is an independent project and is not affiliated with or endorsed by The Metropolitan Museum of Art.

## License

Code: MIT (see `LICENSE`). Images: public domain via the Met’s Open Access program.
