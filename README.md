# 🌐 Blog Gisman – Actualités de la signalisation maritime

Bienvenue sur le dépôt GitHub officiel du **blog multilingue de Gisman**, spécialiste international des aides à la navigation maritime. Ce blog présente des articles techniques, réglementaires et historiques sur la signalisation maritime, l’économie bleue, le balisage portuaire et les technologies AtoN.

## 📁 Structure du projet

```bash
├── fr/                     # Articles en français
├── en/                     # Articles en anglais
├── es/                     # Articles en espagnol
├── templates/              # Templates HTML multilingues
│   ├── article-en.html
│   ├── article-es.html
│   └── article-fr.html
├── assets/                 # Images, feuilles de styles, favicon
├── _data/                  # fichier .json pour possible automatisation future
├── index.html              # Page d'accueil du blog (français par défaut)
├── index-en.html           # Page d'accueil en anglais
├── index-es.html           # Page d'accueil en espagnol
├── sitemap.xml             # Plan du site pour le référencement
├── robots.txt              # Directives pour les robots d'indexation
└── LICENSE                 # Licence MIT
```


🔍 Fonctionnalités
✅ Contenu multilingue (français, anglais, espagnol)

✅ Optimisation SEO (balises canonical, hreflang, Open Graph, Twitter Card, etc.)

✅ Design responsive avec styles CSS internes ou externes

✅ Templates HTML modulables pour intégration automatisée

✅ Hébergement GitHub Pages (statique)

🛠️ Utilisation recommandée
Rédiger un article en HTML et l'insérer dans le <body> du template correspondant (fr_template.html, en_template.html, es_template.html).

Remplacer les variables du <head> (ex : {{title}}, {{slug}}, {{meta-description}}) manuellement ou via un script de génération.

Sauvegarder l'article finalisé dans le dossier fr/, en/ ou es/ selon la langue.

Commit & push : le blog est automatiquement mis à jour sur https://actualitesgisman.github.io/Blog

🌍 Lien public
👉 https://actualitesgisman.github.io/Blog

🤝 Contribuer
Ce projet est public mais édité exclusivement par Gisman. Les contributions externes ne sont pas ouvertes.

Cependant, si vous constatez une erreur ou souhaitez suggérer une amélioration (contenu, accessibilité, performance), vous pouvez :

Créer une issue

Ou nous écrire via https://www.gisman.fr
