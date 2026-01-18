# **CAHIER DES CHARGES WEB : SITE VITRINE KODXO v1.0**

Projet : Création du site web institutionnel (Landing Page)  
Client : KODXO (Agence d'Automatisation & IA)  
Date : Janvier 2025  
Contact Technique : \[Votre Nom\]

## **1\. CONTEXTE ET OBJECTIFS**

### **1.1 Présentation**

KODXO est une agence basée au Cameroun, spécialisée dans l'architecture logicielle, l'intégration ERP (Odoo) et l'automatisation par l'IA. Notre mission est de transformer les opérations manuelles des PME en systèmes autonomes.

### **1.2 Objectifs du site**

Le site a un objectif principal de **conversion** et un objectif secondaire d'**image de marque**.

1. **Conversion (Lead Gen) :** Inciter le visiteur à réserver un "Audit Flash Gratuit" (30 min).  
2. **Crédibilité (Branding) :** Positionner KODXO comme une agence "Premium Tech", bien au-dessus des freelances locaux classiques. L'image doit inspirer la solidité, l'ingénierie et l'ordre.

### **1.3 Cible**

Directeurs Généraux (DG), DRH et décideurs de PME en Afrique Centrale et à l'international.

## **2\. SPÉCIFICATIONS GRAPHIQUES (UI/UX)**

L'identité visuelle est stricte et définie comme **"Dark Tech Premium"**.

### **2.1 Palette de Couleurs (Strict)**

* **Fond Principal (Background) :** Bleu Nuit Profond \#0B1120 (Utiliser bg-slate-900 ou hex direct).  
* **Couleur d'Action (Accent/CTA) :** Orange Cuivre \#EA580C.  
* **Texte Principal :** Blanc \#FFFFFF ou Gris très clair \#F8FAFC.  
* **Texte Secondaire :** Gris Ardoise \#94A3B8.  
* **Interdit :** Pas de dégradés arc-en-ciel, pas de couleurs pastels, pas d'ombres portées "sales".

### **2.2 Typographie**

* **Police Unique :** Montserrat (Google Fonts).  
* **Titres (H1, H2) :** Montserrat **Bold** ou **ExtraBold**. Tout en majuscules si nécessaire pour l'impact.  
* **Corps de texte :** Montserrat **Regular** ou **Light**.  
* **Code/Tech :** Pour des petits détails techniques, une police monospace est tolérée (Fira Code ou Courier).

### **2.3 Style Visuel**

* **Ambiance :** Mode Sombre (Dark Mode) par défaut.  
* **Effets :** Glassmorphism (effets de verre flouté sur la Navbar et les cartes), lueurs subtiles (Glow effects) derrière les éléments clés.  
* **Iconographie :** Minimaliste, filaire (outline), style ingénierie.  
* **Images :** Pas de photos stock génériques de "gens qui se serrent la main". Utiliser des illustrations abstraites de données, de réseaux ou de serveurs (fournies par le client ou générées par IA).

## **3\. ARCHITECTURE ET CONTENU (SITEMAP)**

Le site sera une **Landing Page (One Page)** avec navigation par ancres.

**Structure de la page :**

1. **Header (Sticky) :** Logo KODXO (Gauche) \+ Menu (Solutions, Méthode) \+ CTA "Audit Flash" (Droite).  
2. **Hero Section (Haut de page) :**  
   * H1 : "L'Ordre par l'Intelligence."  
   * Sous-titre : "Transformez la complexité opérationnelle en avantage compétitif."  
   * Double CTA : "Réserver mon Audit" (Primaire) \+ "Découvrir nos solutions" (Secondaire).  
   * Background : Grille technique subtile ou illustration 3D abstraite.  
3. **Section "Pain Points" (Problème) :** 3 cartes mettant en avant les douleurs actuelles (Excel, Tâches manuelles, Perte de temps).  
4. **Section Services (Les 3 Piliers) :**  
   * Pilier 1 : ERP Odoo (Le Cerveau).  
   * Pilier 2 : Automation & IA (Le Système Nerveux).  
   * Pilier 3 : Dev Fullstack (L'Interface).  
5. **Section Stack Technique (Reassurance) :** Logos des technos maîtrisées (Python, Docker, React, n8n, Odoo) en monochrome/gris pour montrer l'expertise technique.  
6. **Footer :** Liens rapides, Copyright, Mention "Basé à Yaoundé".

## **4\. SPÉCIFICATIONS TECHNIQUES**

### **4.1 Stack Technique Imposée**

* **Frontend :** Next.js (Dernière version stable) ou React.js \+ Vite.  
* **Styling :** Tailwind CSS (Obligatoire pour la maintenance future).  
* **Langue :** TypeScript (Recommandé) ou JavaScript moderne (ES6+).  
* **Animations :** Framer Motion (pour des apparitions fluides au scroll) \- *Attention : Les animations doivent être légères et ne pas ralentir le site.*

### **4.2 Performance & SEO**

* **Mobile First :** Le site doit être parfaitement navigable sur mobile (majorité du trafic au Cameroun).  
* **Vitesse :** Score Lighthouse \> 90 sur Desktop et Mobile. Images optimisées (.webp).  
* **SEO :** Balises Meta (Title, Description) configurées, balisage sémantique HTML5 (Header, Main, Section, Footer) respecté.

### **4.3 Fonctionnalités Spécifiques**

* **Bouton WhatsApp Flottant :** Un bouton fixe en bas à droite redirigeant vers l'API WhatsApp Business.  
* **Formulaire de Contact :** Doit être fonctionnel (envoi d'email via API type EmailJS ou Formspree, ou connexion webhook vers n8n).

## **5\. LIVRABLES ATTENDUS**

1. **Code Source :** Dépôt Git propre (GitHub ou GitLab).  
2. **Build :** Version de production prête à être déployée (dossier /dist ou .next).  
3. **Déploiement :**  
   * Le développeur doit fournir un Dockerfile simple pour conteneuriser l'application.  
   * *Optionnel :* Assistance au déploiement sur le VPS du client.  
4. **Assets :** Fichiers sources des icônes ou images modifiées.

## **6\. DÉLAIS ET BUDGET**

* **Date de livraison souhaitée :** \[Date\] (ex: J+7 après signature).  
* **Budget alloué :** \[Montant ou "Sur Devis"\].

## **7\. ANNEXE : PREMIÈRE ISSUE GITHUB (PRÊTE À L'EMPLOI)**

*Ceci est le modèle complet à copier-coller dans votre outil de gestion de projet (GitHub Issues, Trello, Jira). Il contient les textes définitifs pour éviter les ambiguïtés.*

**Titre de l'issue :** 🚀 Dev : Initialisation Landing Page KODXO v1.0

**Description :**

### **Contexte**

Développement de la Landing Page KODXO (One Page) selon le guide de style "Dark Tech Premium".  
Objectif : Conversion vers la prise de rendez-vous ("Audit Flash").

### **1\. Structure HTML5 & Contenu (Textes Fournis)**

#### **A. Header (Sticky & Glassmorphism)**

* \[ \] **Logo** : SVG \<K\> (couleur \#EA580C) à gauche \+ Texte "KODXO".  
* \[ \] **Menu** : Liens ancrés vers \#services ("Solutions") et \#methode ("Méthode").  
* \[ \] **CTA** : Bouton "Audit Flash Gratuit" (Fond Orange \#EA580C, Texte Blanc, Arrondi).

#### **B. Hero Section (Écran d'accueil)**

* \[ \] **H1 (Titre Principal)** : L'ORDRE PAR L'INTELLIGENCE. (Police Montserrat Bold/Black).  
* \[ \] **H2 (Sous-titre)** : Transformez la complexité opérationnelle en avantage compétitif. (Couleur \#94A3B8).  
* \[ \] **CTA Primaire** : Réserver mon Audit (Fond Orange, ombre portée).  
* \[ \] **CTA Secondaire** : Découvrir nos solutions (Fond transparent, Bordure Blanche/Grise).  
* \[ \] **Visuel** : Arrière-plan "Abstract Data Flow" ou Grille technique sombre.

#### **C. Section Problème (3 Cartes)**

* \[ \] **Carte 1** : Icone 📊 | Titre : "Fini Excel" | Txt : "Plus de fichiers éparpillés. Centralisez vos données."  
* \[ \] **Carte 2** : Icone 🤖 | Titre : "Fini le Manuel" | Txt : "Vos employés ne doivent plus faire de copier-coller."  
* \[ \] **Carte 3** : Icone 🚀 | Titre : "Place à la Croissance" | Txt : "Un système qui tourne tout seul."

#### **D. Section Services (Les 3 Piliers)**

* \[ \] **Pilier 1** : "Le Cerveau (ERP Odoo)" \- Txt: "Installation et configuration. Ventes, Stocks, RH centralisés."  
* \[ \] **Pilier 2** : "Le Système Nerveux (Automation)" \- Txt: "Workflows n8n & Agents IA pour supprimer les tâches répétitives."  
* \[ \] **Pilier 3** : "L'Interface (Dev Fullstack)" \- Txt: "Développement React/Python sur mesure quand le standard ne suffit plus."

#### **E. Stack & Footer**

* \[ \] **Stack Technique** : Afficher les logos (Python, Docker, React, n8n, Odoo) en gris monochrome (opacity 50%) pour la réassurance.  
* \[ \] **Footer** : "© 2025 KODXO. Basé à Yaoundé." \+ Liens réseaux sociaux.

### **2\. UI/UX & Design System**

* \[ \] **Palette KODXO** :  
  * Background : \#0B1120 (Bleu Nuit Profond)  
  * Accent/Boutons : \#EA580C (Orange Cuivre)  
  * Texte : \#FFFFFF (Titre) & \#94A3B8 (Corps)  
* \[ \] **Typographie** : Montserrat (Google Fonts) pour tout le site.  
* \[ \] **Effets** : Utiliser un effet "Glow" (lueur) subtil derrière les éléments clés.

### **3\. Fonctionnalités Techniques**

* \[ \] **WhatsApp** : Bouton flottant en bas à droite (z-index max), lien vers https://wa.me/237xxxxxxxxx.  
* \[ \] **Formulaire** : Simple champ email ou lien vers Calendly/Formspree.  
* \[ \] **Performance** : Score Lighthouse \> 90 (Images WebP, CSS minifié).

### **4\. Livrables**

* \[ \] Code source sur branche main.  
* \[ \] Dockerfile à la racine pour déploiement rapide.  
* \[ \] Dossier /dist (si build nécessaire).