/* ── Données des projets (PPP) ── */
    /* Note : toutes les chaînes utilisent des guillemets doubles pour éviter
       tout conflit avec les apostrophes françaises                          */
    var projets = [
      {
        emoji: "🌐",
        titre: "Application Web Full-Stack",
        sousTitre: "Projet universitaire — BUT Informatique 2ème année",
        description: "Développement d'une application web complète permettant aux utilisateurs de s'inscrire, se connecter et gérer leurs données. L'application intègre une API REST, une base de données relationnelle et un système d'authentification sécurisé par token JWT.",
        objectifs: [
          "Concevoir une architecture client-serveur moderne",
          "Mettre en place un système d'authentification sécurisé",
          "Déployer l'application sur un VPS avec Nginx",
          "Rédiger une documentation technique complète"
        ],
        groupe: "Projet réalisé en binôme. Nous avons défini ensemble l'architecture et réparti les tâches lors de réunions hebdomadaires avec un suivi via GitHub Projects.",
        individuel: "J'ai été responsable du développement du back-end (API Node.js + PostgreSQL) ainsi que du déploiement sur le serveur. J'ai également rédigé la documentation de l'API.",
        competences: [
          "Développement back-end avec Node.js et Express",
          "Conception de base de données relationnelle",
          "Sécurisation des échanges (JWT, HTTPS)",
          "Travail collaboratif avec Git"
        ],
        techniques: [
          "Mise en place d'une API RESTful",
          "Utilisation de JWT pour l'authentification",
          "Déploiement Nginx + PM2 sur VPS",
          "Gestion de base PostgreSQL avec migrations"
        ],
        techs: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Nginx", "Git"]
      },
      {
        emoji: "🖧",
        titre: "Infrastructure Réseau",
        sousTitre: "Projet universitaire — BUT Informatique 1ère année",
        description: "Mise en place d'une infrastructure réseau sécurisée pour un environnement simulé d'entreprise. Le projet comprend la configuration de routeurs, de VLAN, d'un pare-feu et d'un système de monitoring centralisé.",
        objectifs: [
          "Segmenter le réseau avec des VLANs",
          "Configurer un pare-feu et des règles de filtrage",
          "Mettre en place un outil de monitoring (Zabbix)",
          "Documenter l'architecture réseau"
        ],
        groupe: "Projet réalisé en groupe de 3. Chaque membre était responsable d'un sous-réseau. Nous avons utilisé un dépôt Git commun pour centraliser les configurations.",
        individuel: "J'ai géré la configuration du pare-feu (pfSense) et mis en place le système de monitoring Zabbix pour superviser l'ensemble des équipements du réseau.",
        competences: [
          "Administration système Linux",
          "Configuration réseau (routage, VLAN, NAT)",
          "Sécurité informatique (pare-feu, règles ACL)",
          "Supervision et monitoring"
        ],
        techniques: [
          "Configuration de VLANs sur switch manageable",
          "Mise en place de pfSense comme pare-feu",
          "Déploiement de Zabbix pour le monitoring",
          "Automatisation avec Ansible"
        ],
        techs: ["Linux", "Docker", "Ansible", "pfSense", "Zabbix", "VLAN", "Bash"]
      },
      {
        emoji: "📱",
        titre: "Application Mobile",
        sousTitre: "Projet personnel — Développement cross-platform",
        description: "Conception et développement d'une application mobile disponible sur iOS et Android permettant de gérer des listes de tâches avec synchronisation en temps réel via Firebase. L'application intègre des notifications push et un mode hors-ligne.",
        objectifs: [
          "Développer une application cross-platform unique",
          "Implémenter la synchronisation temps réel",
          "Gérer les notifications push",
          "Assurer le fonctionnement hors-ligne"
        ],
        groupe: "Projet personnel développé seul en dehors des heures de cours pour approfondir mes compétences en développement mobile.",
        individuel: "J'ai conçu et développé l'intégralité de l'application : architecture, interface, logique métier et intégration Firebase.",
        competences: [
          "Développement mobile React Native",
          "Intégration de services cloud (Firebase)",
          "Gestion d'état avec Redux",
          "Publication sur stores (Android/iOS)"
        ],
        techniques: [
          "React Native avec TypeScript",
          "Firebase Firestore pour la BDD temps réel",
          "Firebase Cloud Messaging pour les notifications",
          "AsyncStorage pour le mode hors-ligne"
        ],
        techs: ["React Native", "TypeScript", "Firebase", "Redux", "Expo", "iOS", "Android"]
      },
      {
        emoji: "📊",
        titre: "Dashboard Analytics",
        sousTitre: "Projet universitaire — BUT Informatique 2ème année",
        description: "Développement d'un tableau de bord interactif permettant de visualiser des données issues d'une API. L'outil propose différents types de graphiques, des filtres dynamiques et un export PDF des rapports.",
        objectifs: [
          "Consommer et afficher des données depuis une API",
          "Créer des graphiques interactifs et dynamiques",
          "Permettre l'export des données en PDF",
          "Rendre l'interface responsive"
        ],
        groupe: "Projet réalisé en groupe de 2. Nous avons défini ensemble les fonctionnalités et travaillé en parallèle grâce à Git.",
        individuel: "J'ai développé la partie front-end (Vue.js + Chart.js) et mis en place le système d'export PDF avec la librairie jsPDF.",
        competences: [
          "Développement front-end avec Vue.js",
          "Consommation d'API REST",
          "Visualisation de données",
          "Génération de documents PDF"
        ],
        techniques: [
          "Vue.js 3 avec Composition API",
          "Chart.js pour les graphiques",
          "Axios pour les appels API",
          "jsPDF pour l'export PDF"
        ],
        techs: ["Vue.js", "Python", "Chart.js", "Axios", "jsPDF", "Flask", "Git"]
      }
    ];

    /* ── Navigation entre pages ── */
    function allerPage(nom) {
      var pages = document.querySelectorAll('.page');
      pages.forEach(function(p) { p.classList.remove('active'); });
      document.getElementById('page-' + nom).classList.add('active');
      window.scrollTo(0, 0);
    }

    /* ── Afficher le détail d'un projet ── */
    function allerDetail(index) {
      var p = projets[index];

      document.getElementById('detail-emoji').textContent     = p.emoji;
      document.getElementById('detail-titre').textContent     = p.titre;
      document.getElementById('detail-sous-titre').textContent = p.sousTitre;
      document.getElementById('detail-description').textContent = p.description;
      document.getElementById('detail-groupe').textContent    = p.groupe;
      document.getElementById('detail-individuel').textContent = p.individuel;

      /* Objectifs */
      var objEl = document.getElementById('detail-objectifs');
      objEl.innerHTML = '';
      p.objectifs.forEach(function(o) {
        var li = document.createElement('li'); li.textContent = o; objEl.appendChild(li);
      });

      /* Compétences */
      var compEl = document.getElementById('detail-competences');
      compEl.innerHTML = '';
      p.competences.forEach(function(c) {
        var li = document.createElement('li'); li.textContent = c; compEl.appendChild(li);
      });

      /* Techniques */
      var techEl = document.getElementById('detail-techniques');
      techEl.innerHTML = '';
      p.techniques.forEach(function(t) {
        var li = document.createElement('li'); li.textContent = t; techEl.appendChild(li);
      });

      /* Badges */
      var badgesEl = document.getElementById('detail-techs');
      badgesEl.innerHTML = '';
      p.techs.forEach(function(t) {
        var span = document.createElement('span');
        span.className = 'ppp-badge'; span.textContent = t;
        badgesEl.appendChild(span);
      });

      allerPage('detail');
    }

    /* ── Toggle mode clair / sombre ── */
    function toggleMode() {
      var body = document.body;
      var btn  = document.getElementById('btn-mode');
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
      var bouton = event.target.querySelector('.bouton-envoyer');
      bouton.textContent = '✓ Message envoyé !';
      bouton.style.color = '#28c840';
      bouton.style.borderColor = 'rgba(40, 200, 64, 0.35)';
      event.target.reset();
      setTimeout(function() {
        bouton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" stroke="currentColor"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Envoyer';
        bouton.style.color = '';
        bouton.style.borderColor = '';
      }, 3000);
    }