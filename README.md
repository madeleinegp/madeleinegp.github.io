# Madeleine Pacheco — personal website

Plain HTML/CSS/JS, no build step. Works as-is on GitHub Pages.

## Put it online

1. Create a GitHub repo named **`<your-username>.github.io`** (gives you `https://<your-username>.github.io`).
2. Upload everything in this folder (keep `.nojekyll`).
3. Repo → Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.
4. The site is live within a minute or two.

## Before you close the Wix site

- **Photos:** images currently fall back to their Wix-hosted copies. Run `sh download-images.sh` inside `images/` to copy them into the repo, then commit.
- **CV:** add your PDF as `cv/PachecoMadeleine_CV.pdf` (the "Download CV" buttons point there).

## To-dos in the HTML

- Add a LinkedIn or Google Scholar button in the contact section of `index.html` if you want one (the old Wix LinkedIn icon linked to Wix's own page).

## Custom domain (optional)

Settings → Pages → Custom domain, enter e.g. `madeleinepacheco.com`. At your registrar add a `CNAME` record for `www` → `<your-username>.github.io`, and `A` records for the apex domain pointing to GitHub's Pages IPs (listed in GitHub's "Managing a custom domain" docs). Tick *Enforce HTTPS*.

## Contact form

GitHub Pages is static, so the Wix form is replaced by an email button. If you want a form back, a free service like Formspree works with a plain `<form action="https://formspree.io/f/...">`.
