/* ── Données des projets ── */
var projets = [
  {
    emoji: "🌐",
    titre: "Site Web Personnel",
    sousTitre: "Projet personnel — BUT Informatique 1ère année",
    description: "Création de mon premier site web en HTML et CSS. L'objectif était de comprendre la structure d'une page web, le positionnement des éléments avec Flexbox, et de créer un design responsive. Le site présente mes centres d'intérêt et sert de premier portfolio.",
    objectifs: [
      "Apprendre les bases du HTML sémantique",
      "Maîtriser le positionnement CSS (Flexbox)",
      "Rendre le site responsive (adapté mobile)",
      "Publier le site sur GitHub Pages"
    ],
    groupe: "Projet réalisé seul, en dehors des cours, pour mettre en pratique ce que j'apprenais en développement web.",
    individuel: "J'ai conçu la maquette, écrit tout le code HTML et CSS, et appris à utiliser GitHub Pages pour mettre le site en ligne.",
    competences: [
      "Structurer une page web en HTML",
      "Styliser avec CSS et Flexbox",
      "Adapter le design au mobile (media queries)",
      "Utiliser Git pour versionner le code"
    ],
    techniques: [
      "HTML5 sémantique (header, nav, main, footer)",
      "CSS Flexbox pour la mise en page",
      "Media queries pour le responsive",
      "Déploiement avec GitHub Pages"
    ],
    techs: ["HTML", "CSS", "Git", "GitHub Pages"]
  },
  {
    emoji: "🎮",
    titre: "Jeu du Pendu en Java",
    sousTitre: "Projet universitaire — BUT Informatique 1ère année",
    description: "Développement d'un jeu du pendu en mode console avec Java. Le programme lit une liste de mots depuis un fichier texte, en choisit un au hasard, et le joueur doit deviner les lettres. Le jeu gère les tentatives restantes et affiche le pendu en ASCII art.",
    objectifs: [
      "Pratiquer la programmation orientée objet en Java",
      "Gérer la lecture de fichiers texte",
      "Implémenter une boucle de jeu complète",
      "Gérer les entrées utilisateur et les erreurs"
    ],
    groupe: "Projet réalisé en binôme avec un camarade de promotion. Nous avons travaillé ensemble sur la conception et nous sommes réparti les classes à coder.",
    individuel: "J'ai développé la classe principale du jeu (logique de jeu, vérification des lettres) et l'affichage en ASCII art du pendu.",
    competences: [
      "Programmation orientée objet (classes, méthodes)",
      "Manipulation de fichiers en Java",
      "Gestion des chaînes de caractères",
      "Travail en binôme avec Git"
    ],
    techniques: [
      "Classes Java (Scanner, File, ArrayList)",
      "Boucles et conditions pour la logique de jeu",
      "Lecture de fichier texte avec BufferedReader",
      "Utilisation de Git pour travailler à deux"
    ],
    techs: ["Java", "Git"]
  },
  {
    emoji: "🗃️",
    titre: "Base de Données Médiathèque",
    sousTitre: "Projet universitaire — BUT Informatique 1ère année",
    description: "Conception et création d'une base de données relationnelle pour une médiathèque fictive. Le projet couvre le modèle conceptuel (MCD), le passage au modèle logique, la création des tables en SQL et l'écriture de requêtes pour répondre à des questions métier.",
    objectifs: [
      "Concevoir un modèle conceptuel de données (MCD)",
      "Créer les tables avec les bonnes contraintes",
      "Écrire des requêtes SQL (SELECT, JOIN, GROUP BY)",
      "Documenter la base de données"
    ],
    groupe: "Projet réalisé en groupe de 3 dans le cadre du cours de bases de données. Chaque membre a pris en charge une partie du modèle.",
    individuel: "J'ai conçu la partie du MCD liée aux emprunts et adhérents, créé les tables correspondantes et écrit les requêtes complexes avec des jointures.",
    competences: [
      "Modélisation conceptuelle (entités, associations)",
      "Création de tables SQL avec contraintes",
      "Écriture de requêtes SELECT avec jointures",
      "Travail en équipe et répartition des tâches"
    ],
    techniques: [
      "Modèle Conceptuel de Données (MCD)",
      "SQL : CREATE TABLE, INSERT, SELECT",
      "Jointures (INNER JOIN, LEFT JOIN)",
      "Fonctions d'agrégation (COUNT, AVG, GROUP BY)"
    ],
    techs: ["SQL", "PostgreSQL", "Draw.io"]
  },
  {
    emoji: "🐍",
    titre: "Script Python — Analyse de données",
    sousTitre: "Projet universitaire — BUT Informatique 1ère année",
    description: "Programme Python qui lit un fichier CSV contenant des données (notes d'étudiants), calcule des statistiques (moyenne, médiane, écart-type) et affiche un résumé formaté dans le terminal. Premier contact avec le traitement de données.",
    objectifs: [
      "Lire et parser un fichier CSV en Python",
      "Calculer des statistiques de base",
      "Formater et afficher les résultats proprement",
      "Gérer les erreurs (fichier manquant, données invalides)"
    ],
    groupe: "Projet individuel réalisé dans le cadre du cours d'initiation à Python.",
    individuel: "J'ai développé l'intégralité du script : lecture du fichier, traitement des données, calculs statistiques et affichage des résultats.",
    competences: [
      "Programmation Python (boucles, fonctions, listes)",
      "Manipulation de fichiers CSV",
      "Calculs mathématiques de base",
      "Gestion d'erreurs (try/except)"
    ],
    techniques: [
      "Module csv de Python pour lire les données",
      "Listes et dictionnaires pour stocker les résultats",
      "Fonctions personnalisées pour les calculs",
      "Formatage de chaînes (f-strings)"
    ],
    techs: ["Python"]
  }
];

