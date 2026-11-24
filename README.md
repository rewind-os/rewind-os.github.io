# rewind-os.github.io

The landing page of [Rewind OS](https://github.com/rewind-os/rewind-os-app), served by GitHub
Pages from the root of `main`. Plain HTML, CSS and a little JavaScript: no build step.

- `index.html`: the page (English; `assets/js/main.js` holds the Spanish text and switches it).
- `assets/css/style.css`: the same colour tokens as the app's theme.
- `assets/js/main.js`: language switch and direct download links from the latest release
  (the links fall back to the releases page when the GitHub API is not reachable).
- `assets/img/`: the app icon and screenshots, taken with
  `REWIND_OS_PAGE=<page> REWIND_OS_SCREENSHOT=out.ppm cargo run -p rewind-os` in the app repository.

Preview locally with `python3 -m http.server` and open http://localhost:8000.
