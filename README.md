# Portfolio — Chloé Schakowskoy

Site statique (HTML/CSS/JS, sans framework) — facile à héberger sur Netlify, Vercel ou GitHub Pages.

## Structure

- `index.html` — page principale (hero, projets, méthode, à propos, parcours, presse, contact)
- `project.html` — modèle vierge de fiche projet, à dupliquer si tu ajoutes un 7ᵉ projet
  (ex: `project-07.html`) et à chaîner dans la navigation précédent/suivant.
- `project-01.html` à `project-06.html` — une page par carte projet de la grille, déjà reliées entre
  elles par la navigation précédent/suivant. C'est ici que tu ajoutes les vraies photos et le texte
  de chaque projet.
- `css/style.css` — tous les styles (couleurs, typographie, espacements en haut du fichier)
- `js/script.js` — menu mobile, filtre projets, formulaire de contact, animations au scroll
- `assets/logo/` — ton logo (`logo.png`), déjà en place.
- `assets/about/` — ta photo de la section À propos (`portrait.jpg`), déjà en place.
- `assets/projects/` — dépose tes photos de projets ici, puis remplace les `<div class="placeholder-fill">`
  dans chaque `project-0N.html` par des `<img src="assets/projects/....jpg" alt="...">`.

## Ce qui est en placeholder, à remplacer

- Nom, ville, bio dans `index.html` (section À propos)
- Dates et noms précis dans la section Parcours (école de commerce, poste immobilier, école d'archi)
- Les 6 cartes projets (titre, lieu, année, catégorie, photo) dans `index.html`
- Les 6 fiches `project-01.html` à `project-06.html` (photos, client, lieu, texte)
- Lien TikTok et Pinterest (`href="#"`) dans la section Contact
- Presse & collaborations (logos ou noms de clients)

## Prévisualiser en local

Ouvre simplement `index.html` dans ton navigateur, ou lance un petit serveur local :

```bash
cd portfolio-site
python3 -m http.server 8000
```

Puis va sur `http://localhost:8000`.

## Déployer (plus tard)

Le dossier `portfolio-site` peut être déposé tel quel sur Netlify ou Vercel (glisser-déposer le dossier
sur netlify.com/drop pour un premier test en 30 secondes), ou poussé sur un repo GitHub pour un déploiement
automatique.

## Contact form

Le formulaire ouvre actuellement le client mail (mailto:) — aucune donnée n'est envoyée à un serveur.
Une fois hébergé, tu peux le remplacer par un service comme Formspree ou Netlify Forms pour un envoi direct.
