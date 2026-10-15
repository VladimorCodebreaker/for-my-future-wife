# A table for two ♡
A personal 3D dinner invitation for Sonia, from Vladimir, for **November 17, 2026**.

A responsive, buildless website with a CSS 3D candlelit table, pointer interaction, an accessible reduced-motion mode, an acceptance celebration, a copyable reply and an all-day calendar download. No package installation, API keys or backend required.

## Host on GitHub Pages
1. Create a GitHub repository and add `index.html`, `style.css`, `script.js` and `.github/workflows/pages.yml`, preserving the folder structure.
2. Push to the `main` branch.
3. In the repository, open **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.
4. Open **Actions → Deploy invitation to GitHub Pages → Run workflow** if the initial run has not deployed. Future pushes to `main` deploy automatically.
5. Your invitation will be at `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

Alternatively, use **Deploy from a branch**, selecting `main` and `/ (root)`; the three website files work without the workflow.

## Preview locally
Open `index.html` in a browser. For a local server: `python3 -m http.server 8000`, then visit http://localhost:8000.

## Personalize
Edit the names, wording and displayed date in `index.html`. The calendar date and confirmation messages are in `script.js`. No dinner time has been assumed: the calendar is an all-day reminder and the reply asks you to agree on a time.

Replies are not collected or sent. Sonia can copy her acceptance and send it to you. Clipboard support depends on browser permissions and HTTPS; a selectable text fallback is provided.

Google Fonts is optional: system serif and sans-serif fonts are used if it is unavailable. All other visuals are rendered locally in CSS, with no external images or JavaScript dependencies.

GitHub Pages websites are generally public. Avoid putting your home address or other private information in the source.
