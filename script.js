/* ── Données des projets (PPP) ── */
var projets = [
  {
    emoji: "🖧",
    titre: "Configuration Réseau — VLANs",
    sousTitre: "SAÉ — BUT Informatique 1ère année",
    description: "Mise en place d'une architecture réseau segmentée pour un environnement simulé d'entreprise. Le projet consistait à configurer des VLANs sur un switch manageable pour séparer les différents services (administration, production, invités) et assurer la communication inter-VLAN via un routeur.",
    objectifs: [
      "Segmenter un réseau en plusieurs VLANs",
      "Configurer le routage inter-VLAN",
      "Tester la connectivité entre les sous-réseaux",
      "Documenter l'architecture réseau mise en place"
    ],
    groupe: "Projet réalisé en groupe de 3 dans le cadre d'une SAÉ. Nous avons travaillé ensemble sur la conception de l'architecture réseau, puis réparti les tâches de configuration entre les membres du groupe.",
    individuel: "J'ai été responsable de la configuration des VLANs sur le switch (création, nommage, attribution des ports) et de la rédaction du schéma réseau. J'ai aussi aidé à déboguer les problèmes de communication inter-VLAN.",
    competences: [
      "C3 — Administrer des systèmes communicants : configurer un poste dans un réseau d'entreprise",
      "C3 — Concevoir et développer des applications communicantes",
      "C5 — Conduire un projet : identifier les phases du cycle de développement",
      "C6 — Travailler en équipe : répartir les tâches et communiquer"
    ],
    techniques: [
      "Configuration de VLANs sur switch (mode access, mode trunk)",
      "Adressage IP et sous-réseaux",
      "Routage inter-VLAN avec un routeur",
      "Rédaction de documentation technique avec schéma réseau"
    ],
    techs: ["Cisco Packet Tracer", "VLAN", "Routage", "TCP/IP"]
  },
  {
    emoji: "🐧",
    titre: "Installation Serveur Linux",
    sousTitre: "TP — BUT Informatique 1ère année",
    description: "Installation et configuration d'un serveur Debian en machine virtuelle. Le projet couvre l'installation du système d'exploitation, la configuration réseau, la mise en place de services (SSH, Apache) et l'écriture de scripts Bash pour automatiser des tâches d'administration courantes.",
    objectifs: [
      "Installer un système Linux (Debian) en machine virtuelle",
      "Configurer le réseau (IP statique, DNS, passerelle)",
      "Mettre en place un serveur SSH et un serveur web Apache",
      "Écrire des scripts Bash pour automatiser des tâches"
    ],
    groupe: "Projet réalisé en binôme dans le cadre d'un TP d'administration système. Chacun avait sa machine virtuelle mais nous nous aidions mutuellement pour résoudre les problèmes.",
    individuel: "J'ai réalisé l'installation complète du système, la configuration réseau, et j'ai écrit un script Bash de sauvegarde automatique des fichiers de configuration. J'ai aussi mis en place le serveur web Apache avec une page d'accueil personnalisée.",
    competences: [
      "C3 — Administrer : installer et configurer un OS et des outils de développement",
      "C3 — Utiliser les fonctionnalités d'un système multitâches / multiutilisateurs",
      "C3 — Sécuriser les services et données d'un système",
      "C1 — Réaliser : implémenter des conceptions simples (scripts Bash)"
    ],
    techniques: [
      "Installation Debian avec partitionnement manuel",
      "Configuration réseau en ligne de commande (ip, /etc/network/interfaces)",
      "Administration de services avec systemctl",
      "Scripts Bash (boucles, conditions, cron)"
    ],
    techs: ["Debian", "Bash", "SSH", "Apache", "VirtualBox"]
  },
  {
    emoji: "🗃️",
    titre: "Base de Données Médiathèque",
    sousTitre: "SAÉ — BUT Informatique 1ère année",
    description: "Conception et création d'une base de données relationnelle pour une médiathèque fictive. Le projet couvre le modèle conceptuel de données (MCD), le passage au modèle logique (MLD), la création des tables en SQL avec contraintes, et l'écriture de requêtes pour répondre aux besoins des usagers et du personnel.",
    objectifs: [
      "Concevoir un modèle conceptuel de données (MCD)",
      "Transformer le MCD en modèle logique et créer les tables SQL",
      "Écrire des requêtes SQL avec jointures et agrégations",
      "Documenter la base de données (dictionnaire de données)"
    ],
    groupe: "Projet réalisé en groupe de 3 dans le cadre d'une SAÉ de bases de données. Chaque membre du groupe a pris en charge une partie du modèle et des requêtes.",
    individuel: "J'ai conçu la partie du MCD liée aux emprunts et aux adhérents, créé les tables correspondantes avec les contraintes d'intégrité, et écrit les requêtes complexes impliquant des jointures et des fonctions d'agrégation.",
    competences: [
      "C4 — Gérer les données : concevoir une base de données relationnelle à partir d'un cahier des charges",
      "C4 — Mettre à jour et interroger une base de données relationnelle",
      "C5 — Conduire un projet : appréhender les besoins du client",
      "C6 — Travailler en équipe : identifier les rôles dans l'équipe"
    ],
    techniques: [
      "Modèle Conceptuel de Données (MCD) avec entités et associations",
      "SQL : CREATE TABLE avec clés primaires, étrangères et contraintes",
      "Requêtes SELECT avec JOIN, GROUP BY, HAVING",
      "Fonctions d'agrégation (COUNT, SUM, AVG)"
    ],
    techs: ["SQL", "PostgreSQL", "Draw.io", "pgAdmin"]
  },
  {
    emoji: "🌐",
    titre: "Site Web — Portfolio",
    sousTitre: "Projet personnel — BUT Informatique 1ère année",
    description: "Développement de ce portfolio en HTML, CSS et JavaScript. Le site présente mon parcours, mes projets et mes compétences. Il intègre un système de navigation par ancres, des animations CSS et un formulaire de contact. C'est mon premier projet web complet.",
    objectifs: [
      "Apprendre les bases du HTML sémantique et du CSS",
      "Créer un site responsive adapté au mobile",
      "Ajouter de l'interactivité avec JavaScript (modale, scroll)",
      "Mettre en ligne le site sur GitHub Pages"
    ],
    groupe: "Projet personnel développé seul, en dehors des cours, pour apprendre le développement web et avoir un support pour présenter mes travaux.",
    individuel: "J'ai conçu la maquette, écrit tout le code HTML/CSS/JavaScript, et appris à utiliser Git et GitHub pour versionner et publier le site.",
    competences: [
      "C1 — Réaliser : développer des interfaces utilisateurs",
      "C1 — Élaborer et implémenter des conceptions simples",
      "C2 — Optimiser : analyser un problème avec méthode (responsive design)",
      "C6 — Travailler en équipe : rendre compte de son activité professionnelle (portfolio)"
    ],
    techniques: [
      "HTML5 sémantique et accessibilité de base",
      "CSS : variables, Flexbox, Grid, media queries, animations",
      "JavaScript : manipulation du DOM, événements, scroll",
      "Git pour le versionnage et GitHub Pages pour le déploiement"
    ],
    techs: ["HTML", "CSS", "JavaScript", "Git", "GitHub Pages"]
  }
];

