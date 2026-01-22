# KODXO - Landing Page

Site vitrine institutionnel pour KODXO, agence d'automatisation et d'IA basée à Yaoundé, Cameroun.

## 🚀 Technologies

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Déploiement**: Docker

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Lancer en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🐳 Déploiement avec Docker

```bash
# Construire l'image Docker
docker build -t kodxo-landing .

# Lancer le conteneur
docker run -p 3000:3000 kodxo-landing
```

## 🎨 Design System

### Palette de Couleurs "Dark Tech Premium"

- **Background**: #0B1120 (Bleu Nuit Profond)
- **Accent/CTA**: #EA580C (Orange Cuivre)
- **Texte Principal**: #FFFFFF (Blanc)
- **Texte Secondaire**: #94A3B8 (Gris Ardoise)

### Typographie

- **Police**: Montserrat (Google Fonts)
- **Titres**: Bold/ExtraBold
- **Corps**: Regular/Light

## 📝 Sections

1. **Header** - Navigation sticky avec effet glassmorphism
2. **Hero** - Section d'accueil avec titre principal et CTAs
3. **Pain Points** - 3 cartes présentant les problématiques clients
4. **Services** - Les 3 piliers de l'offre KODXO
5. **Tech Stack** - Technologies maîtrisées
6. **Contact** - Formulaire de contact et CTAs
7. **Footer** - Informations légales

## 🔧 Configuration

Pour personnaliser le site:

1. **WhatsApp**: Modifier le numéro dans `components/WhatsAppButton.tsx` et `components/Contact.tsx`
2. **Email**: Modifier l'adresse dans `components/Contact.tsx`
3. **Réseaux sociaux**: Ajouter les liens dans `components/Footer.tsx`

## 📄 License

© 2025 KODXO. Tous droits réservés.
