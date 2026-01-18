# KODXO - Landing Page

Site vitrine professionnel pour KODXO, agence d'automatisation et IA basée à Yaoundé, Cameroun.

## 🚀 Technologies

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Déploiement:** Docker

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Builder pour production
npm run build

# Lancer en production
npm start
```

## 🐳 Docker

```bash
# Build l'image Docker
docker build -t kodxo-landing .

# Lancer le container
docker run -p 3000:3000 kodxo-landing
```

## 🎨 Design System

- **Background:** #0B1120 (Deep Night Blue)
- **Accent:** #EA580C (Copper Orange)
- **Text Primary:** #FFFFFF (White)
- **Text Secondary:** #94A3B8 (Slate Gray)
- **Font:** Montserrat (Google Fonts)

## 📱 Sections

1. **Header** - Navigation sticky avec glassmorphism
2. **Hero** - Section d'accueil avec CTA
3. **Problems** - 3 cartes des pain points
4. **Services** - Les 3 piliers (ERP, Automation, Dev)
5. **Tech Stack** - Logos des technologies
6. **Contact** - Formulaire d'audit gratuit
7. **Footer** - Copyright et liens
8. **WhatsApp** - Bouton flottant fixe

## 🌐 Configuration

Pour modifier le numéro WhatsApp, éditez `/components/WhatsAppButton.tsx`:
```typescript
const phoneNumber = '237XXXXXXXXX'; // Remplacer par le vrai numéro
```

## 📄 License

© 2025 KODXO. Tous droits réservés.