/* ── Ouvrir la modale de détail d'un projet ── */
function ouvrirDetail(index) {
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

  /* Afficher la modale */
  document.getElementById('modale-overlay').classList.add('visible');
  document.body.style.overflow = 'hidden';
}

/* ── Fermer la modale ── */
function fermerDetail(event) {
  /* Si appelé depuis l'overlay, ne fermer que si on clique sur l'overlay lui-même */
  if (event && event.target !== document.getElementById('modale-overlay')) return;
  document.getElementById('modale-overlay').classList.remove('visible');
  document.body.style.overflow = '';
}

/* Fermer avec la touche Echap */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    fermerDetail();
  }
});

/* ── Mise à jour du lien actif dans la navbar au scroll ── */
window.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('section[id]');
  var scrollPos = window.scrollY + 120;
  var liens = document.querySelectorAll('.nav-link');

  /* Si on est en bas de page, activer le dernier lien (Contact) */
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 50) {
    liens.forEach(function(l) { l.classList.remove('active'); });
    var dernier = sections[sections.length - 1];
    if (dernier) {
      liens.forEach(function(l) {
        if (l.getAttribute('href') === '#' + dernier.getAttribute('id')) {
          l.classList.add('active');
        }
      });
    }
    return;
  }

  sections.forEach(function(section) {
    var top = section.offsetTop;
    var height = section.offsetHeight;
    var id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      liens.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
});

/* ── Menu burger (mobile) ── */
function toggleMenu() {
  document.querySelector('.nav-liens').classList.toggle('open');
}

/* Fermer le menu quand on clique sur un lien */
document.querySelectorAll('.nav-link').forEach(function(link) {
  link.addEventListener('click', function() {
    document.querySelector('.nav-liens').classList.remove('open');
  });
});

/* ── Formulaire de contact ── */
function envoyerFormulaire(event) {
  event.preventDefault();
  var bouton = event.target.querySelector('.btn-envoyer');
  bouton.textContent = 'Message envoyé !';
  bouton.style.backgroundColor = '#22c55e';
  event.target.reset();
  setTimeout(function() {
    bouton.textContent = 'Envoyer';
    bouton.style.backgroundColor = '';
  }, 3000);
}
