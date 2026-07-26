# Portfolio — Abdelhadi Amiri

Portfolio personnel responsive réalisé en HTML, CSS et JavaScript, basé sur mon parcours en Data Science et Intelligence Artificielle.

## Aperçu

Le site présente :

- mon profil et mes coordonnées professionnelles ;
- mes expériences à la Faculté de Médecine, de Pharmacie et de Médecine Dentaire de Fès et à l'ONDA ;
- mes projets en Deep Learning, LLM/RAG et Business Intelligence ;
- mes compétences techniques, ma formation et mes certifications ;
- un lien permettant de consulter ou télécharger mon CV.

## Technologies utilisées

- HTML5
- CSS3
- JavaScript natif
- Responsive Design
- GitHub Pages pour le déploiement

## Structure du projet

```text
portfolio-abdelhadi/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── documents/
    │   └── CV_Amiri_Abdelhadi.pdf
    └── images/
        └── favicon.svg
```

## Lancer le portfolio localement

### Méthode simple

Ouvrir directement le fichier `index.html` dans un navigateur.

### Avec Visual Studio Code

1. Ouvrir le dossier du projet dans Visual Studio Code.
2. Installer l'extension **Live Server**.
3. Faire un clic droit sur `index.html`.
4. Cliquer sur **Open with Live Server**.

## Publier le site avec GitHub Pages

### 1. Créer un dépôt GitHub

Créer un nouveau dépôt public nommé :

```text
portfolio-abdelhadi
```

Ne pas ajouter automatiquement de README, car le projet en contient déjà un.

### 2. Envoyer le projet vers GitHub

Ouvrir un terminal dans le dossier du portfolio, puis exécuter :

```bash
git init
git add .
git commit -m "Création de mon portfolio"
git branch -M main
git remote add origin https://github.com/Amiri2812/portfolio-abdelhadi.git
git push -u origin main
```

### 3. Activer GitHub Pages

Dans le dépôt GitHub :

1. Ouvrir **Settings**.
2. Cliquer sur **Pages** dans le menu de gauche.
3. Dans **Build and deployment**, sélectionner **Deploy from a branch**.
4. Choisir la branche **main** et le dossier **/root**.
5. Cliquer sur **Save**.

Après quelques minutes, le portfolio sera disponible à l'adresse :

```text
https://amiri2812.github.io/portfolio-abdelhadi/
```

## Alternative : adresse plus courte

Pour obtenir directement :

```text
https://amiri2812.github.io/
```

le dépôt doit être nommé exactement :

```text
Amiri2812.github.io
```

Dans ce cas, il faut remplacer l'URL du dépôt dans la commande `git remote add origin`.

## Personnalisation avant publication

Dans `index.html`, vérifier ou modifier :

- l'adresse e-mail ;
- le lien GitHub ;
- les dates de stage ;
- les descriptions des projets ;
- les technologies réellement maîtrisées.

Pour remplacer le CV, conserver le même nom de fichier :

```text
assets/documents/CV_Amiri_Abdelhadi.pdf
```

## Mise à jour du site après publication

Après chaque modification :

```bash
git add .
git commit -m "Mise à jour du portfolio"
git push
```

GitHub Pages republiera automatiquement la nouvelle version.

Portfolio publié avec GitHub Pages.

**Abdelhadi Amiri**  
Data Science & Intelligence Artificielle  
Fès, Maroc  
GitHub : [Amiri2812](https://github.com/Amiri2812)