/* ── Navigation entre pages ── */
function allerPage(nom) {
  /* Cacher toutes les pages */
  var pages = document.querySelectorAll('.page');
  pages.forEach(function(p) { p.classList.remove('active'); });

  /* Afficher la page demandée */
  var page = document.getElementById('page-' + nom);
  if (page) {
    page.classList.add('active');
    /* Relancer l'animation */
    page.style.animation = 'none';
    page.offsetHeight; /* forcer le reflow */
    page.style.animation = '';
  }

  /* Mettre à jour le lien actif dans la navbar */
  var liens = document.querySelectorAll('.nav-link');
  liens.forEach(function(l) {
    l.classList.remove('active');
    if (l.getAttribute('data-page') === nom) {
      l.classList.add('active');
    }
  });

  window.scrollTo(0, 0);
}

/* ── Afficher le détail d'un projet ── */
function allerDetail(index) {
  var p = projets[index];

  document.getElementById('detail-emoji').textContent = p.emoji;
  document.getElementById('detail-titre').textContent = p.titre;
  document.getElementById('detail-sous-titre').textContent = p.sousTitre;
  document.getElementById('detail-description').textContent = p.description;
  document.getElementById('detail-groupe').textContent = p.groupe;
  document.getElementById('detail-individuel').textContent = p.individuel;

  /* Objectifs */
  var objEl = document.getElementById('detail-objectifs');
  objEl.innerHTML = '';
  p.objectifs.forEach(function(o) {
    var li = document.createElement('li');
    li.textContent = o;
    objEl.appendChild(li);
  });

  /* Compétences */
  var compEl = document.getElementById('detail-competences');
  compEl.innerHTML = '';
  p.competences.forEach(function(c) {
    var li = document.createElement('li');
    li.textContent = c;
    compEl.appendChild(li);
  });

  /* Techniques */
  var techEl = document.getElementById('detail-techniques');
  techEl.innerHTML = '';
  p.techniques.forEach(function(t) {
    var li = document.createElement('li');
    li.textContent = t;
    techEl.appendChild(li);
  });

  /* Badges techs */
  var badgesEl = document.getElementById('detail-techs');
  badgesEl.innerHTML = '';
  p.techs.forEach(function(t) {
    var span = document.createElement('span');
    span.className = 'detail-badge';
    span.textContent = t;
    badgesEl.appendChild(span);
  });

  allerPage('detail');
}

/* ── Toggle mode clair / sombre ── */
function toggleMode() {
  var body = document.body;
  var btn = document.getElementById('btn-mode');
  body.classList.toggle('clair');

  if (body.classList.contains('clair')) {
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" stroke="currentColor"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  } else {
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" stroke="currentColor"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>';
  }
}

/* ── Formulaire de contact ── */
function envoyerFormulaire(event) {
  event.preventDefault();
  var bouton = event.target.querySelector('.btn-envoyer');
  bouton.textContent = 'Message envoyé !';
  bouton.style.backgroundColor = '#10b981';
  event.target.reset();
  setTimeout(function() {
    bouton.textContent = 'Envoyer';
    bouton.style.backgroundColor = '';
  }, 3000);
}
